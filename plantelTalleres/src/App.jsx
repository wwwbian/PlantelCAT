
import './App.css'
import Home from './componentes/Home'
import MyProvider  from "./context/MyProvider"

const App = () => {
  return (
    < >
      <MyProvider>
         
          <Home/>
      </MyProvider>
    </>
  )
}

export default App;

