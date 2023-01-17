import React from "react";
import Title from "./Title.jsx";

function Contact() {
    return (
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center">
                <form 
                    action="https://getform.io/f/b0a5e528-91b5-4c58-9d38-cc2572ebb0ec"
                    method="POST"
                    className="flex flex-col w-full md:w-7/12"
                    >
                        <Title>Contact</Title>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="p-2 bg-transparent focus:bg-stone-200 dark:focus:bg-stone-800 
                            border-2 rounded-md focus:outline-none"
                        />
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            className="my-2 p-2 bg-transparent focus:bg-stone-200 dark:focus:bg-stone-800 
                            border-2 rounded-md focus:outline-none"
                        />
                        <textarea
                            name="message"
                            placeholder="Let me know if you are interested in my services/skillset!"
                            rows="9"
                            className="my-2 p-2 bg-transparent focus:bg-stone-200 dark:focus:bg-stone-800
                            border-2 rounded-md focus:outline-none"
                        />
                        <button type="submit" className="text-center inline-block px-8 py-3 w-max text-base
                        font-medium rounded-md text-white bg-gradient-to-r from-blue-500 to-gray-500 
                        hover:drop-shadow-xl">
                            Work with me
                        </button>
                        
                </form>
            </div>
        </div>
    )
}
export default Contact;