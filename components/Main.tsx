import classes from '@/components/Main.module.css'
import { Headline } from '@/components/Headline'
import { Links } from '@/components/Links'

type Props = {
  page: string
}

export function Main(props: Props) {

  return (
    <main className={classes.main}>
      <Headline title={props.page}/>
      <Links />
    </main>
  )
}
