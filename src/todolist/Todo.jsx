export default function Todo({text,isCoompleted, isDeleted = false}){
    if(isDeleted) {
        return null;
    }
    // Logical ANDs
    else{
        return(
            <li>
                {text} {isCoompleted && '🔥'}
            </li>
        )
    }

    //Menggunakan ternary operator
    // else{
    //     return(
    //         <li>
    //             {isCoompleted ? <del>{text}</del> : text}
    //         </li>
    //     )
    // }


    // else if(isCoompleted){
    //     return (
    //         <li>
    //             <del>{text}</del>
    //         </li>
    //     )
    // }else{
    //     return (
    //         <li>{text}</li>
    //     )
    // }
}