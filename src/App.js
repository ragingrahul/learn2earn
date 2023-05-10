import logo from "./logo.svg";
import "./App.css";
import "./Home.css";
import TopBar from "./TopBar";
import { Button } from "react-bootstrap";
import { ArrowRightCircleFill } from "react-bootstrap-icons";


function App() {
  return (
    <div className="App">
      <div className="bgGrad">
        <TopBar />
        <header className="App-header">
          <div className="grid sm:flex justify-center items-center">
            <div className="text-left flex flex-col gap-8">
              <div className="max-w-[650px]">
                <h1 className="text-8xl">
                  Get{" "}
                  <span class="gradHighlight after:rounded-xl pr-4 pl-4 italic">
                    Rewarded
                  </span>
                </h1>
                <h1 className="text-8xl">for Learning</h1>
                <h4 className="text-3xl">
                  Learn2Earn is an interesting platform that will teach you in
                  more an interactive way
                </h4>
              </div>
              <div className="flex flex-row gap-10">
                <button className="gradHighlight p-[0.9rem] text-2xl font-semibold">
                  <div className="flex flex-row items-center gap-2">Go to Courses <ArrowRightCircleFill /></div>
                </button>
                <button className="gradHighlight p-[0.9rem] text-2xl font-semibold">
                <div className="flex flex-row items-center gap-2">Go to Specializations <ArrowRightCircleFill /></div>
                </button>
              </div>
            </div>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </header>
      </div>
      <div className="gradHeader">
        <div>
          <div className="text-lg font-bold">Students Helped</div>
          <div className="text-2xl font-bold">20,000+</div>
        </div>
        <div>
          <div className="text-lg font-bold">Courses</div>
          <div className="text-2xl font-bold">150+</div>
        </div>
        <div>
          <div className="text-lg font-bold">Specializations</div>
          <div className="text-2xl font-bold">50+</div>
        </div>
        <div>
          <div className="text-lg font-bold">Instructors</div>
          <div className="text-2xl font-bold">100+</div>
        </div>
        <div>
          <div className="text-lg font-bold">Total Redeemed</div>
          <div className="text-2xl font-bold">$1.52M</div>
        </div>
      </div>
    </div>
  );
}

export default App;
