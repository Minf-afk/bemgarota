import "../styles/globals.css";
import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";

export const metadata = {
  title: "Home | Bem Garota",
  description: "Bem Vindo ao Lar das Roupas Femininas!",
};

const RootLayout = ({ children }) => (
  <html lang="br">
    <head>
      <link 
        href="https://fonts.googleapis.com/css2?family=Playwright+IN:wght@100..400&display=swap" 
        rel="stylesheet"
      />
    </head>
    <body>
      <AntdRegistry>{children}</AntdRegistry>
    </body>
  </html>
);

export default RootLayout;
