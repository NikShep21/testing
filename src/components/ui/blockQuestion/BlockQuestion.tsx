import React from 'react'
import styles from './BLockQuestion.module.scss'
interface Props extends React.AllHTMLAttributes<HTMLDivElement>{
    isRight:boolean
}
const BlockQuestion = ({isRight,children,className=''}:Props) => {
  return (
    <div style={{backgroundColor:isRight? 'green':'red'}} className={`${styles.block} ${className}`}>{children}</div>
  )
}

export default BlockQuestion