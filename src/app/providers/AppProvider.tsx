import React from "react";
import "@/app/styles/globals.scss";

interface AppProviderProps {
  children: React.ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return <div className="app">{children}</div>;
}
