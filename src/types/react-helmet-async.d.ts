declare module "react-helmet-async" {
  import * as React from "react";

  export interface HelmetProviderProps {
    children?: React.ReactNode;
    context?: Record<string, unknown>;
  }

  export const HelmetProvider: React.ComponentType<HelmetProviderProps>;

  export const Helmet: React.ComponentType<{
    children?: React.ReactNode;
  }>;
}