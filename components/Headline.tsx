import React from 'react';
import classes from '@/components/Headline.module.css'

type Props = {
  title: string
}

export function Headline(props: Props) {
  return (
    <>
      <h1  className={classes.title}>{props.title}</h1>
    </>
  )
}
