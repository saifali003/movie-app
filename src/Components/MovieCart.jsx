import { useMovie } from "../context/Moviedata"
export default function MovieCart() {
    const { favmovie, removeFromCart } = useMovie();
    return (
        <div>
            {
                favmovie.length === 0 ?
                    (<p>No Favorite Movie yet 😢</p>)
                    :
                    (
                        favmovie.map((item) => (
                            <div key={item.id} className="flex items-center gap-3 mb-4 border-b pb-2">
                                <img
                                    src={item.image?.medium}
                                    alt={item.name}
                                    className="w-16 h-16 object-cover rounded"
                                />
                                <div className="flex-1">
                                    <h1 className="text-sm font-semibold">{item.name}</h1>
                                    <p className="text-yellow-500 text-sm">⭐ {item.rating?.average}</p>
                                    <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="bg-red-500 p-1 rounded-full text-sm hover:bg-red-600 text-white"
                                    >Remove</button>
                                </div>
                            </div>
                        ))
                    )
            }
        </div>
    )
}