import { BrowserRouter, Routes, Route , Link } from "react-router-dom";


import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas ,Card, Bhargav} from "./components";

const App = () => {
  return (
    // <BrowserRouter>
    
    //   <div className='relative z-0' style={{backgroundColor: "rgba(21, 16, 48, 1)"}}>
        
    //     <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
    //       <Navbar />
    //       <Hero />
    //     </div>
        
    //     <About />
    //     <Bhargav/>
        
    //     <div className='relative z-0'>
    //       <Contact />

    //       <StarsCanvas />
    //     </div>
    //   </div>
    // </BrowserRouter>

    <BrowserRouter>
    <Navbar style={{backgroundColor: "rgba(21, 16, 48, 1)"}}/>

        <Routes >
          
          <Route exact path="/Bhargav" element={<Bhargav/>}/>
          <Route exact path="/" element={<Hero/>}/>
          <Route exact path="/" element={<Bhargav/>}/>

        </Routes>
        </BrowserRouter>
  );
}

export default App;
