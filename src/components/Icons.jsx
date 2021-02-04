import React from "react";

export default function Icons({ data, size = 60 }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        padding: "1rem 2rem",
      }}
    >
      {data.map(({ name, url }, i) => (
        <a
          key={i}
          href={url}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "1rem",
            color: "slategray",
            marginRight: "1rem",
            fontSize: 11,
          }}
        >
          <div style={{ height: size, width: size }} className={name} />
          {name}
        </a>
      ))}
    </div>
  );
}
