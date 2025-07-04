import { useParams } from "react-router-dom"
export default function User(){
    const {userid} = useParams()
    return(
        <div className="bg-gray-200 text-orange-800 text-4xl flex items-center justify-center h-screen">
            User {userid}
        </div>
    )
}