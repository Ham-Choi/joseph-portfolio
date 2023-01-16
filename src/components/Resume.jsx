import React from "react";
import Title from "./Title";

function Resume() {
    return (
        <div className= "inset-0 flex flex-col items-center justify-start p-3 md:p-16 z-20">
            <Title>Resume</Title>
            <embed src="/assets/Joseph's Resume.pdf" width='800px' height='950px' />
        </div>
    )
}
export default Resume;