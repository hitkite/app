
import React from 'react';
import styles from '@/styles/Home.module.css'

type Props = {
  title: string
}

export function Headline(props: Props) {
  return (
    <>
      <h1  className={styles.title}>{props.title}</h1>
    </>
  )
}
