import React from "react";
import "./Header.css";

export default function Header({ title }) {
  return (
    <div>
      <h1 className="header">{title}</h1>
      <h3 title="Samp header" data-testid="heading-1">
        Samp header 2
      </h3>
    </div>
  );
}
