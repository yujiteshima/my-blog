import React from 'react';
import Footer from './Footer';
import Header from './Header';

type LayoutProps = Required<{
  readonly children?: React.ReactNode;
}>;

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 max-w-4xl w-full mx-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
