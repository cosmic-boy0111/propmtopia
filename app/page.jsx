'use client'
import Feed from '@components/Feed'
import { AppContext } from '@components/Provider'
import { useEffect, useContext } from 'react'

const Home = () => {

  const {setRootUser} = useContext(AppContext)

  const getRootUser = async () => {
    // getting the root user
      const response = await fetch('/api/user/authenticate', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      }, { next : { revalidate : 10 } })
      if (response.status === 200) {

        const data = await response.json();
        console.log(data);

        setRootUser(data)
      } else {
        console.log("user not found");
      }

  }

  useEffect(() => {
    getRootUser();
  }, [])

  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center" >
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center" > AI-Powered Prompts </span>
      </h1>
      <p className="desc text-center" >
        Promptopia is an open source AI promptiong
        tool for modern wiorld to
        discove, create and share creative prompts
      </p>
      <Feed />
    </section>
  )
}

export default Home