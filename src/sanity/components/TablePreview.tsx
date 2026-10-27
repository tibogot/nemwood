import React from "react";
import { PreviewProps } from "sanity";

type TableRow = { cells?: string[] };
type TableValue = { title?: string; rows?: TableRow[] } | null;

// `value` is passed at runtime but is not part of the PreviewProps type
export function TablePreview(props: PreviewProps & { value?: unknown }) {
  const value = props.value as TableValue;
  if (!value?.rows?.length) {
    return props.renderDefault(props);
  }

  return (
    <div style={{ overflowX: "auto", margin: "4px 0" }}>
      {value.title && (
        <div style={{ fontWeight: 600, marginBottom: 6 }}>{value.title}</div>
      )}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: 13,
          fontFamily: "inherit",
        }}
      >
        <tbody>
          {value.rows.map((row, i) => (
            <tr key={i}>
              {(row.cells || []).map((cell, j) => (
                <td
                  key={j}
                  style={{
                    border: "1px solid #e0e0e0",
                    padding: "6px 10px",
                    textAlign: "left",
                    background: i === 0 ? "#f5f5f5" : undefined,
                    fontWeight: i === 0 ? 600 : undefined,
                  }}
                >
                  {cell || "\u00a0"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
