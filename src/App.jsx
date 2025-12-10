import { Route, Routes } from "react-router-dom"
import { Footer, Header } from "./layout"
import { Home, Top250Movies } from "./pages"
import { AllPicks, Genre, SingleMovie, SinglePerson } from "./components"


function App() {

  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top250Movies" element={<Top250Movies />} />
        <Route path="/:id" element={<SingleMovie />} />
        <Route path="/acts/:id" element={<SinglePerson />} />
        <Route path="/director/:id" element={<SinglePerson />} />
        <Route path="/writer/:id" element={<SinglePerson />} />
        <Route path="/genre/:id" element={<Genre/>}/>
        <Route path="/picks" element={<AllPicks/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
