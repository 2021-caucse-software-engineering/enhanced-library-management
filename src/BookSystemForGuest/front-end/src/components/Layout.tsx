import { Flex } from "@chakra-ui/layout";
import React from "react";
import Navigation from "./Navigation";

type LayoutProps = {
  children: React.ReactElement;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex height="100vh">
      <Navigation />
      {children}
    </Flex>
  );
};

export default Layout;
