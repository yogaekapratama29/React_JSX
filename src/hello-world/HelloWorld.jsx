import React from 'react';
export default function HelloWorld(){

    return(
        
        <div>
            <HeaderHelloWorld/>
            <ParagraphHelloWorld/>
        </div>
        
        
    )
}

// Membuat Component Baru
function HeaderHelloWorld(){
    return(
    
        <h1>Hello World</h1>
   
    )
}

function ParagraphHelloWorld(){
    return(
  
        <p>Selamat Belajar ReactJS dari Programmer Zaman Now</p>
  
    )
}