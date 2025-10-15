import { HttpMethods } from "./components/HttpMethods"
import { PostCar } from "./components/postCar"
import { GetAllCars } from "./components/getCar"
import { Search } from "./components/search/Search"

function App() {

  return (
    <section className="container mb-5 mt-3 text-center">
      <h1 className="">CRUD API REST</h1>
      <HttpMethods />
      <PostCar />
      <Search />
      <GetAllCars />

      <div className="text-center fs-6">
        Coded by <a href="https://github.com/Diego2Drm/CRUD-API-REST-api-cars/tree/main" className="text-blue-500">Diego Ramirez</a>.
      </div>
    </section>
  )
}

export default App
