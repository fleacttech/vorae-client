declare module 'next/link' {
  import * as React from 'react';

  interface LinkProps {
    href: string;
    children?: React.ReactNode;
    [key: string]: any;
  }

  const Link: React.FC<LinkProps>;
  export default Link;
}

