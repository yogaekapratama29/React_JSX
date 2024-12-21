export default function Container({children}){
    return(
        <div>
            <h1>Yoga Eka Pratama</h1>

            {children}
            
            <footer>
                <p>@ 2024 Yoga Eka Pratama</p>
            </footer>
        </div>
    )
}