export default function ProfileForm({name,setName}){
    function handleChange(event) {
        setName(event.target.value)
    }
    return(
        <>
        <h2>Profile Form</h2>
        <input type="text" value={name} onChange={handleChange} />
        </>
    )
}