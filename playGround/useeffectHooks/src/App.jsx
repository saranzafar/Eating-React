import './App.css'
import { useState } from 'react'
import Card from './components/Card'
import Counter from './components/Counter'

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Hooks</h2>
      <div>Use Effect</div>


      <div>Use State</div>
      <div>{count}</div>
      <Counter initialValue={count} />

      {/* <button
        type="button"
        class="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        onClick={() => setCount(e => Math.min(e + 1, 20))}
      >Click Me</button> */}

      <h2>Props passing</h2>
      <Card name='laptop' btnText="Buy" />
      <Card name='MacBook' btnText="Purchase" />
      <Card name='MacBook' btnText="Purchase" />

    </>
  )

}

export default App
