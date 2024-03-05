import NavBar from "./components/NavBar"
import NewsBoard from "./components/NewsBoard"
import { useState } from "react"

const App = () => {

  const [category, setCategory] = useState("general")
  return (
    <div>
      <NavBar setCategory = {setCategory}/>
      <NewsBoard category= {category}/>
    </div>
  )
}

export default App
