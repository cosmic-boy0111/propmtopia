'use client'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { AppContext } from '@components/Provider'
import Form from '@components/Form'
import { Api } from '@utils/api'

const EditPrompt = () => {

  const router = useRouter();
  const searchParmas = useSearchParams();
  const promptId = searchParmas.get('id');

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt : '',
    tag : ''
  })


  useEffect(() => {

    const getPeromptDetails = async () => {

        await Api._prompt._getOne(promptId).then((response)=>{
            console.log(response.data);
            setPost({
                prompt : response.data?.prompt,
                tag : response.data?.tag
            })
        })

    }

    if(promptId) getPeromptDetails();

  }, [promptId])
  

  const updatePrompt = async (e) => {
    e.preventDefault();
    if(!promptId) return alert('Prompt Id not found');

    setSubmitting(true);

    try {

        await Api._prompt._update(promptId,post).then((response) => {
            if(response.status === 200) router.push('/')
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
        type="Edit"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={updatePrompt}
      />
    </>
  )
}

export default EditPrompt