'use client'
import React, { useContext } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { AppContext } from '@components/Provider'
import Form from '@components/Form'
import { Api } from '@utils/api'

const CreatePrompt = () => {

  const { rootUser } = useContext(AppContext)
  const router = useRouter();

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt : '',
    tag : ''
  })

  const createPrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      
        await Api._prompt._create({
          prompt : post.prompt,
          userId : rootUser._id,
          tag : post.tag
        }).then((response)=>{
          console.log(response);
          if(response.status === 200){
            router.push('/')
          }
        })

    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false)
    }

  }

  return (
    <>
      <Form
        type="Create"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={createPrompt}
      />
    </>
  )
}

export default CreatePrompt