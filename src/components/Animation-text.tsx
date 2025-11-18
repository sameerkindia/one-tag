"use client";
import React from "react";
import { useTheme } from "../contexts/theme-context";

export default function AnimationText({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();
  return (
    <span
      key={theme}
      className={`chroma-text chroma-text-animate text-nowrap ${
        theme === "dark" ? "bg-gradient-dark" : "bg-gradient-light"
      }`}
    >
      {children}
    </span>
  );
}
