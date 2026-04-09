import { useMovie } from "../context/Moviedata";
import MovieCard from "./MovieCard";

export default function MovieList(){
    const {movie, text} = useMovie();
    const filteredMovies = movie.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
    );

    return(
        <div className="grid grid-cols-3 gap-5">
            {
                filteredMovies.map((item)=>(
                    <MovieCard
                        key={item.id}
                        item={item}
                    />
                ))
            }
        </div>
    )
}