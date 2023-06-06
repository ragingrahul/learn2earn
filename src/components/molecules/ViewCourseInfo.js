import React from 'react'

function ViewCourseInfo() {
    return (
        <div>
            <div className='flex flex-row justify-between mb-3'>
                <div className='w-1/2 m-2'>
                    <h2 className="text-[32px] font-bold my-4">
                        Machine Learning
                    </h2>
                    <p className="mb-4">
                        Machine learning is a branch of artificial intelligence that focuses
                        on developing algorithms and models capable of learning from data and
                        making predictions or decisions without being explicitly programmed.
                        It involves creating mathematical models and algorithms that enable
                        computers to recognize patterns, extract meaningful information, and
                        make accurate predictions or decisions based on the available data.
                    </p>
                    <div className="bg-gray-800 flex justify-between items-center py-2 px-4 rounded-lg">
                        <div className="flex justify-between items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="h-4 w-4 mr-1"
                            >
                                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                                <path d="M4 19.5V4a2.5 2.5 0 0 1 2.5-2.5h11A2.5 2.5 0 0 1 20 4v12.5" />
                                <path d="M7.5 9h9" />
                                <line x1="7.5" y1="13" x2="16.5" y2="13" />
                            </svg>

                            <h4 className="whitespace-nowrap text-base font-thin mb-1">Courses 4</h4>
                        </div>

                        <div className="flex justify-between items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 mr-1"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                <line x1="9" y1="13" x2="15" y2="13" />
                                <line x1="9" y1="17" x2="15" y2="17" />
                                <line x1="12" y1="9" x2="12" y2="13" />
                                <line x1="7" y1="7" x2="7" y2="7" />
                                <line x1="17" y1="7" x2="17" y2="7" />
                            </svg>

                            <h4 className="whitespace-nowrap text-base font-thin mb-1">Certificates 1</h4>
                        </div>

                        <div className="flex justify-between items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-award h-4 w-4 mr-1"
                            >
                                <circle cx="12" cy="8" r="7" />
                                <path d="M8.21 13.89L7 23l5-2.5L17 23l-1.21-9.11" />
                                <path d="M6 10s-1-2-1-4h5c0 2-1 4-1 4" />
                            </svg>
                            <h4 className="whitespace-nowrap text-base font-thin mb-1">Trophies 2</h4>
                        </div>
                        <div className="flex justify-between items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 mr-1"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path d="M12 2C6.48 2 2 6.48 2 12c0 2.47 1.09 4.67 2.82 6.19l1.45-1.45C4.78 14.96 4 13.09 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8a9.963 9.963 0 0 1-6.36-2.3l-1.45 1.45C7.33 21.91 9.53 23 12 23c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
                                <path d="M11 14.59V7" />
                                <path d="M9.83 9.83L11.17 11.17" />
                                <path d="M14.83 9.83L13.5 11.17" />
                            </svg>

                            <h4 className="whitespace-nowrap text-base font-thin mb-1">Materials 20</h4>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col w-1/2 p-7 items-center border-[1px] border-slate-600 rounded-xl'>

                    <h2 className="bg-Bggradient p-2 text-center bg-cover w-[70%] bg-no-repeat whitespace-nowrap rounded-xl border-[1px] border-slate-500 mb-4"> $1000</h2>
                    
                    <div className='flex flex-col justify-between w-full h-full border p-3 rounded-2xl'>
                        <h1 className='text-lg font-thin'>
                            Your Rank
                        </h1>
                        <div className='flex flex-row justify-between items-end'>
                            <h1 className='text-3xl font-semibold'>
                                162
                            </h1>
                            <h1 className='text-lg font-thin underline-offset-2 decoration-solid underline'>Leaderboard</h1>
                        </div>
                    </div>
                </div>

            </div>
            <hr />
        </div>
    )
}

export default ViewCourseInfo