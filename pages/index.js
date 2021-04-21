import Head from 'next/head';
import Avatar from '../components/Avatar';
// import { ViewGridIcon, MicrophoneIcon } from '@heroicons/react'
import { ViewGridIcon, MicrophoneIcon, SearchIcon } from '@heroicons/react/solid'
import Image from 'next/image'

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
          <ViewGridIcon className='h-10 w-10 p-2 cursor-pointer rounded-full hover:bg-gray-100' />
          <Avatar url="https://image.freepik.com/free-vector/cute-cat-gaming-cartoon_138676-2969.jpg" />
        </div>
      </header>
      {/* body element */}
      <form action="#">
        <Image src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-sva-scholarship-20.png' height={100} width={300} />
        <div>
          <SearchIcon className='w-5 h-5 mr-3 text-gray-500' />
          <input type="text" className='focus:outline-none bg-red-500 ' />
          <MicrophoneIcon className='w-5 h-5 mr-3 text-gray-500' />
        </div>
      </form>
      {/* footer elements */}
    </div>
  )
}
