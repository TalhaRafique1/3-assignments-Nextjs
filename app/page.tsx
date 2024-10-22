import Header from "./components/Header"
import Hero from "./components/Hero"
import Footer from "./components/Footer"

const page = () => {
  return (
    <div className="flex flex-col">
     <Header />
     <Hero />
     <Footer />
    </div>
  )
}

export default page
