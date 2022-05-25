import { ReactNode } from "react";
import Head from "next/head";
import MyLink from "./my-link";

interface BaseLayoutProps {
  children: ReactNode;
  keywords: string;
  title?: string;
}

const MainContainer = ({
  children,
  keywords,
  title = "Test Task",
}: BaseLayoutProps) => {
  return (
    <>
      <Head>
        <meta name="keywords" content={keywords} />
        <meta name="description" content="Test Task" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
      </Head>
      <div className="bg-dark-gray ">
        <MyLink href="/" text="Main" />
        <MyLink href="/chart" text="Bar chart" />
      </div>
      <div>{children}</div>
    </>
  );
};

export default MainContainer;
