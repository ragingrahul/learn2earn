import logo from "./logo.svg";
import "./App.css";
import "./Home.css";
import TopBar from "./components/molecules/TopBar";
import { ArrowRightCircleFill } from "react-bootstrap-icons";

function App() {
  return (
    <div className="App">
      <div className="bgGrad">
        <TopBar />
        <header className="App-header h-[100vh]">
          <div className="lg:flex lg:flex-row gap-2 justify-center p-[5vw] flex flex-col-reverse">
            <div className="flex flex-col gap-8 sm:text-center md:text-left items-center md:items-start">
              <div className="md:max-w-[650px] sm:max-w-[80vw]">
                <h1 className="text-4xl md:text-6xl lg:text-8xl whitespace-pre">
                  Get{" "}
                  <span className="gradHighlight pr-4 pl-4 italic">
                    Rewarded
                  </span>
                </h1>
                <h1 className="text-4xl md:text-6xl lg:text-8xl">
                  for Learning
                </h1>
                <h4 className="text-base md:text-3xl px-10 sm:px-20  md:px-0">
                  Learn2Earn is an interesting platform that will teach you in
                  more an interactive way
                </h4>
              </div>
              <div className="flex flex-col md:flex-row gap-3 lg:gap-10 w-fit">
                <button className="gradHighlight p-[0.9rem] text-sm sm:text-base md:text-xl lg:text-2xl font-semibold hover:bg-black">
                  <div
                    className="flex flex-row items-center gap-2"
                    onClick={() => (window.location.href = "#/courses")}
                  >
                    Go to Courses <ArrowRightCircleFill />
                  </div>
                </button>
                <button className="gradHighlight p-[0.9rem] text-sm sm:text-base md:text-xl lg:text-2xl font-semibold hover:bg-black">
                  <div
                    className="flex flex-row items-center gap-2"
                    onClick={() => (window.location.href = "#/specials")}
                  >
                    Go to Specializations <ArrowRightCircleFill />
                  </div>
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
          </div>
        </header>
      </div>
      <div className="gradHeader max-h-[300px] gap-4 md:gap-15 lg:gap-20 lg:h-[25vh] p-[1vw] py-10">
        <div>
          <div className="font-bold md:text-lg">Students Helped</div>
          <div className="text-xl md:text-2xl font-bold">20,000+</div>
        </div>
        <div>
          <div className="font-bold md:text-lg">Courses</div>
          <div className="text-xl font-bold">150+</div>
        </div>
        <div>
          <div className="font-bold md:text-lg">Specializations</div>
          <div className="text-xl font-bold">50+</div>
        </div>
        <div>
          <div className="font-bold md:text-lg">Instructors</div>
          <div className="text-xl font-bold">100+</div>
        </div>
        <div>
          <div className="font-bold md:text-lg">Total Redeemed</div>
          <div className="text-xl font-bold">$1.52M</div>
        </div>
      </div>
    </div>
  );
}

export default App;
