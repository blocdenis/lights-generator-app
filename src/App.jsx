import './App.css'
import { Counter } from './components/Counter'
import { CounterInfo } from './components/CounterInfo'
import { SingleLight } from './components/SingleLight'
import { useState } from 'react'
import { Grid } from './components/Grid'

function App() {
  const [rows, setRows] = useState(0)
  const [columns, setColumns] = useState(0)

  const handleDecrementColumn = () => {
    if (columns <= 0) {
      return
    }
    setColumns(columns - 1)
  }
  const handleIncrementColumn = () => {
    setColumns(columns + 1)
  }
  const handleDecrementRow = () => {
    if (rows <= 0) {
      return
    }
    setRows(rows - 1)
  }
  const handleIncrementRow = () => {
    setRows(rows + 1)
  }
  const totalLights = rows * columns

  const lights = Array.from({ length: totalLights })

  return (
    <div>
      Lights Generator
      <nav className={'nav'}>
        <CounterInfo>{totalLights}</CounterInfo>
        <Counter
          text={'columns'}
          count={columns}
          onIncrement={handleIncrementColumn}
          onDecrement={handleDecrementColumn}
        />
        <Counter
          text={'rows'}
          count={rows}
          onIncrement={handleIncrementRow}
          onDecrement={handleDecrementRow}
        />
      </nav>
      <Grid columns={columns}>
        {lights.map((value, idx) => {
          return <SingleLight key={idx} />
        })}
      </Grid>
    </div>
  )
}

export default App
