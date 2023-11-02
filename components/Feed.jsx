'use client'
import React, { useEffect, useRef, useState } from 'react'
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
  const [filterPosts, setFilterPosts] = useState([])

  const handleSearchChange = (e) => {
    const inputText = e.target.value;
    setSearchText(inputText);
    if(inputText === ""){
      setFilterPosts(posts);
      return;
    }

    setFilterPosts(posts.filter(p => 
      p.creator.name.toLowerCase().includes(inputText.toLowerCase()) || 
      p.prompt.toLowerCase().includes(inputText.toLowerCase()) ||
      p.tag.toLowerCase().includes(inputText.toLowerCase())
    ))

  }

  const handleTagClick = (tag) => {
    setSearchText(tag)
    setFilterPosts(posts.filter(p =>
      p.tag.toLowerCase().includes(tag.toLowerCase())
    ))
  }

  useEffect(() => {
    const fetchPosts = async () => {
      await Api._prompt._getAll().then((response)=>{
        console.log(response.data);
        if(response.status === 200) {
          setPosts(response.data);
          setFilterPosts(response.data)
        }
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
        data = {filterPosts}
        handleTagClick = {handleTagClick}
      />

    </section>
  )
}

export default Feed