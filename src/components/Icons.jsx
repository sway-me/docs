import React from "react";

export default function Icons({ data, size = 55 }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {data.map(({ name }, i) => (
        <a
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0.75rem",
            color: "slategray",
            fontSize: "64%",
            cursor: "pointer",
          }}
          key={i}
          href={`/intro/alternatives#${name}`}
        >
          <div style={{ height: size, width: size }} className={name} />
          <div
            style={{ wordWrap: "break-word", width: size, textAlign: "center" }}
          >
            {name}
          </div>
        </a>
      ))}
    </div>
  );
}
