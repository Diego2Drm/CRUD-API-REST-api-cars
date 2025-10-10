import { HttpMethods } from "./components/HttpMethods"
import { PostCar } from "./components/postCar"
import { GetAllCars } from "./components/getCar"

function App() {

  return (
    <section className="container mb-5 text-center">
      <h1 className="">CRUD API REST</h1>
      <HttpMethods />
      <PostCar />
      <GetAllCars />
    </section>
  )
}

export default App
