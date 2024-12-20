import "./HelloWorld.css"

export default function HelloWorld(){
    // Spread Syntax
    const props = {
        text : "Hello World Yoga"
    }

    return(
        <div>
            {/* Mengirim Props */}
            <HeaderHelloWorld {...props}/>
            <ParagraphHelloWorld/>
        </div> 
    )
}

// Membuat Component Baru (Destructuring Props)
export function HeaderHelloWorld({text = "Ups saya lupa kasih Teks"}){
    return(
        // Bisa langsung deklarasi
        // <h1 style={{
        //     color : "red",
        //     backgroundColor : "aqua"
        // }}>{text.toUpperCase()}</h1>

        <h1 className="title">{text.toUpperCase()}</h1>
   
    )
}

// Membuat Component Baru (Biasa)
function ParagraphHelloWorld(){
    const p = "Selamat Belajar ReactJS dari Programmer Zaman Now"
    return(
  
        <p className="content">{p.toLowerCase()}</p>
  
    )
}