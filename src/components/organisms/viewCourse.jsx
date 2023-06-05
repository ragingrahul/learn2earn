import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../molecules/TopBar";
import ViewCourseInfo from "../molecules/ViewCourseInfo";
import CourseMaterial from "../molecules/CourseMaterial";
function ViewCourse() {
  const [openAccordion, setOpenAccordion] = useState(false);

  const toggleAccordion = () => {
    setOpenAccordion(!openAccordion);
  };
  const navigate = useNavigate();

  const handleCourse = () => {
    navigate("/course");
  };

  return (
    <div>
      <div>
        <TopBar />
        <div className="z-10 bg-Bggradient  py-20 flex items-center justify-center bg-opacity-75 bg-slate-900 backdrop-blur-sm">
          <div className="bg-slate-900 text-white relative flex flex-col justify-start w-[80%] z-[1000%] rounded-lg p-6">
            <ViewCourseInfo />
            <div className="flex flex-row">
              <h1 className="text-base font-light border-[1px] border-slate-600 rounded-full px-3 mr-3">
                Nodes 3
              </h1>
              <h1 className="text-base font-light border-[1px] border-slate-600 rounded-full px-3">
                Attachments 25
              </h1>
            </div>
            <CourseMaterial/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewCourse;
