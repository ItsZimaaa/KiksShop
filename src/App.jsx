import Nav from "./components/Nav"
import Home from "./components/Home"
import NewDrops from "./components/NewDrops"
import Categories from "./components/Categories"


export default function App() {
  return (
    <main>
      <div >
        <Nav />

        <Home />

        <NewDrops />

      <div className="bg-[#232321]">
        <Categories />
      </div>
      </div>
    </main>
  )
}