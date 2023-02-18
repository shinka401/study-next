import styles from "@/styles/Home.module.css";
import { HeadLine } from "@/component/HeadLine";
import { Links } from "@/component/Links";
import { Images } from "@/component/Images";
import { useCallback, useState } from "react";
import { cpuUsage } from "process";

type MainProps = {
  page: string;
};

export function Main(props: MainProps) {
  const [count, setCount] = useState(1);
  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((foo) => foo + 1);
    }
    console.log(count);
  }, [count]);

  return (
    <main className={styles.main}>
      <HeadLine title={props.page} />
      <h1>{count}</h1>
      <button onClick={handleClick}>ボタン</button>
      <Images />
      <Links />
    </main>
  );
}
