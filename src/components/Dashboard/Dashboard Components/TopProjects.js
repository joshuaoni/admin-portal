import React from 'react'; 
import { BsChevronRight } from "react-icons/bs";
import pg from "../../../assets/project.png";

export default function TopProjects() {
  const project = [
    {
      title: "Text to Speech",
      views: 64,
    },
    {
      title: "File Compressor",
      views: 124,
    },
    {
      title: "Turbo Gaming",
      views: 500,
    },
    {
      title: "Face Detector",
      views: 238,
    },
    {
      title: "Wordle Clone",
      views: 334,
    },
    {
      title: "Weather Outlook",
      views: 25,
    },
  ];
  return (
    <div className='top-projects card-style'>
      <div className="title-cont">
        <div className="title">
          <h4>Top Projects</h4>
        </div>
        <div className="filters">
          <span>All Projects</span>
          <button>New Projects</button>
        </div>
      </div>
      <div className="projects">
        {project.map(({ title, views }) => {
          return (
            <div className="project" key={title}>
              <div className="details">
                <div className="image">
                  <img src={pg} alt="title" />
                </div>
                <div className="info">
                  <h5>{title}</h5>
                  <h6>{views}K Views</h6>
                </div>
              </div>
              <BsChevronRight />
            </div>
          );
        })}
      </div>
    </div>
  );
}

