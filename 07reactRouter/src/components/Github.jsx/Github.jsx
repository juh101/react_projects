import React from "react";
import { useEffect,useState } from "react";

export default function Github(){
    let [data , setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/juh101')
        .then(res => res.json())
        .then(data => {
            console.log(data);       
            setData(data)     
        })
    },[])
    return(
        <div className="text-center m-4 bg-gray-200  p-4 text-3xl h-screen">
            GitHub User: {data.login} <br />
            GitHub Followers: {data.followers}
            <a href={data.html_url} target="_blank">
                <img src={data.avatar_url} alt="profile pic" className="mx-auto mt-8 shadow-lg rounded-lg transition-shadow duration-700 hover:shadow-2xl hover:drop-shadow-[0_0_10px_rgba(255,115,0,0.7)]"/>
            </a>
            <a href={data.html_url} target="_blank" className="text-blue-700 hover:underline font-medium transition-all duration-200">
                Visit Profile
            </a>
        </div>
    )
}