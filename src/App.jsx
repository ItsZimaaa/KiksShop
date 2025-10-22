import Nav from "./components/Nav"
import Home from "./components/Home"
import NewDrops from "./components/NewDrops"
import Categories from "./components/Categories"
import Reviews from "./components/Reviews"

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

        <div className="bg-[#232323]">
          <Reviews />
        </div>
      </div>
    </main>
  )
}