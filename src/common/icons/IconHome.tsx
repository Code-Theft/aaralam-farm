import { IconProps } from "@lib/types";
import React from "react";

const Icon = (props: IconProps) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect width="24" height="24" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.25 11.8713V16.5H15.75V11.8713L12 8.12132L8.25 11.8713ZM6.75 11.25V18H17.25V11.25L12 6L6.75 11.25Z"
        fill="black"
      />
    </svg>
  );
};

export default Icon;
