import H1 from '@/components/h1'
import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
  return (
    <main className="text-center py-24">
      <H1 className="mb-5">The page you are looking for does not exist.</H1>
      <Link href="/events/All"className="bg-white text-black px-4 py-2 rounded-md  transition hover:bg-gray-300 hover:text-black hover:scale-105  focus:outline-none ">
        Go back to events
      </Link>
    </main>
  )
}

export default NotFoundPage