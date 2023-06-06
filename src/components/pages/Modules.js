import React, { useState, useRef } from 'react'
import TopBar from '../molecules/TopBar'
import classNames from 'classnames';
import ReactPlayer from 'react-player';


function Modules() {
    const [isOpened, setOpened] = useState(false)
    const [height, setHeight] = useState("0px")
    const contentElement = useRef(null)

    const HandleOpening = () => {
        setOpened(!isOpened)
        setHeight(!isOpened ? `${contentElement.current.scrollHeight}px` : "0px")
    }

    return (
        <div>
            <div>
                <TopBar />
                <div className="z-10 bg-Bggradient  py-20 flex items-center justify-center bg-opacity-75 bg-slate-900 backdrop-blur-sm">
                    <div className="bg-slate-900 text-white relative flex flex-col justify-start w-[80%] z-[1000%] rounded-lg p-6">
                        <div className="flex">
                            <div
                                className={`w-60 bg-gray-800 flex flex-col h-screen p-3 duration-300`}
                            >
                                <div onClick={HandleOpening}>
                                    <div className={"flex justify-between text-white hover:cursor-pointer"}>
                                        <h4 className="font-semibold text-base">Lesson 1. Machine Learning Fundamentals</h4>

                                    </div>
                                    <div
                                        ref={contentElement}
                                        style={{ height: height }}
                                        className="overflow-hidden pl-2 transition-all duration-200"
                                    >
                                        <div className='flex flex-row items-center pb-2'>
                                            <svg fill="#ffffff" height="15px" width="15px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 60 60" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M45.563,29.174l-22-15c-0.307-0.208-0.703-0.231-1.031-0.058C22.205,14.289,22,14.629,22,15v30 c0,0.371,0.205,0.711,0.533,0.884C22.679,45.962,22.84,46,23,46c0.197,0,0.394-0.059,0.563-0.174l22-15 C45.836,30.64,46,30.331,46,30S45.836,29.36,45.563,29.174z M24,43.107V16.893L43.225,30L24,43.107z"></path> <path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30 S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z"></path> </g> </g></svg>
                                            <p className="pl-1 mb-0 text-sm">Video 1: Introduction</p>
                                        </div>

                                        <div className='flex flex-row items-center pb-2'>
                                            <svg fill="#ffffff" height="15px" width="15px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 60 60" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M45.563,29.174l-22-15c-0.307-0.208-0.703-0.231-1.031-0.058C22.205,14.289,22,14.629,22,15v30 c0,0.371,0.205,0.711,0.533,0.884C22.679,45.962,22.84,46,23,46c0.197,0,0.394-0.059,0.563-0.174l22-15 C45.836,30.64,46,30.331,46,30S45.836,29.36,45.563,29.174z M24,43.107V16.893L43.225,30L24,43.107z"></path> <path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30 S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z"></path> </g> </g></svg>
                                            <p className="pl-1 mb-0 text-sm">Video 2: Learning the power</p>
                                        </div>

                                        <div className='flex flex-row items-center pb-2'>
                                            <svg fill="#ffffff" height="15px" width="15px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1468.214 0v564.698h-112.94V112.94H112.94v1694.092h1242.334v-225.879h112.94v338.819H0V0h1468.214Zm129.428 581.311c22.137-22.136 57.825-22.136 79.962 0l225.879 225.879c22.023 22.023 22.023 57.712 0 79.848l-677.638 677.637c-10.616 10.504-24.96 16.49-39.98 16.49h-225.88c-31.17 0-56.469-25.299-56.469-56.47v-225.88c0-15.02 5.986-29.364 16.49-39.867Zm-155.291 314.988-425.895 425.895v146.031h146.03l425.895-425.895-146.03-146.03Zm-764.714 346.047v112.94H338.82v-112.94h338.818Zm225.88-225.88v112.94H338.818v-112.94h564.697Zm734.106-315.44-115.424 115.425 146.03 146.03 115.425-115.423-146.031-146.031ZM1129.395 338.83v451.758H338.82V338.83h790.576Zm-112.94 112.94H451.759v225.878h564.698V451.77Z" fill-rule="evenodd"></path> </g></svg>
                                            <p className="pl-1 mb-0 text-sm">Assignment 1</p>
                                        </div>
                                    </div>
                                </div>
                                <div onClick={HandleOpening}>
                                    <div className={"flex justify-between text-white hover:cursor-pointer"}>
                                        <h4 className="font-semibold text-base">Lesson 2. History of Machine Learning</h4>

                                    </div>
                                    <div
                                        ref={contentElement}
                                        style={{ height: height }}
                                        className="overflow-hidden pl-2 transition-all duration-200"
                                    >
                                        <div className='flex flex-row items-center pb-2'>
                                            <svg fill="#ffffff" height="15px" width="15px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 60 60" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M45.563,29.174l-22-15c-0.307-0.208-0.703-0.231-1.031-0.058C22.205,14.289,22,14.629,22,15v30 c0,0.371,0.205,0.711,0.533,0.884C22.679,45.962,22.84,46,23,46c0.197,0,0.394-0.059,0.563-0.174l22-15 C45.836,30.64,46,30.331,46,30S45.836,29.36,45.563,29.174z M24,43.107V16.893L43.225,30L24,43.107z"></path> <path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30 S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z"></path> </g> </g></svg>
                                            <p className="pl-1 mb-0 text-sm">Video 1: Introduction</p>
                                        </div>

                                        <div className='flex flex-row items-center pb-2'>
                                            <svg fill="#ffffff" height="15px" width="15px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 60 60" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M45.563,29.174l-22-15c-0.307-0.208-0.703-0.231-1.031-0.058C22.205,14.289,22,14.629,22,15v30 c0,0.371,0.205,0.711,0.533,0.884C22.679,45.962,22.84,46,23,46c0.197,0,0.394-0.059,0.563-0.174l22-15 C45.836,30.64,46,30.331,46,30S45.836,29.36,45.563,29.174z M24,43.107V16.893L43.225,30L24,43.107z"></path> <path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30 S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z"></path> </g> </g></svg>
                                            <p className="pl-1 mb-0 text-sm">Video 2: Learning the power</p>
                                        </div>

                                        <div className='flex flex-row items-center pb-2'>
                                            <svg fill="#ffffff" height="15px" width="15px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1468.214 0v564.698h-112.94V112.94H112.94v1694.092h1242.334v-225.879h112.94v338.819H0V0h1468.214Zm129.428 581.311c22.137-22.136 57.825-22.136 79.962 0l225.879 225.879c22.023 22.023 22.023 57.712 0 79.848l-677.638 677.637c-10.616 10.504-24.96 16.49-39.98 16.49h-225.88c-31.17 0-56.469-25.299-56.469-56.47v-225.88c0-15.02 5.986-29.364 16.49-39.867Zm-155.291 314.988-425.895 425.895v146.031h146.03l425.895-425.895-146.03-146.03Zm-764.714 346.047v112.94H338.82v-112.94h338.818Zm225.88-225.88v112.94H338.818v-112.94h564.697Zm734.106-315.44-115.424 115.425 146.03 146.03 115.425-115.423-146.031-146.031ZM1129.395 338.83v451.758H338.82V338.83h790.576Zm-112.94 112.94H451.759v225.878h564.698V451.77Z" fill-rule="evenodd"></path> </g></svg>
                                            <p className="pl-1 mb-0 text-sm">Assignment 1</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-column justify-start items-center w-full'>
                                <div className='flex items-start m-3'>
                                    Video 1: Introduction
                                </div>
                                <ReactPlayer
                                    url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                                    width="640px"
                                    height="360px"
                                    controls
                                />
                                <div className='flex items-start font-semibold text-lg underline m-2'>
                                    Description
                                </div>
                                <div className='w-[65%] text-center font-thin'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Modules