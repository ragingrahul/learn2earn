import logo from "./logo.svg";
import "./App.css";
import "./Home.css";
import TopBar from "./TopBar";
import { Button } from "react-bootstrap";

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
                Get <span class="gradHighlight after:rounded-xl pr-4 pl-4 italic">Rewarded</span>
              </h1>
              <h1 className="text-8xl">
                for Learning
              </h1>
              <h4 className="text-3xl">
              Learn2Earn is an interesting platform that will teach you in more an interactive way
              </h4>
            </div>
            <div className="flex flex-row gap-10">
            <button className="gradHighlight p-[0.9rem] text-2xl font-semibold">Go to Courses</button>
            <button className="gradHighlight p-[0.9rem] text-2xl font-semibold">Go to Specializations</button>
            </div>
            </div>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </header>
      </div>
      <div className="gradHeader">
        <div>
          <div className="text-2xl font-bold">Students Helped</div>
          <p>20000</p>
        </div>
        <div>
          <div className="text-2xl font-bold">Students Helped</div>
          <p>20000</p>
        </div>
        <div>
          <div className="text-2xl font-bold">Students Helped</div>
          <p>20000</p>
        </div>
        <div>
          <div className="text-2xl font-bold">Students Helped</div>
          <p>20000</p>
        </div>
        <div>
          <div className="text-2xl font-bold">Students Helped</div>
          <p>20000</p>
        </div>
      </div>
    </div>
  );
}

export default App;
