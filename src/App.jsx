import Footer from "./Components/Footer";
import MovieCart from "./Components/MovieCart";
import MovieList from "./Components/MovieList";
import Navbar from "./Components/Navbar";
export default function App(){
  return(
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar/>
      <div className="flex flex-1 p-5 gap-5">
        <div className="w-3/4">
          <MovieList/>
        </div>
        <div className="w-1/4 bg-white shadow-lg rounded-2xl p-4 h-[80vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">❤️ Favorite Movies</h2>
          <MovieCart/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}