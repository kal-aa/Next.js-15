"use client";

import { ImageSlider } from "@/components/ImageSlider";
import { ThemeContext } from "@/components/ThemeProvider";
import { clientSideFunction } from "@/utils/client-utils";
import { useContext } from "react";

export default function ClientRoutePage() {
  const { theme, setTheme } = useContext(ThemeContext)!;
  const result = clientSideFunction();

  return (
    <>
      <h1 style={{ color: theme.colors.primary }}>
        Context Theme by: {theme.name}
      </h1>
      <p>{result}</p>
      <button
        onClick={() =>
          setTheme((prevTheme) => ({
            name: prevTheme.name === "Kalab" ? "Sadam" : "Kalab",
            colors: {
              ...prevTheme.colors,
              primary:
                prevTheme.colors.primary === "#007bff" ? "#6c757d" : "#007bff",
            },
          }))
        }
        className="border cursor-pointer max-w-22"
      >
        Toggle
      </button>
      <ImageSlider />
    </>
  );
}
