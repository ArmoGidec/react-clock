import { Clock } from "./components/Clock"

function App() {
  return <div className="app">
    <Clock time={new Date()} />
  </div>
}

export default App
