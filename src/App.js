import React, { Component } from 'react';
import Navagation from './Componants/Navagation/Navagation';
import Photo from './Componants/Photo/Photo';
import Experience from './Componants/Experience/Experience';
import SkillSet from './Componants/SkillSet/SkillSet';
import Publication from'./Componants/Publication/Publication';
import Contact from './Componants/Contact/Contact';
import Portfolio from './Componants/Portfolio/Portfolio';
import Extracurricular from './Componants/Extracurricular/Extracurricular';
import Particles from 'react-particles-js';
import './App.css';


const particalsOptions=
{
  particles: {
    number:{
      value:200,
      density:{
        value_area:1000,
      }
    }
  }
}


class App extends Component{
  render() {
    return (
      <div className="App">
        <Particles className='partical' params={particalsOptions}/>
            <Navagation />
            <Photo />
            <Publication />
            <SkillSet />
            <Experience />
            <Extracurricular />
            <Portfolio />
            <Contact />
      </div>
    );
  }
}

export default App;
