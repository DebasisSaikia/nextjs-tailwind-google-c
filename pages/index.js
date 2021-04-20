import Head from 'next/head';
import Avatar from '../components/Avatar';
import { ViewGridIcon, MicrophoneIcon } from '@heroicons/react'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Google</title>
      </Head>

      {/* header elements */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-600 ">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <ViewGridIcon />
          <Avatar url="https://image.freepik.com/free-vector/cute-cat-gaming-cartoon_138676-2969.jpg" />
        </div>
      </header>
      {/* body element */}
      {/* footer elements */}
    </div>
  )
}
