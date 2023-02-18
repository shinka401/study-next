import styles from "@/styles/Home.module.css";
import { HeadLine } from "@/component/HeadLine";
import { Links } from "@/component/Links";
import { Images } from "@/component/Images";
type MainProps = {
  page: string;
};
export function Main(props: MainProps) {
  return (
    <main className={styles.main}>
      <HeadLine title={props.page} />
      <Images />
      <Links />
    </main>
  );
}
