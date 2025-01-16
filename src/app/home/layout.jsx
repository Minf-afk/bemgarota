import React from 'react';
import '../../styles/globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';

const RootLayout = ({ children }) => (
  <html lang="br">
    <body>
      <AntdRegistry>{children}</AntdRegistry>
    </body>
  </html>
);

export default RootLayout;