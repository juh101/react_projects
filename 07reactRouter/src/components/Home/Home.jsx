import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="grid  place-items-center sm:mt-20">
                    <img className="sm:w-96 w-48 hover:shadow-2xl transition-shadow duration-300 drop-shadow-[0_0_10px_rgba(0,0,255,0.6)]" src="https://imgs.search.brave.com/uR_wY5BPGHZMArRaC1IxMHXQbtvaviOTH7zCPj-73Zk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtcGxhdGZvcm0u/OTlzdGF0aWMuY29t/Ly9aZWtRRW5jcG5W/RHFLT3p5M21UWWF5/cU9mQUU9LzI0N3gw/Ojc2NHg1MTYvZml0/LWluLzUwMHg1MDAv/OTlkZXNpZ25zLWNv/bnRlc3RzLWF0dGFj/aG1lbnRzLzEzMy8x/MzMwNTkvYXR0YWNo/bWVudF8xMzMwNTk4/OTM" alt="image2" />
                </div>

                <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Lorem Ipsum Yojo</h1>
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Download Now
                            <span className="hidden sm:block text-4xl">Lorem Ipsum</span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/download"
                            target="_blank"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Download now
                        </Link>
                    </div>
                </div>
                <div className="absolute left-0 bottom-0 sm:bottom-10 sm:right-10">
                    <img className="w-96" src="https://imgs.search.brave.com/K1zTqmQBbh_MrqnACcNxYgIPyaNrwZav16DyMzzl8IA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtcGxhdGZvcm0u/OTlzdGF0aWMuY29t/Ly9tRjh6dFlwLTBU/OG9WV1JfWXd5c1RE/U2lrTkE9LzM1NHg0/OjE2NDZ4MTI5Ni9m/aXQtaW4vNTAweDUw/MC85OWRlc2lnbnMt/Y29udGVzdHMtYXR0/YWNobWVudHMvNzkv/Nzk5NDQvYXR0YWNo/bWVudF83OTk0NDEy/NQ" alt="image1" />
                </div>

            </aside>


        </div>
    );
}



