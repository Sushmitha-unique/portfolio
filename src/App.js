import React from "react";
import Navbar from "./component/Navbar.js"
import About from "./component/About.js"
import Section from "./component/Section.js";
import Footer from "./component/Footer.js";
const Data =[
  {
    title:"Skills",
    des:"She was a beautiful girl with long, flowing hair and piercing blue eyes.She was always smiling and had a kind heart. She was also very intelligent and loved to learn. She was always up for a new challenge and never gave up on her dreams.This is just a brief example, of course. You can write about a girl in many different ways. The most important thing is to be respectful and to focus on her individual qualities and experiences."
  },
  {
    title:"Projects",
    des:"She was a beautiful girl with long, flowing hair and piercing blue eyes.She was always smiling and had a kind heart. She was also very intelligent and loved to learn. She was always up for a new challenge and never gave up on her dreams.This is just a brief example, of course. You can write about a girl in many different ways. The most important thing is to be respectful and to focus on her individual qualities and experiences."
  },
  {
    title:"Qualifications",
    des:"She was a beautiful girl with long, flowing hair and piercing blue eyes.She was always smiling and had a kind heart. She was also very intelligent and loved to learn. She was always up for a new challenge and never gave up on her dreams.This is just a brief example, of course. You can write about a girl in many different ways. The most important thing is to be respectful and to focus on her individual qualities and experiences."
  }
]
const App=()=>{
   return (
    <div>
      <Navbar/>
      <About/>
      {
        Data.map(item => (
          <Section
          title ={item.title}
          des = {item.des}
          />
        ))
      }
      <Footer/>
    </div>
   );
}


export default App;