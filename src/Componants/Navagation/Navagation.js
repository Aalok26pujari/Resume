import React from 'react';

const menu='bg-animate black-80 hover-bg-lightest-blue dib ph4-l f3 link glow black b pointer center';

const Navagation = () =>{
  return (
    <div className='pa3 pa4-ns' style={{display:'flex', justifyContent:'center', height:'fixed'}}> 
        <a className={menu} > Home</a>
        <a className={menu} href='../../#SkillSet'>Skill Set</a>
        <a className={menu} href='../../#Experience'> Experience</a>
        <a className={menu} href='../../#Portfolio'> Portfolio</a>
        <a className={menu} href='../../#Extracurricular'> Extracurricular</a>
        <a className={menu} href='../../#Contact'> Contact</a>
    
    </div>
    );
}

export default Navagation;
