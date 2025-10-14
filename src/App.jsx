import { HttpMethods } from "./components/HttpMethods"
import { PostCar } from "./components/postCar"
import { GetAllCars } from "./components/getCar"
import { Search } from "./components/search/Search"

function App() {

  return (
    <section className="container mb-5 text-center">
      <h1 className="">CRUD API REST</h1>
      <HttpMethods />
      <PostCar />
      <Search />
      <GetAllCars />
    </section>
  )
}

export default App
