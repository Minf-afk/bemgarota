import '../styles/globals.css';
import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';

export const metadata = {
  title: 'Home | Bem Garota',
  description: 'Bem Vindo ao Lar das Roupas Femininas!',
}; 

const RootLayout = ({ children }) => (
  <html lang="br">
    <body>
      <AntdRegistry>{children}</AntdRegistry>
    </body>
  </html>
);

export default RootLayout;