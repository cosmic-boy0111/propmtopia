'use client'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '@components/Provider'
import { useRouter } from 'next/navigation'

import Profile from '@components/Profile'
import { Api } from '@utils/api'

const MyProfile = () => {

    const router = useRouter();
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

    const handleEdit = (post) => {
        console.log(post);
        router.push(`/update-prompt?id=${post._id}`)
    }

    const handleDelete = async (post) => {
        const hasConfirm = confirm("Are you sure you want to delete")
        if(hasConfirm){
            try {

                await Api._prompt._delete(post._id).then((response) => {
                    if(response.status === 200){
                        const filteredPosts = posts.filter(p => p._id !== post._id);
                        setPosts(filteredPosts);
                    }
                })

            } catch (error) {
                console.log(error);
            }
        }
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