import "./App.css";
import TopBar from "./TopBar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "./redux/actions";
import {
  ClockFill,
  Search,
  ArrowRightCircleFill,
  Reception4,
  PersonFill,
  PlusCircleFill,
  XCircleFill,
} from "react-bootstrap-icons";
import gradient from "random-gradient";

function Courses() {
  const [scourse, setSCourse] = useState(null);
  const dispatch = useDispatch();
  const reduxStore = useSelector((state) => state);
  const schools = [
    "Artifical Intelligence",
    "Web Development",
    "App Development",
    "Data Science",
    "Artificial Intelligence",
    "Cyber Security",
  ];
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
        <header className="App-header min-h-[98vh]">
          <div className="w-fit sm:w-[80vw] max-w-[1700px] mt-[3.5rem] h-full flex flex-col gap-3 drop-shadow-2x">
            <div className="italic text-left font-semibold text-6xl p-2 text-gray-100">
              Courses
            </div>
            <div className="bg-gray-950 p-4 rounded-xl">
              <div className="text-left flex flex-col gap-2 mb-3">
                <div className="max-w-[500px]">
                  <InputGroup className="mb-0">
                    <InputGroup.Text className="!bg-gray-900 !border-gray-800 !text-gray-600">
                      <Search></Search>
                    </InputGroup.Text>
                    <Form.Control
                      className="!bg-gray-900 !border-gray-800 !text-white"
                      placeholder="Search for Courses"
                      aria-label="Search Courses"
                    />
                  </InputGroup>
                </div>
                <div className="flex-row gap-3 flex flex-wrap">
                  <Dropdown>
                    <Dropdown.Toggle
                      className="!bg-gray-900 !border-gray-800 !text-gray-300"
                      variant="secondary"
                    >
                      {scourse ? (
                        <span className="bg-gray-700 pr-2 pl-2 pb-[0.2rem] pt-[0.2rem] rounded-xl">
                          {scourse}
                        </span>
                      ) : (
                        "Schools"
                      )}
                    </Dropdown.Toggle>

                    <Dropdown.Menu
                      className="!bg-gray-900 !border-gray-800 !text-gray-300"
                      variant="dark"
                    >
                      {schools.map((school) => (
                        <Dropdown.Item
                          onClick={() => setSCourse(school)}
                          active={scourse === school}
                        >
                          {school}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle
                      className="!bg-gray-900 !border-gray-800 !text-gray-300"
                      variant="secondary"
                    >
                      Length
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      className="!bg-gray-900 !border-gray-800 !text-gray-300"
                      variant="dark"
                    >
                      <Dropdown.Item>4+ Days</Dropdown.Item>
                      <Dropdown.Item>10+ Days</Dropdown.Item>
                      <Dropdown.Item>2+ Weeks</Dropdown.Item>
                      <Dropdown.Item>1+ Month</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div className="grid justify-center gap-3 lg:grid-cols-2">
                {courses.map((course) => (
                  <div className="bg-gray-900 grid grid-child min-h-fit 2xl:h-[300px] lg:grid-cols-1 grid-cols-[1fr_2fr] xl:grid-cols-[1fr_2fr] rounded-xl gap-4 p-3">
                    <div
                      className="flex rounded-tr-[5rem] lg:hidden xl:block h-full min-w-[5rem] gradSquare max-h-[100%]"
                      style={{ background: gradient(course.name) }}
                    />
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center justify-between mb-1 text-lg font-bold text-left 2xl:text-2xl">
                        <div className="rounded-2xl">
                          <div className="pr-2 pl-2 pt-1 pb-1 rounded-2xl bg-gray-800 bg-opacity-90">
                            {course.name}
                          </div>
                        </div>
                        {reduxStore.cart.cart[course.name] ? (
                          <button
                            onClick={() =>
                              dispatch(
                                removeFromCart({
                                  name: course.name,
                                  price: "$29.99",
                                })
                              )
                            }
                          >
                            <XCircleFill />
                          </button>
                        ) : (
                          <button
                            onClick={() =>
                              dispatch(
                                addToCart({
                                  name: course.name,
                                  price: "$29.99",
                                })
                              )
                            }
                          >
                            <PlusCircleFill />
                          </button>
                        )}
                      </div>
                      <div className="text-sm text-left 2xl:text-lg">
                        {course.description}
                      </div>
                      <div className="flex flex-row gap-4 p-2 font-semibold whitespace-pre bg-gray-800 rounded-xl">
                        <div className="text-[1rem]  2xl:text-[1.2rem] flex flex-row gap-2 items-center">
                          <ClockFill />
                          4+ Days
                        </div>
                        <div className="text-[1rem] 2xl:text-[1.2rem] flex flex-row gap-2 items-center">
                          <Reception4 />
                          Beginner
                        </div>
                        <div className="text-[1rem] 2xl:text-[1.2rem] flex flex-row gap-2 items-center">
                          <PersonFill />
                          40000+
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
          </div>
        </header>
      </div>
    </div>
  );
}

export default Courses;
