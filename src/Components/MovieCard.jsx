import { useMovie } from "../context/Moviedata"
export default function MovieCard({item}){
    const {addToCart} = useMovie();
    return(
        <div className="bg-white rounded-2xl shadow-md p-3 hover:scale-105 transition duration-300">
            <img
            src={item.image?.medium}
            alt={item.name}
            className="w-full h-60 object-fit rounded-xl"
            />
            <h1 className="text-lg font-semibold mt-2">{item.name}</h1>
            <p className="text-yellow-500 font-medium">⭐ {item.rating?.average}</p>
            <button
            onClick={()=>addToCart(item)}
            className="mt-2 w-full bg-blue-500 text-white py-1 rounded-lg hover:bg-blue-600 cursor-pointer"
            >Add To Cart</button>
        </div>
    )
}