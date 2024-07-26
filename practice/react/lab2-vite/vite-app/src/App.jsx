import Test1 from './Test1_js'
import Test2 from './Test2_js'
import Test3 from './Test2-props'
import StateTest from './Test4_state'
const App = () => {
  const msg = "World"
  const addResult = (x, y) => {
    return (
      <div className="card card-body bg-light">
        {x} + {y} = {x + y}
      </div>
    )
  }
  return (
    <div>
      <h1>Hello World</h1>
      <h2>Hello, {msg}</h2>
      <hr />
      {addResult(3, 4)}
      <Test1 />
      <Test2 />
      <Test3 />
      <StateTest />
    </div>
  )
}

export default App