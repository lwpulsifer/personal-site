import React from "react";
import Head from "next/head";
import CommonHeader from "./CommonHeader";
import CommonFooter from "./CommonFooter";
import ParticlesBackground from "./ParticlesBackground";
import ThemeInfo from "./ThemeInfo";
import { joinClasses } from "../util/ClassNames";
import { BaseComponentProps } from "../types/BaseComponent";

type BasePageProps = BaseComponentProps & {
  isHomePage?: boolean;
  title?: string;
};

const BasePage = ({
  children = [],
  isHomePage = false,
  additionalClassNames = "",
  title = "Liam Pulsifer",
}: BasePageProps) => {
  return (
    <div
      className={`${joinClasses(
        additionalClassNames,
      )} bg-background justify-between items-center relative min-h-screen`}
    >
      <Head>
        <title>{title}</title>
        <meta name="description" content="Liam Pulsifer Personal Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <ParticlesBackground />
      <div className="h-full w-full relative p-2 md:p-4 lg:p-6 flex flex-col items-center gap-2">
        <CommonHeader />
        {children}
        <CommonFooter isHomePage={isHomePage} />
      </div>
      <ThemeInfo additionalClassNames="fixed bottom-0 w-full flex justify-center" />
    </div>
  );
};

export default BasePage;
