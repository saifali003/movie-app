import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
const movieData = createContext();
export function Provider({children}){
    const [movie,setMovie] = useState([]);
    const [favmovie,setFavMovie] = useState([]);
    const [text,setText] = useState("");
    const data = async()=>{
       const response = await fetch("https://api.tvmaze.com/shows");
       const result = await response.json();
       setMovie(result);
    }
    useEffect(()=>{
        data();
    },[]);
    const addToCart = (movie)=>{
        const exist = favmovie.find((item)=> item.id===movie.id);
        if(exist){
            return;
        }
        setFavMovie([...favmovie,movie]);
    }
    const removeFromCart = (id)=>{
        setFavMovie(favmovie.filter((item)=>item.id!==id));
    }
    console.log(movie);
    return(
        <movieData.Provider value={{text,setText,movie,favmovie,addToCart,removeFromCart}}>
           {children}
        </movieData.Provider>
    )
}
export function useMovie(){
    return useContext(movieData);
}