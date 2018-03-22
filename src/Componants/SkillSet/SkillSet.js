import React from 'react';
import './SkillSet.css';


const SkillSet = () =>{
  return (
       <div className='center'>
            <div className='center form shadow-5 pa3 continer'>
                <p className='f1' id="SkillSet">{'Skill Set'}</p>
                <table className='tables br4'cellspacing='10'cellpading='10'>
                    <tr className='grow'>   
                        <td>HTML5</td>
                        <td className='containers'><div className='html skills'>95%</div></td>
                    </tr>
                    <tr className='grow'>
                        <td>JavaScript</td>
                        <td className='containers'><div className='javaScript skills'>75%</div></td>
                    </tr>
                    <tr className='grow'>
                        <td>CSS</td>
                        <td className='containers'><div className='css skills'>65%</div></td>
                    </tr>
                    <tr className='grow'>
                        <td>React.JS</td>
                        <td className='containers'><div className='reactJs skills'>85%</div></td>
                    </tr>    
                    <tr className='grow'>
                        <td>Java</td>
                        <td className='containers'><div className='java skills'>85%</div></td>
                    </tr>
                    <tr className='grow'>
                        <td>Database</td>
                        <td className='containers'><div className='dataBase skills'>85%</div></td>
                    </tr>
                    <tr className='grow'>
                        <td>Algorithm</td>
                        <td className='containers'><div className='algorithm skills'>80%</div></td>
                    </tr>
                    <tr className='grow'>
                        <td>AI</td>
                        <td className='containers'><div className='ai skills'>60%</div></td>
                    </tr>
                    <tr className='grow'>
                        <td>Testing</td>
                        <td className='containers'><div className='testing skills'>75%</div></td>
                    </tr>
                    <tr className='grow'>
                        <td>UML Diagrams</td>
                        <td className='containers'><div className='uml skills'>80%</div></td>
                    </tr>    
                </table>
            </div>
        </div>
    );
}

export default SkillSet;