import { Route, Routes } from "react-router-dom"
import { Footer, Header } from "./layout"
import { Home, Top250Movies } from "./pages"
import { SingleMovie } from "./components"


function App() {

  return (
    <div className="wrapper">
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/top250Movies" element={<Top250Movies/>}/>
      <Route path="/:id" element={<SingleMovie/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
