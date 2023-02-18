import styles from "@/styles/Home.module.css";
import { HeadLine } from "@/component/HeadLine";
import { Links } from "@/component/Links";
import { Images } from "@/component/Images";
import { useCallback } from "react";

type MainProps = {
  page: string;
};

export function Main(props: MainProps) {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      console.log(e.target);
    },
    []
  );

  return (
    <main className={styles.main}>
      <HeadLine title={props.page} />
      <button onClick={handleClick}>aaa</button>
      <Images />
      <Links />
    </main>
  );
}
