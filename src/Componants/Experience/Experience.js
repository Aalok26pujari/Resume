import React from 'react';
import './Experience.css';
import p1 from './boot.png';
import p2 from './java.png';
import p3 from './Node.png';
import p4 from './react.png';
import p5 from './zoho.png';
import p6 from './tach.png';
import p7 from './h.png';
import p8 from './psql.png';
import p9 from './sql.png';
import p10 from './dbor.jpg';
import p11 from './Cyber.jpg';
const Experience = () =>{
  return (
        <div className='center'>
            <div className='center form shadow-5 pa3 continer'>
                <p className='f1' id='Experience'>{'Experience On'}</p>
                <div>
                    <img className='size dim grow shadow-5' alt='exp10' src={p10} />
                    <img className='size dim grow shadow-5' alt='exp11' src={p11}/>
                </div>
                <div>
                    <img className='size dim grow shadow-5' alt='exp1' src={p1} />
                    <img className='size dim grow shadow-5' alt='exp2' src={p2}/>
                    <img className='size dim grow shadow-5' alt='exp3' src={p3}/>
                </div>
                <div>
                    <img className='size dim grow shadow-5' alt='exp4' src={p4} />
                    <img className='size dim grow shadow-5' alt='exp5' src={p5}/>
                    <img className='size dim grow shadow-5' alt='exp6' src={p6}/>
                </div>
                <div>
                    <img className='size dim grow shadow-5' alt='exp7' src={p7} />
                    <img className='size dim grow shadow-5' alt='exp8' src={p8}/>
                    <img className='size dim grow shadow-5' alt='exp9' src={p9}/>
                </div><br/>
                <a href='https://www.linkedin.com/in/aalok-pujari-130923152/' className='center button buttonResume grow'>linkedin</a>
            </div>
        </div>
    );
}

export default Experience;