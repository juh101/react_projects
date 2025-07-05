import { useState,useContext } from "react"
import UserContext from "../Context/UserContext"

export default function Login(){
    let [UserName,setusername] = useState(null)
    let [Password,setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({
            name:UserName , 
            pw:Password
        })
        alert(`User logged in: ${UserName}`)

    }
    return(
        <div>
            <h2>Login</h2>
            <input 
            value={UserName}
            type="text" 
            placeholder="UserName" 
            onChange={(e) => setusername(e.target.value)}/>
            <br />
            <input 
            value={Password}
            type="password" 
            placeholder="Password" 
            onChange={(e) => setPassword(e.target.value)}/>
            <br />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}