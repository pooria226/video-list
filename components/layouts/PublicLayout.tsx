import Head from "next/head";
import React, { FC, ReactNode } from "react";

interface Props {
  title: string;
  children?: ReactNode;
}

const PublicLayout: FC<Props> = ({ title = null, children }) => {
  //***************************
  // Define State
  //***************************

  const AppName = process.env.NEXT_PUBLIC_APPNAME;

  return (
    <div>
      <Head>
        <title>
          {AppName} | {title}
        </title>
      </Head>
      <div className="container relative">{children}</div>
    </div>
  );
};
export default PublicLayout;
