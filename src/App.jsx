import './App.css'
import { Counter } from './components/Counter'
import { CounterInfo } from './components/CounterInfo'

function App() {
  return (
    <nav className={'nav'}>
      <CounterInfo>0 bulbs</CounterInfo>
      <Counter text={'columns'} count={0} />
      <Counter text={'rows'} count={0} />
    </nav>
  )
}

export default App
