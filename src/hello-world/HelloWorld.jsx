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
        <h1 style={{
            color : "red",
            backgroundColor : "aqua"
        }}>{text.toUpperCase()}</h1>
   
    )
}

// Membuat Component Baru (Biasa)
function ParagraphHelloWorld(){
    const p = "Selamat Belajar ReactJS dari Programmer Zaman Now"
    const style = {
        color : "blue",
        backgroundColor :"yellow"
    }
    return(
  
        <p style={style}>{p.toLowerCase()}</p>
  
    )
}