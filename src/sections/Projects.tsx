import { useState } from "react";
import { myProjects } from "../constants"

const Projects = () => {
    const [SelectedProjectIndex, setSelectedProjectIndex] = useState(0);

    const projectCount = myProjects.length;

    const currentProject = myProjects[SelectedProjectIndex];



    const handleNavigation = (direction: 'prev' | 'next') => {
        setSelectedProjectIndex((prevIndex) => {
          if (direction === 'prev') {
            return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
          } else {
            return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
          }
        });
      };
    
  return (
    <section
        className="c-space my-20"
    >
        <p className="grid-headtext">
            my work
        </p>

        <div 
            className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full"
        >
            <div 
                className="flex flex-col gap-5 relative sm:p10 py-10 px-5 shadow-2xl"
            >
                <div className="absolute top-0 right-0">
                    <img 
                        src={currentProject.spotlight}
                        alt="spotlight"
                        className="w-full h-96 object-cover rounded-xl"
                    />
                </div>
                <div
                    className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
                    style={currentProject.logoStyle}
                >
                    <img
                        src={currentProject.logo}
                        alt="logo"
                        className="w-10 h-10 shadow-sm"
                    />
                </div>
                <div className="flex flex-col gap-5 text-white-600 my-5" >
                    <p className="text-white text-2xl font-semibold animatedText">

                        {currentProject.title}
                    </p>
                    <p className="animatedText">
                        {currentProject.desc}
                    </p>
                    <p className="animatedText">
                        {currentProject.subdesc}
                    </p>
                </div>
                <div
                    className="flex items-center justify-between flex-wrap gap-5"
                >
                    <div className="flex items-center gap-3">
                        {currentProject.tags.map((tag,index)=> (
                            <div
                                key={index}
                                className="tech-logo"
                            >
                                <img
                                    src={tag.path}
                                    alt={tag.name}
                                />
                            </div>
                        ))}
                    </div>
                    <a 
                        href={currentProject.href} 
                        className="flex items-center gap-2 cursor-pointer text-white-600"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <p>Check live Site</p>
                        <img
                            src="/assets/arrow-up.png"
                            alt="arrow"
                            className="w-3 h-3"
                        />
                    </a>
                </div>
                <div
                    className="flex justify-between items-center mt-7"
                >
                    <button
                        className="arrow-btn"
                        onClick={() => handleNavigation('prev')}
                    >
                        <img
                            src="/assets/left-arrow.png"
                            alt="left arrow"
                            className="w-4 h-4"
                        />
                    </button>
                    <button
                        className="arrow-btn"
                        onClick={() => handleNavigation('next')}
                    >
                        <img
                            src="/assets/right-arrow.png"
                            alt="right arrow"
                            className="w-4 h-4"
                        />
                    </button>
                </div>
            </div>
            <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
                        
            </div>
        </div>

    </section>
  )
}

export default Projects
