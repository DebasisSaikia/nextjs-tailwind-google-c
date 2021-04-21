import { GlobeIcon } from '@heroicons/react/solid'

export default function Footer() {
    return (
        <footer className='grid w-full divide-y-2 divide-gray-300 bg-gray-100 text-sm text-gray-500'>
            <div className='px-8 py-3'>
                <p>India</p>
            </div>

            <div>
                <div>
                    <GlobeIcon className='h-5 mr-1 text-gray-500' />   Copyright &copy; 2021
                </div>
            </div>
        </footer>
    )
}
