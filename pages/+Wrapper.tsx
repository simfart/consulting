import React from "react";
import { AppProvider } from "@/app";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return <AppProvider>{children}</AppProvider>;
}
