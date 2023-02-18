import styles from '@/styles/Home.module.css'

export function Headline(props) {
  console.log(props.title)
  return (
    <>
      <h1  className={styles.title}>{props.title}</h1>
    </>
  )
}
