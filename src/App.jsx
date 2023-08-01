import './App.css'
import { Counter } from './components/Counter'
import { CounterInfo } from './components/CounterInfo'
import { SingleLight } from './components/SingleLight'

function App() {
  return (
    <div>
      <nav className={'nav'}>
        <CounterInfo>0 bulbs</CounterInfo>
        <Counter text={'columns'} count={0} />
        <Counter text={'rows'} count={0} />
      </nav>
      <div>
        <SingleLight />
      </div>
    </div>
  )
}

export default App
