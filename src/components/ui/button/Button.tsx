import React from 'react'
import styles from './Button.module.scss'
interface Props extends  React.ButtonHTMLAttributes<HTMLButtonElement>{
    className?:string
}
const Button = ({className='',children, ...props}:Props) => {
  return (
    <button {...props} className={`${styles.button} ${className}`}>
        {children}
    </button>
  )
}

export default Button