'use client'
import React, { useEffect, useState } from 'react'
import PromptCard from './PromptCard'
import { Api } from '@utils/api'

const PromptCardList = ({ data, handleTagClick }) => {
  return <>
    <div className='mt-16 prompt_layout' >
      {data?.map((post)=>{
        return <PromptCard 
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      })}
    </div>
  </>
}

const Feed = () => {


  const [searchText, setSearchText] = useState('')
  const [posts, setPosts] = useState([])

  const handleSearchChange = (e) => {

  }

  useEffect(() => {
    const fetchPosts = async () => {
      await Api._prompt._getAll().then((response)=>{
        console.log(response.data);
        if(response.status === 200) setPosts(response.data);
      })
    }

    fetchPosts();
  }, [])
  

  return (
    <section className='feed' >
      <form className='relative w-full flex-center'>
        <input 
          type="text" 
          placeholder='Search for a tag or a username'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>

      <PromptCardList 
        data = {posts}
        handleTagClick = {() => {}}
      />

    </section>
  )
}

export default Feed