import styles from "@/styles/Home.module.css"
import { HeadLine } from "@/component/HeadLine"
import { Links } from "@/component/Links"
import { Images } from "@/component/Images"
import { SetStateAction, useCallback, useState } from "react"
import { useRouter } from "next/router"

type MainProps = {
  page: string
}

export function Main(props: MainProps) {
  return <main className={styles.main}></main>
}
