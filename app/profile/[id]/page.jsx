'use client'
import Profile from '@components/Profile'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Api } from '@utils/api'

const page = ({params}) => {

    const searchParmas = useSearchParams();
    const name = searchParmas.get('name');
    const [posts, setPosts] = useState([])

    useEffect(() => {

        const fetchPosts = async () => {
            await Api._prompt._getUserPosts(params.id).then((response)=>{
                console.log(response.data);
                if(response.status === 200) 
                    setPosts(response.data)
            })
        }
    
        if(params?.id) fetchPosts();

    }, [name, params.id])

    return (
        <Profile
            name={`${name}'s`}
            desc={`Welcome to ${name}'s personalized profile page. Explore ${name}'s exceptional prompts and be inspired by the power of their imagination.`}
            data={posts}
        />
    )
}

export default page