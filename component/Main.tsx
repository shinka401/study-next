import styles from "@/styles/Home.module.css"
import { HeadLine } from "@/component/HeadLine"
import { Links } from "@/component/Links"
import { Images } from "@/component/Images"
import { SetStateAction, useCallback, useState } from "react"

type MainProps = {
  page: string
}

export function Main(props: MainProps) {
  console.log("Main!!!")
  const [count, setCount] = useState(1)
  const [text, setText] = useState("")
  const [isShow, setIsShow] = useState(true)

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((foo) => foo + 1)
    }
    console.log(count)
  }, [count])

  const handleChange = useCallback((e: { target: { value: SetStateAction<string> } }) => {
    setText(e.target.value)
  }, [])

  const handleDisplay = useCallback(() => {
    setIsShow((isShow) => !isShow)
  }, [])

  return (
    <main className={styles.main}>
      <HeadLine title={props.page} />
      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text} onChange={handleChange} />
      <Images />
      <Links />
    </main>
  )
}
