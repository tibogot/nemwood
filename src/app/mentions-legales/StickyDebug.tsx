"use client";

import { useEffect } from "react";

/**
 * Debug component to check for overflow issues that break sticky positioning
 * Remove this component once sticky is working
 */
export default function StickyDebug() {
  useEffect(() => {
    const stickyElement = document.querySelector('nav.sticky');
    if (!stickyElement) {
      console.log('❌ Sticky element not found');
      return;
    }

    console.log('🔍 Checking for overflow issues on sticky element ancestors...');
    
    let parent = stickyElement.parentElement;
    let level = 1;
    const issues: Array<{ element: string; property: string; value: string }> = [];

    while (parent && parent !== document.body) {
      const styles = window.getComputedStyle(parent);
      const overflow = styles.overflow;
      const overflowY = styles.overflowY;
      const overflowX = styles.overflowX;
      const position = styles.position;
      const height = styles.height;
      const maxHeight = styles.maxHeight;

      if (overflow !== 'visible' && overflow !== 'clip') {
        issues.push({
          element: `${parent.tagName}${parent.className ? `.${parent.className.split(' ').join('.')}` : ''}`,
          property: 'overflow',
          value: overflow,
        });
      }

      if (overflowY !== 'visible' && overflowY !== 'clip') {
        issues.push({
          element: `${parent.tagName}${parent.className ? `.${parent.className.split(' ').join('.')}` : ''}`,
          property: 'overflow-y',
          value: overflowY,
        });
      }

      // Log all parent info for debugging
      console.log(`Level ${level}:`, {
        element: `${parent.tagName}${parent.className ? `.${parent.className.split(' ').join('.')}` : ''}`,
        overflow,
        overflowY,
        overflowX,
        position,
        height,
        maxHeight,
      });

      parent = parent.parentElement;
      level++;
    }

    if (issues.length > 0) {
      console.error('❌ Found overflow issues that may break sticky positioning:');
      issues.forEach(issue => {
        console.error(`  - ${issue.element}: ${issue.property} = ${issue.value}`);
      });
    } else {
      console.log('✅ No overflow issues found on ancestors');
    }

    // Check sticky element itself
    const stickyStyles = window.getComputedStyle(stickyElement);
    console.log('📌 Sticky element styles:', {
      position: stickyStyles.position,
      top: stickyStyles.top,
      bottom: stickyStyles.bottom,
      height: stickyStyles.height,
    });

    // Check parent aside
    const aside = stickyElement.closest('aside');
    if (aside) {
      const asideStyles = window.getComputedStyle(aside);
      console.log('📋 Aside container styles:', {
        height: asideStyles.height,
        minHeight: asideStyles.minHeight,
        maxHeight: asideStyles.maxHeight,
        display: asideStyles.display,
        alignItems: asideStyles.alignItems,
        alignSelf: asideStyles.alignSelf,
      });
    }
  }, []);

  return null;
}

