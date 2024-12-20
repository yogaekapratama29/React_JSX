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
    const text = "Hello World"
    return(
    
        <h1>{text.toUpperCase()}</h1>
   
    )
}

function ParagraphHelloWorld(){
    const p = "Selamat Belajar ReactJS dari Programmer Zaman Now"
    return(
  
        <p>{p.toLowerCase()}</p>
  
    )
}