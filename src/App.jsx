import { HttpMethods } from "./components/HttpMethods"
import { GetAllCars } from "./GetAllCars"

function App() {

  return (
    <section className="container mb-5 text-center">
      <h1 className="">CRUD API REST</h1>
      <HttpMethods />
      <GetAllCars />
    </section>
  )
}

export default App
