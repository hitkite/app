import styles from '@/styles/Home.module.css'
import { Headline } from '@/components/Headline'
import { Links } from '@/components/Links'

export function Main(props) {
  return (
    <main className={styles.main}>
      <Headline title={props.page}/>
      <Links />
    </main>
  )
}
