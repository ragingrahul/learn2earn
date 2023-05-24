import "./App.css";
import "./Dashboard.css";
import TopBar from "./TopBar";
import { useSelector } from "react-redux";
import gradient from "random-gradient";

import Heatmap from "./Heatmap";

function Dashboard() {
  const reduxStore = useSelector((state) => state);
  const courses = [
    {
      name: "Machine Learning",
    },
    {
      name: "Web Development",
    },
    {
      name: "App Development",
    },
    {
      name: "Data Science",
    },
  ];
  return (
    <div className="App">
      <div className="bgGrad">
        <TopBar />
        <br></br>
        <header className="App-header">
          <div className="w-fit sm:w-[80vw] min-h-[90vh] max-w-[1400px] mt-[3.5rem] md:mt-[1rem] h-full flex flex-col gap-3 drop-shadow-2x">
            <div className="flex gap-4 items-center">
              <div className="text-left font-semibold italic w-fit">
                Your Dashboard
              </div>
              {reduxStore.walletAdd.address && (
                <div className="text-sm bg-gray-900 px-1.5 p-1 rounded-xl flex items-center gap-2">
                  <div className="text-xs text-green-800 bg-green-200 font-semibold px-1.5 rounded-xl py-0.5">
                    Connected
                  </div>
                  <div className="font-medium">Wallet: {reduxStore.walletAdd.address.slice(0, 4)}...{reduxStore.walletAdd.address.slice(-4, )} </div>
                </div>
              )}
            </div>
            <div className="grid grid-rows-2 gap-8">
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-gray-800 h-72 rounded-xl flex flex-col justify-center">
                  [Badge]
                </div>
                <div
                  className="backdrop-blur-xl h-72 rounded-xl gap-3 flex flex-col justify-center items-center"
                  id="test"
                >
                  <div className="text-base font-bold p-1">Activity Graph</div>
                  <Heatmap />
                </div>
              </div>
              <div className="grid grid-cols-[1fr,1.2fr] gap-8">
                <div className="bg-gray-800 h-72 rounded-xl flex flex-col p-2 gap-2 overflow-y-scroll">
                  <div className="font-semibold text-left backdrop-blur-xl rounded-xl pr-2 pl-2 text-base fixed">
                    Current Courses
                  </div>
                  <div className="mt-4"></div>
                  {courses.map((course) => (
                    <div
                      key={course.name}
                      className="bg-black rounded-xl grid grid-cols-[1fr,4fr] p-3 gap-4"
                    >
                      <div
                        className="h-20 rounded-xl"
                        style={{ background: gradient(course.name) }}
                      ></div>
                      <div className="text-left flex justify-center flex-col gap-2">
                        <div className="font-semibold text-xl">
                          {course.name}
                        </div>
                        <div className="flex flex-row text-sm gap-3">
                          <div className="bg-gray-800 rounded-xl w-fit pr-2 pl-2">
                            Modules Left: 10
                          </div>
                          <div className="bg-gray-800 rounded-xl w-fit pr-2 pl-2">
                            Time Spent: 12 Hours
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-800 h-72 rounded-xl grid grid-cols-2 gap-2 p-2">
                  <div className="bg-black rounded-xl flex flex-col justify-center">
                    [Skill Tree]
                  </div>
                  <div className="grid grid-rows-2 gap-2 rounded-xl">
                    <div className="bg-black rounded-xl flex flex-col text-left justify-center p-4">
                      <div className="text-lg">Money Earned</div>
                      <div className="text-4xl font-semibold">$134.51</div>
                    </div>
                    <div className="bg-black rounded-xl flex flex-col text-left justify-center p-4">
                      <div className="text-lg">Next Payout</div>
                      <div className="text-4xl font-semibold">
                        2<span className="ml-2 text-xl">/ 10 Modules</span>
                      </div>
                    </div>
                  </div>
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
