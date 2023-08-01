import { IconMinus } from './icons/IconMinus'
import { IconPlus } from './icons/IconPlus'
import { CounterInfo } from './CounterInfo'
import styles from './Counter.module.css'

export const Counter = (props) => {
  return (
    <div className={styles.wrapper}>
      <CounterInfo>
        {props.count} {props.text}
      </CounterInfo>
      <nav>
        <IconPlus onClick={props.onIncrement} />
        <IconMinus onClick={props.onDecrement} />
      </nav>
    </div>
  )
}
