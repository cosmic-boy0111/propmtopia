'use client'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '@components/Provider'
import { useRouter } from 'next/navigation'

import Profile from '@components/Profile'
import { Api } from '@utils/api'

const MyProfile = () => {

    const {rootUser} = useContext(AppContext);
    const [posts, setPosts] = useState([])

    useEffect(() => {

        const fetchPosts = async () => {
            await Api._prompt._getUserPosts(rootUser?._id).then((response)=>{
                console.log(response.data);
                setPosts(response.data)
            })
        }
    
        if(rootUser?._id) fetchPosts();

    }, [rootUser])

    const handleEdit = () => {

    }

    const handleDelete = async () => {

    }

  return (
    <Profile 
        name="My"
        desc="Welcome to your personalized profile page"
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
    />
  )
}

export default MyProfile