import Hero from "./sections/hero";
import Navbar from "./sections/Navbar";

const App = () => {
  return ( 
     <main className="max-w-7xl mx-auto">
       <Navbar />
       <Hero />
     </main>
   );
}
 
export default App;