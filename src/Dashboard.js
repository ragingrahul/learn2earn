import logo from "./logo.svg";
import "./App.css";
import "./Dashboard.css";
import TopBar from "./TopBar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FormControl } from "react-bootstrap";
import {
  ClockFill,
  Search,
  ArrowRightCircleFill,
  Reception4,
  PersonFill,
  PlusCircleFill,
} from "react-bootstrap-icons";
import gradient from "random-gradient";

import Heatmap from "./Heatmap";

function Dashboard() {

    

  return (
    <div className="App">
      <div className="bgGrad">
        <TopBar />
        <br></br>
        <header className="App-header">
          <div className="w-fit sm:w-[80vw] min-h-[90vh] max-w-[1700px] mt-[3.5rem] md:mt-[1rem]  h-full flex flex-col gap-3 drop-shadow-2x">
            <div className="text-left font-semibold italic w-fit">
                Your Dashboard
            </div>
            <div className="grid grid-rows-2 gap-8">
            <div className="grid grid-cols-2 gap-8">
                <div className="bg-gray-500 h-72 rounded-xl">
                    Badge
                </div>
                <div className="backdrop-blur-xl h-72 rounded-xl gap-3 flex flex-col justify-center items-center" id="test">
                    <div className="text-base font-bold p-1">
                        Activity Graph
                    </div>
                    <Heatmap />
                </div>
            </div>
            <div className="grid grid-cols-[1fr,1.2fr] gap-8">
            <div className="bg-gray-500 h-72 rounded-xl flex flex-col p-2 gap-2 overflow-y-scroll">
                    <div className="font-semibold text-left bg-gray-800 rounded-xl w-fit pr-2 pl-2 text-base">
                        Courses you're taking
                    </div>
                    <div className="bg-black rounded-xl grid grid-cols-[1fr,4fr] p-3 gap-4">
                        <div className="h-20 bg-gray-100 rounded-xl">
                            image
                        </div>
                        <div className="text-left flex justify-center flex-col gap-2">
                            <div className="font-semibold text-xl">
                                Economics
                            </div>
                            <div className="flex flex-row text-sm gap-3">
                                <div className="bg-gray-800 rounded-xl w-fit pr-2 pl-2">
                                    Money Earned: $100
                                </div>
                                <div className="bg-gray-800 rounded-xl w-fit pr-2 pl-2">
                                    Time Spent: 12 Hours
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-black rounded-xl grid grid-cols-[1fr,4fr] p-3 gap-4">
                        <div className="h-20 bg-gray-100 rounded-xl">
                            image
                        </div>
                        <div className="text-left">
                            ss
                        </div>
                    </div>
                    <div className="bg-black rounded-xl grid grid-cols-[1fr,4fr] p-3 gap-4">
                        <div className="h-20 bg-gray-100 rounded-xl">
                            image
                        </div>
                        <div className="text-left">
                            ss
                        </div>
                    </div>
                </div>
                <div className="bg-gray-500 h-72 rounded-xl">
                    progress
                    </div>
            </div>
          </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Dashboard;
