import { useEffect, useState } from "react"

import requests from "./Requests";
import axios from "axios";
const Main = () => {
    const [movie,setMovie]=useState([]);
    const movies=movie[Math.floor(Math.random() * movie.length)]
    useEffect(()=>{
        axios.get(requests.requestPopular).then((response)=>{
            setMovie(response.data.results)
        })
    },[])
    const truncateString= (str,num) =>{
      if(str?.length > num){
        return str.slice(0,num) + '...'
      }else{
        return str;
      }
    }
    console.log(movies)
  return (
    <>
    <div className="relative top-0 w-full h-[350px] text-white">
      <div className="w-full h-[400px] object-cover">
      <div className="absolute bg-gradient-to-r  from-black w-full h-[450px]"></div>
        <img className="w-full h-full bg-center  object-cover" src={`https://image.tmdb.org/t/p/original/${movies?.backdrop_path}` 
        }alt={movie?.title} />
        <div className="absolute top-[40%] left-[5%]">
        <h1 className="text-xl font-bold cursor-pointer md:text-2xl">{movies?.title}</h1>
        </div>
        <div className="absolute top-[50%] left-[4%] p-3">
          <button className="bg-white text-black p-2 px-6 hover:border-[1px] border-none outline-none hover:border-white hover:text-white hover:bg-transparent rounded-none font-bold">Play</button>
          <button className="border-[1px] hover:bg-white ml-4 hover:text-black border-none outline-none border-white p-2  px-5 font-bold" >Watch...</button>
          <p className="mt-2">Released Date : {movies?.release_date}</p>
          <p className="mt-1 text-[16px] w-[660px]" > {truncateString(movies?.overview, 170)}</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Main
