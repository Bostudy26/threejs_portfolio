import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import HackerRoom from "../components/HackerRoom"
import { Suspense } from "react"
import Loading from "../components/loading"


const Hero = () => {
  return (
    <section
        className="min-h-screen w-full flex flex-col relative"
    >
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
            <p 
                className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans"
            >
                Hello, I'm Bo 
                <span className="waving-hand">👋</span>      
            </p>
            <p 
                className="hero_tag text-gray_gradient"
            >Building Products & Brands</p>
        </div>
        
        <div className="w-full h-full absolute inset-0">
            <Canvas 
                className="h-full w-full"
            >
                <Suspense fallback={<Loading />}>
                    
               
                <PerspectiveCamera
                    makeDefault
                    position={[0,0,30]}
                />
                <HackerRoom/>
            </Suspense>
            </Canvas>
        </div>
    </section> 
  )
}

export default Hero
