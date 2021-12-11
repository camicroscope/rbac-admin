import React from 'react'
import {useHistory} from 'react-router-dom'

function NotFoundPage() {
  const history = useHistory()
    return (
<div className="flex items-center justify-center w-full min-h-screen bg-gray-100 text-gray-700">
        <div className="max-w-md px-2 text-sm md:text-base lg:px-0">
            <header className="mb-6">
                <h2 className="font-semibold text-purple-600 text-9xl">404.</h2>
                <h3 className="text-xl font-light leading-normal lg:text-3xl md:text-3xl">Sorry, we couldn't find this page.</h3>
            </header>
            <button
                onClick={()=>history.push("/")}
                className="inline px-4 py-2 text-sm font-medium leading-5 text-white uppercase transition-colors duration-150 bg-purple-600  border border-transparent rounded-lg shadow focus:outline-none focus:shadow-outline-blue active:bg-blue-600 hover:bg-purple-700">
                Back to Homepage
            </button>
    </div>
</div>

    )
}

export default NotFoundPage
