'use client'

import React, { useContext, useState } from 'react'
import Image from 'next/image'
import { AppContext } from './Provider'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {

  const pathName = usePathname();
  const router = useRouter();
  const [copied, setCopied] = useState("")
  const { rootUser } = useContext(AppContext);

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(""), 3000);
  }

  return (
    <div className='prompt_card'>

      <div className='flex justify-between items-start gap-5' >
        <Link href={rootUser?._id === post.creator._id ? '/profile' : `/profile/${post.creator._id}?name=${post.creator.name}`}>
          <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer'>
           
              <div className='blue_gradient' style={{
                width : '40px',
                height : '40px',
                display : 'flex',
                justifyContent : 'center',
                alignItems : 'center',
                border : '1px solid gray',
                borderRadius : '20px'
              }}>
                {post.creator.name[0]}
              </div>
            <div className='flex flex-col' >
              <h3 className='font-satoshi font-semibold text-gray-900' >{post.creator.name}</h3>
              <p className='font-inter text-sm text-gray-500' >{post.creator.email}</p>
            </div>
          </div>
        </Link>
        <div className='copy_btn' onClick={handleCopy} >
          <Image
            src={copied === post.prompt ? '/assets/icons/tick.svg' : '/assets/icons/copy.svg'}
            width={12}
            height={12}
          />
        </div>
      </div>
      <p className='my-4 font-satoshi text-sm text-gray-700' >
        {post.prompt}
      </p>
      <p
        className=' font-inter text-sm blue_gradient cursor-pointer'
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        #{post.tag}
      </p>
      {rootUser?._id === post.creator._id && pathName === '/profile' && (
        <div className=' mt-5 flex-center gap-4 border-t border-gray-100 pt-3' >
          <p className=' font-inter text-sm green_gradient cursor-pointer'
            onClick={handleEdit}
          >
            Edit
          </p>
          <p className=' font-inter text-sm orange_gradient cursor-pointer'
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  )
}

export default PromptCard