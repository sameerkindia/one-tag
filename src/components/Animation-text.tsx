"use client";
import React from "react";
import { useTheme } from "../contexts/theme-context";

export default function AnimationText({
  children,
  onRepeat = false,
}: {
  children: React.ReactNode;
  onRepeat ?: boolean
}) {
  const { theme } = useTheme();
  return (
    <span
      key={theme}
      className={`chroma-text chroma-text-animate ${onRepeat ? 'repeat' : 'repeat'} ${
        theme === "dark" ? "bg-gradient-dark" : "bg-gradient-light"
      }`}
    >
      {children}
    </span>
  );
}
