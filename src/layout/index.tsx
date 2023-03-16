import React from "react";
import {LayoutContainer} from "@/layout/style";

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FunctionComponent<Props> = ({ children }) => (
  <LayoutContainer>
    {children}
  </LayoutContainer>
)