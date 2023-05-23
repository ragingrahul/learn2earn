import "./App.css";
import "./Special.css";
import TopBar from "./TopBar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { motion } from "framer-motion";
import styled from "styled-components";
import { keyframes } from "styled-components";
import {
  ClockFill,
  Search,
  ArrowRightCircleFill,
  Reception4,
  PersonFill,
  PlusCircleFill,
} from "react-bootstrap-icons";
import gradient from "random-gradient";

function Special() {
  const shineAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const ShiningDiv = styled(motion.div)`
  position: relative;
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    top: -10%;
    left: -10%;
    width: 120%;
    height: 120%;
    background: linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0.15) 10%,
      rgba(255, 255, 255, 0.1) 20%,
      rgba(255, 255, 255, 0.05) 30%,
      rgba(255, 255, 255, 0) 40%
    );
    opacity: 0;
    pointer-events: none;
  }

  &:hover::after {
    animation: ${shineAnimation} 1s backwards;
  }
`;


  const courses = [
    {
      name: "Machine Learning",
      description:
        "Learn Machine Learning from the best in the industry through our advanced course",
    },
    {
      name: "Web Development",
      description: "Learn Web Development from the best in the industry",
    },
    {
      name: "App Development",
      description: "Learn App Development from the best in the industry",
    },
    {
      name: "Data Science",
      description: "Learn Data Science from the best in the industry",
    },
    {
      name: "Artificial Intelligence",
      description:
        "Learn Artificial Intelligence from the best in the industry",
    },
    {
      name: "Cyber Security",
      description:
        "Learn Cyber Security through various lessons from licensed instructors",
    },
    {
      name: "Ethical Hacking",
      description: "Learn Ethical Hacking from the best in the industry",
    },
    {
      name: "Game Development",
      description: "Learn Game Development from the best in the industry",
    },
  ];

  const handleHoverEnd = (event) => {
    event.target.style.animation = "none";
  };
  return (
    <div className="App">
      <div className="bgGrad">
        <TopBar />
        <br></br>
        <header className="App-header">
          <div className="w-fit sm:w-[80vw] max-w-[1700px] mt-[3.5rem] h-full flex flex-col gap-3 drop-shadow-2x">
            <div className="italic text-left font-semibold text-6xl p-2 text-gray-100">
              Specializations
            </div>
            <div className="bg-gray-950 p-4 rounded-xl">
              <div>
                <div className="max-w-[500px]">
                  <InputGroup className="mb-3">
                    <InputGroup.Text className="!bg-gray-900 !border-gray-800 !text-gray-600">
                      <Search></Search>
                    </InputGroup.Text>
                    <Form.Control
                      className="!bg-gray-900 !border-gray-800 !text-white"
                      placeholder="Search for Specializations"
                      aria-label="Search Courses"
                    />
                  </InputGroup>
                </div>
              </div>
              <div className="grid justify-center gap-3 lg:grid-cols-2">
                {courses.map((course) => (
                  <ShiningDiv
                    whileHover={{
                      scale: 1.05,

                      boxShadow: "0 0 30px rgba(0, 0, 0, 0.7)",
                    }}
                    onMouseLeave={handleHoverEnd}
                    className="bg-gray-900 grid grid-child min-h-fit 2xl:h-[300px] lg:grid-cols-1 grid-cols-[1fr_2fr] xl:grid-cols-[1fr_2fr] rounded-xl gap-4 p-3"
                  >
                    <div
                      className="flex rounded-tr-[5rem] lg:hidden xl:block h-full min-w-[5rem] gradSquare max-h-[100%]"
                      style={{ background: gradient(course.name) }}
                    />
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center justify-between mb-1 text-lg font-bold text-left 2xl:text-2xl">
                        <div
                          className="rounded-2xl"
                          style={{ background: gradient(course.name) }}
                        >
                          <div className="pr-2 pl-2 pt-1 pb-1 rounded-2xl bg-gray-800 bg-opacity-90">
                            {course.name}
                          </div>
                        </div>
                        <button>
                          <PlusCircleFill />
                        </button>
                      </div>
                      <div className="text-sm text-left 2xl:text-lg">
                        {course.description}
                      </div>
                      <div className="flex flex-row gap-4 p-2 font-semibold whitespace-pre bg-gray-800 rounded-xl">
                        <div className="text-[1rem]  2xl:text-[1.2rem] flex flex-row gap-2 items-center">
                          <ClockFill />3 Months
                        </div>
                        <div className="text-[1rem] 2xl:text-[1.2rem] flex flex-row gap-2 items-center">
                          <Reception4 />
                          Intermediate
                        </div>
                        <div className="text-[1rem] 2xl:text-[1.2rem] flex flex-row gap-2 items-center">
                          <PersonFill />
                          3000+
                        </div>
                      </div>
                      <div className="flex flex-row text-sm 2xl:text-base gap-1.5 flex-wrap">
                        <span className="pl-2 pr-2 font-medium bg-gray-800 rounded-2xl">
                          Python
                        </span>
                        <span className="pl-2 pr-2 font-medium bg-gray-800 rounded-2xl">
                          Tensorflow
                        </span>
                        <span className="pl-2 pr-2 font-medium bg-gray-800 rounded-2xl">
                          Pytorch
                        </span>
                        <span className="pl-2 pr-2 font-medium bg-gray-800 rounded-2xl">
                          Jupyter
                        </span>
                        <span className="pl-2 pr-2 font-medium bg-gray-800 rounded-2xl">
                          Linear Algebra
                        </span>
                        <span className="pl-2 pr-2 font-medium bg-gray-800 rounded-2xl">
                          Javascript
                        </span>
                        <span className="pl-2 pr-2 font-medium bg-gray-800 rounded-2xl">
                          Github
                        </span>
                      </div>
                      <div className="flex flex-row gap-2">
                        <button className="gradHighlight p-[0.5rem] text-sm lg:text-xl font-semibold max-w-fit">
                          <div className="flex flex-row items-center gap-2 text-sm">
                            View Course <ArrowRightCircleFill />
                          </div>
                        </button>
                        <button className="gradHighlight p-[0.5rem] text-sm lg:text-xl font-semibold max-w-fit">
                          <div className="flex flex-row items-center gap-2 text-sm">
                            View Syllabus <ArrowRightCircleFill />
                          </div>
                        </button>
                      </div>
                    </div>
                  </ShiningDiv>
                ))}
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Special;
