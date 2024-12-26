import React from 'react'
import styles from './BLockQuestion.module.scss'
interface Props extends React.AllHTMLAttributes<HTMLDivElement>{
    isRight:boolean
}
const BlockQuestion = ({isRight,children}:Props) => {
  return (
    <div style={{backgroundColor:isRight? 'green':'red'}} className={styles.block}>{children}</div>
  )
}

export default BlockQuestion