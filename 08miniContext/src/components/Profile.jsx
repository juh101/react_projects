import React, {useContext} from 'react'
import UserContext from '../Context/UserContext';

function Profile() {

    const {User} = useContext(UserContext);

    if(!User) return <div>please log in</div>

    else return <div>Welcome {User.name}</div>
}

export default Profile