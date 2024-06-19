

import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "./Header";
import styles from "./Layout.module.css";

interface LayoutProps {
  pageTitle: string;
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/fav-icon.ico" />
        <title>{pageTitle}</title>
      </Head>
      <div className={styles.wrapper}>
        <Header />
        <main className={styles.content}>{children}</main>
      </div>
      <footer className={styles.footer}>
        <p>&copy; 2024 PostGuru</p>
      </footer>
    </>
  );
};

export default Layout;
