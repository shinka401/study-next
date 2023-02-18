import Head from "next/head";
import { Main } from "@/component/Main";
import { Header } from "@/component/Header";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log("mount");
    document.body.style.backgroundColor = "lightblue";
    return () => {
      console.log("unmount");
      document.body.style.backgroundColor = "";
    };
  });
  return (
    <>
      <Head>
        <title>index page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main page="index" />
    </>
  );
}
