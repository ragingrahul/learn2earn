import React from "react";
import { useState } from "react";
import TopBar from "../../molecules/TopBar";

function Course() {
  const [openAccordion, setOpenAccordion] = useState(false);

  const toggleAccordion = () => {
    setOpenAccordion(!openAccordion);
  };

  return (
    <>
      <TopBar />
      <div className="bg-Bggradient min-h-screen py-20 flex w-full px-3 justify-center bg-opacity-75 bg-slate-900 backdrop-blur-sm">
        <div className="flex w-full h-full justify-between">
          <div className="w-[20%]">
            <div className=" shadow-gray-200 text-white p-8 rounded-lg mb-4 w-full h-full">
              <div className="my-3">
                <div
                  className={`flex items-center justify-between ${
                    !openAccordion ? "rounded-b-lg" : " px-4 py-2 bg-gray-700 "
                  } rounded-t-lg  cursor-pointer`}
                  onClick={toggleAccordion}
                >
                  <h2 className="text-lg m-0 font-medium">Course Materials</h2>
                  <svg
                    className={`w-6 h-6 transform ${
                      openAccordion ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {openAccordion && (
                  <div className="bg-gray-500 rounded-b-lg p-4">
                    <p>Lesson 1</p>
                    <p>Lesson 2</p>
                    <p>Lesson 3</p>
                    <p>etc.</p>
                  </div>
                )}
              </div>
              <h2 className="text-lg text-[18px] my-2 font-semibold">Grades</h2>
              <h2 className="text-lg text-[18px] my-2 font-semibold">Notes</h2>
              <h2 className="text-lg text-[18px] my-2 font-semibold">
                Resources
              </h2>
              <h2 className="text-lg text-[18px] my-2 font-semibold">
                Threads
              </h2>
              <h2 className="text-lg text-[18px] my-2 font-semibold">
                Course Info
              </h2>
              <h2 className="text-lg text-[18px] my-2 font-semibold">Notes</h2>
            </div>
          </div>
          <div className="w-[50%] h-auto border text-white p-8 rounded-lg mb-4">
            <div className="mb-4">
              <div className="border-b">
                <h2 className="text-lg text-center text-[22px] my-2 font-semibold">
                  Welcome
                </h2>

                <div className="flex justify-between items-center py-2 px-4">
                  <div className="flex justify-between items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="mr-1 h-4 w-4"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>

                    <h4 className="whitespace-nowrap m-0 p-0 text-[16px]">
                      41 min of videos left
                    </h4>
                  </div>

                  <div className="flex justify-between items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="h-4 w-4 mr-1"
                    >
                      <polygon points="12 2 16.73 8.23 23 9.26 18 14.14 19.46 21 12 17.81 4.54 21 6 14.14 1 9.26 7.27 8.23 12 2" />
                    </svg>

                    <h4 className="whitespace-nowrap m-0 p-0 text-[16px]">
                      1 graded assessment left
                    </h4>
                  </div>
                </div>
              </div>
              <p className="text-[16px] py-2 px-3">
                These lectures and readings give you an introduction to this
                course: its philosophy, organization, and load. They also tell
                you how the assignments are a significant part of the class.
                This week covers the common input/output organization of the
                assignments, how they are graded, and how to succeed in this
                class.
              </p>
            </div>

            <div className="mb-4">
              <div className="border-b mb-2">
                <h2 className="text-lg text-[18px] my-2 font-semibold">
                  Course Title
                </h2>
              </div>
              <div className="flex items-center cursor-pointer hover:bg-slate-400 px-4 rounded-lg py-2">
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-4 w-4"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="10 8 16 12 10 16 10 8" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[16px] font-medium mb-1">Course Promo</h4>
                  <p className="p-0 m-0">Video . 20 min</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[25%] bg-slate-500 rounded-lg"></div>
        </div>
      </div>
    </>
  );
}

export default Course;
