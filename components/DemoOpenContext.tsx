"use client";

import { createContext, useContext } from "react";

export const DemoOpenContext = createContext<() => void>(() => {});

export function useOpenDemo() {
  return useContext(DemoOpenContext);
}
