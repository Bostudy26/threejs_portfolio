const About = () => {
  return (
    <section className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img
                        src="assets/grid1.png"
                    />
                <div>
                <p
                    className="grid-headtext"
                >
                    Hi , i'm Bo
                </p>
                <p className="grid-subtext">
                    With 12 years of of experience, i have honed my skills in fronted and backend development, with a focus on animated 3D websites.
                </p>
                </div>
            </div>
        </div>
        <div 
            className="col-span-1 xl:row-span-3"
        >
            <div className="grid-container">
                <img 
                    src="assets/grid2.png"
                    alt="grid-2"
                    className="w-full sm:w-[276px] h-fit object-contain" 
                />
                <div>
                    <p className="grid-headtext">
                        Tech Stack
                    </p>
                    <p className="grid-subtext">
                        I specialize in js/ts with a focus on React and Next.js ecosystems.
                    </p>
                </div>
            </div>
            <div className="col-span-1 xl:row-span-4">
                <div className="grid-container">
                    <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">

                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About;
