import React from "react";
import Title from "./Title";

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
                            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
                        />
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            rows="9"
                            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
                        />
                        <button type="submit" className="text-center inline-block px-8 py-3 w-max text-base
                        font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white">
                            Work with me
                        </button>
                        
                </form>
            </div>
        </div>
    )
}
export default Contact;