import Card from "../components/Card";
import { useRef } from "react";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
    const grid2Container = useRef();
    return (
        <section className="c-space section-spacing">
            <h2 className="text-heading" data-aos="fade-up" data-aos-delay="250">About Me</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
                {/* {Grid 1} */}
                <div className="flex items-end grid-default-color grid-1" data-aos="fade-up" data-aos-delay="200">
                    <img src="assets/coding-pov.png" alt="Grid 1 Image" className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]" />
                    <div className="z-10">
                        <p className="headtext">Hi, I'm Adelard</p>
                        <p className="subtext text-justify">Specializing in high-performance front-end development. I build motion-rich interfaces and 3D web environments that captivate and engage users.</p>
                    </div>
                    <div className="absolute inset-x-0 pointer-events-none-bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"></div>
                </div>
                {/* {Grid 2} */}
                <div className="grid-default-color grid-2" data-aos="fade-up" data-aos-delay="200">
                    <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
                        <p className="flex items-end text-5xl text-gray-500">
                            ARCHITECTURE FIRST
                        </p>
                        <Card style={{ rotate: "75deg", top: "30%", left: "20%" }} text="GRASP"
                        containerRef={grid2Container} />
                        <Card style={{ rotate: "-30deg", top: "60%", left: "45%" }} text="SOLID"
                        containerRef={grid2Container} />
                        <Card style={{ rotate: "90deg", bottom: "30%", left: "70%" }} text="Design Patterns"
                        containerRef={grid2Container} />
                        <Card style={{ rotate: "-45deg", top: "55%", left: "0%" }} text="Design Principles"
                        containerRef={grid2Container} />
                        <Card style={{ rotate: "20deg", top: "10%", left: "38%" }} text="SRP"
                        containerRef={grid2Container} />
                        <Card
                        style={{ rotate: "30deg", top: "70%", left: "70%" }}
                        image="assets/logos/csharp-pink.png"
                        containerRef={grid2Container}
                        />
                        <Card
                        style={{ rotate: "-45deg", top: "70%", left: "25%" }}
                        image="assets/logos/dotnet-pink.png"
                        containerRef={grid2Container}
                        />
                        <Card
                        style={{ rotate: "-45deg", top: "5%", left: "10%" }}
                        image="assets/logos/blazor-pink.png"
                        containerRef={grid2Container}
                        />
                    </div>
                </div>
                {/* {Grid 3} */}
                <div className="grid-black-color grid-3" data-aos="fade-up" data-aos-delay="200">
                    <div className="z-10 w-[50%]">
                        <p className="headtext">Time Zone</p>
                        <p className="subtext">
                         Based in Indonesia (GMT+7). Open to remote work worldwide.
                        </p>
                    </div>
                    <figure className="absolute left-[30%] top-[10%]">
                        <Globe />
                    </figure>
                </div>
                {/* {Grid 4} */}
                <div className="grid-special-color grid-4" data-aos="fade-up" data-aos-delay="250">
                    <div className="flex flex-col items-center justify-center gap-4 size-full">
                        <p className="text-center headtext">
                            Do you want to start a project together?
                        </p>
                         <CopyEmailButton />
                    </div>
                </div>
                {/* {Grid 5} */}
                <div className="grid-default-color grid-5" data-aos="fade-up" data-aos-delay="200">
                    <div className="z-10 w-[50%]">
                        <p className="headtext">Tech Stack</p>
                        <p className="subtext text-justify">My toolkit for building next-level interfaces. I leverage React and Tailwind for structure, powered by GSAP and Three.js for seamless motion and 3D effects.</p>
                    </div>
                    <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] nd:scale-125">
                        <Frameworks />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About