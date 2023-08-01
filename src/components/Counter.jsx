import { React, useState } from 'react'
import { IconMinus } from './icons/IconMinus'
import { IconPlus } from './icons/IconPlus'
import { CounterInfo } from './CounterInfo'
import styles from './Counter.module.css'

export const Counter = (props) => {
  const [value, setValue] = useState(0)

  const handleDecrement = () => {
    if (value <= 0) {
      return
    }
    setValue(value - 1)
  }
  const handleIncrement = () => {
    setValue(value + 1)
  }
  return (
    <div className={styles.wrapper}>
      <CounterInfo>
        {value} {props.text}
      </CounterInfo>
      <nav>
        <IconPlus onClick={handleIncrement} />
        <IconMinus onClick={handleDecrement} />
      </nav>
    </div>
  )
}
