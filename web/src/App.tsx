import Habits from "./components/Habits"
import './styles/global.css'

function App() {

  return (
    <>
      <Habits completed={3} />
      <Habits completed={2} />
      <Habits completed={3} />
    </>
  )
}

export default App
