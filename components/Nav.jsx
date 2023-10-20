'use client';

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useContext } from 'react'

import { AppContext } from './Provider';

const Nav = () => {

    const {rootUser} = useContext(AppContext);

  return (
    <nav className="flex-between w-full mb-16 pt-3" >
        <Link href={'/'} className='flex gap-2 flex-center' >
            <Image 
                src="/assets/images/logo.svg" 
                alt='logo'
                width={30}
                height={30}
                className='object-contain'
            />
            <p className='logo_text' > Promptopia </p>
        </Link>
        {/* desktop navigation */}

        <div className='sm:flex hidden' >
            { rootUser ? <div className='flex gap-3 md:gap-5' >
                    <Link href={'/create-prompt'}
                        className='black_btn'
                    >
                        Create Post
                    </Link>
                    <button type='button'
                        className='outline_btn'
                    >
                        Sign Out
                    </button>
                    <Link href={'/profile'} >
                        <Image 
                            src="/assets/images/logo.svg"
                            width={37}
                            height={37}
                            className='rounded-full' 
                            alt='profile'
                        />
                    </Link>
                </div> :  
                <Link href={'/create-account'} >

                    <button type='button'
                        className='outline_btn'
                        >
                        Create Account
                    </button>
                </Link>

            }
            
        </div>
        
    </nav>
  )
}

export default Nav