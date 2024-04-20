import React from "react";

interface ButtonProps {
  className: string;
  value: string;
  isdisabled: boolean;
}

export default function Button({ className, value, isdisabled }: ButtonProps) {
  return (
    <button type="button" className={className} disabled={isdisabled}>
      {value}
    </button>
  );
}
