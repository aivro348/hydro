import React from "react";

export function RvsLogo({
  className = "h-10 w-10",
}: {
  className?: string;
}) {
  return (
    <img
      src="/favicon.png"
      alt="RVS Hydraulics Logo"
      className={`${className} object-contain rounded-lg`}
    />
  );
}
