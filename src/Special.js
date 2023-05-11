import logo from "./logo.svg";
import "./App.css";
import "./Special.css";
import TopBar from "./TopBar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FormControl } from "react-bootstrap";
import {
  ClockFill,
  Search,
  ArrowRightCircleFill,
  Reception4,
  Reception3,
  Reception2,
  Person,
  PersonFill,
  PlusCircleFill,
} from "react-bootstrap-icons";
import gradient from "random-gradient";

function Special() {
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

  return (
    <div className="App">
      <div className="bgGrad">
        <TopBar />
        <br></br>
        <header className="App-header">
          <div className="w-fit sm:w-[80vw] max-w-[1700px] mt-[3.5rem] h-full flex flex-col gap-3 rounded-xl drop-shadow-2xl bg-gray-950 p-4">
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
                <div className="bg-gray-900 grid grid-child min-h-fit 2xl:h-[300px] lg:grid-cols-1 grid-cols-[1fr_2fr] xl:grid-cols-[1fr_2fr] rounded-xl gap-4 p-3">
                  <div
                    className="flex block rounded-tr-[5rem] lg:hidden xl:block h-full min-w-[5rem] gradSquare max-h-[100%]"
                    style={{ background: gradient(course.name) }}
                  />
                  <div className="flex flex-col gap-2.5">
                    <div className="flex items-center justify-between mb-1 text-lg font-bold text-left 2xl:text-2xl">
                      {course.name}
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
                </div>
              ))}
            </div>
          </div>
          {/* <div className="grid items-center lg:flex gap-2 justify-center p-[5vw]">
            <div className="flex flex-col gap-8 text-left">
              <div className="md:max-w-[650px] sm:max-w-[80vw]">
                <h1 className="text-6xl lg:text-8xl">
                  Get{" "}
                  <span class="gradHighlight pr-4 pl-4 italic">Rewarded</span>
                </h1>
                <h1 className="text-6xl lg:text-8xl">for Learning</h1>
                <h4 className="lg:text-3xl">
                  Learn2Earn is an interesting platform that will teach you in
                  more an interactive way
                </h4>
              </div>
              <div className="flex flex-row gap-10">
                <button className="gradHighlight p-[0.9rem] text-lg lg:text-2xl font-semibold">
                  <div className="flex flex-row items-center gap-2">
                    Go to Courses <ArrowRightCircleFill />
                  </div>
                </button>
                <button className="gradHighlight p-[0.9rem] text-lg lg:text-2xl font-semibold">
                  <div className="flex flex-row items-center gap-2">
                    Go to Specializations <ArrowRightCircleFill />
                  </div>
                </button>
              </div>
            </div>
            <div className="flex justify-center">
            <img src={logo} className="App-logo" alt="logo" />
            </div>
          </div> */}
        </header>
      </div>
      {/* <div className="gradHeader max-h-[300px] gap-5 md:gap-15 lg:gap-20 lg:h-[25vh] p-[1vw]">
        <div>
          <div className="font-bold md:text-lg">Students Helped</div>
          <div className="text-2xl font-bold">20,000+</div>
        </div>
        <div>
          <div className="font-bold md:text-lg">Courses</div>
          <div className="text-2xl font-bold">150+</div>
        </div>
        <div>
          <div className="font-bold md:text-lg">Specializations</div>
          <div className="text-2xl font-bold">50+</div>
        </div>
        <div>
          <div className="font-bold md:text-lg">Instructors</div>
          <div className="text-2xl font-bold">100+</div>
        </div>
        <div>
          <div className="font-bold md:text-lg">Total Redeemed</div>
          <div className="text-2xl font-bold">$1.52M</div>
        </div>
      </div> */}
    </div>
  );
}

export default Special;
