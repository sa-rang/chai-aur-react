
import React, { useEffect, useState } from 'react'

function Github() {
    const [userData, setUserData] = useState([])
    useEffect(() => {
        fetch("https://api.github.com/users/sa-rang")
            .then(res => res.json())
            .then(data => {
                setUserData(data)
            })
    }, [])
    return (
        <div className=''>
            <img src={userData.avatar_url} alt="pic" />
            Github Followers: {userData.followers}
        </div>
    )
}

export default Github