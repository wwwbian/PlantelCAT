
import Cards from './Cards'
import { useContext } from "react"
import { MyContext } from "../context/MyProvider";
import Modal from './Modal';
function Home() {
    const {modalOn, setModalOn} = useContext(MyContext);
  return (
    <div>

       <button onClick={()=>setModalOn(true)}>Agregar Cards</button>
        {!modalOn&&<Cards/>}
        {modalOn &&<Modal/>}
    </div>
  )
}

export default Home