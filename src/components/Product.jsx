import React from "react";
import { Link } from "react-router-dom";

export default function Product() {
  return (
    <div>
      <p>this is product </p>
      <Link to="/" className="underline">
        go to dashboard
      </Link>
    </div>
  );
}
