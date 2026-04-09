import { useMovie } from "../context/Moviedata"
export default function Navbar(){
    const {text,setText} = useMovie();
    return(
        <div className="bg-gray-700 flex justify-between items-center text-white p-4">
            <h1 className="text-2xl font-bold">Movie App</h1>
            <div className="flex gap-10">
                <input
                type="text"
                placeholder="Search Movie.."
                value={text}
                onChange={(e)=>setText(e.target.value)}
                className="bg-white text-black w-[500px] p-0.5 rounded-full px-2"
                />
                <p className="text-xl font-bold hover:underline cursor-pointer">Home</p>
                <p className="text-xl font-bold hover:underline cursor-pointer">About</p>
                <p className="text-xl font-bold hover:underline cursor-pointer">Contact</p>
            </div>
        </div>
    )
}