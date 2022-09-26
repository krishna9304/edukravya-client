import { createTheme, Theme } from "@mui/material";

const MuiTheme: Theme = createTheme({
  palette: {
    primary: {
      main: "#4338ca",
      "100": "#e0e7ff",
      "200": "#c7d2fe",
      "300": "#a5b4fc",
      "400": "#818cf8",
      "500": "#6366f1",
      "600": "#4f46e5",
      "700": "#4338ca",
      "800": "#3730a3",
      "900": "#312e81",
    },
    secondary: {
      main: "#0ea5e9",
      "50": "#f0f9ff",
      "100": "#e0f2fe",
      "200": "#bae6fd",
      "300": "#7dd3fc",
      "400": "#38bdf8",
      "500": "#0ea5e9",
      "600": "#0284c7",
      "700": "#0369a1",
      "800": "#075985",
      "900": "#0c4a6e",
    },
    info: {
      main: "#fff",
      "900": "#f9fafb",
      "800": "#f3f4f6",
      "700": "#e5e7eb",
      "600": "#d1d5db",
      "500": "#9ca3af",
      "400": "#6b7280",
      "300": "#4b5563",
      "200": "#374151",
      "100": "#1f2937",
      "50": "#111827",
    },
    success: {
      main: "#22c55e",
      "50": "#f0fdf4",
      "100": "#dcfce7",
      "200": "#bbf7d0",
      "300": "#86efac",
      "400": "#4ade80",
      "500": "#22c55e",
      "600": "#16a34a",
      "700": "#15803d",
      "800": "#166534",
      "900": "#14532d",
    },
    error: {
      main: "#ff0000",
      "50": "#fef2f2",
      "100": "#fee2e2",
      "200": "#fecaca",
      "300": "#fca5a5",
      "400": "#f87171",
      "500": "#ef4444",
      "600": "#dc2626",
      "700": "#b91c1c",
      "800": "#991b1b",
      "900": "#7f1d1d",
    },
  },
});

export default MuiTheme;
