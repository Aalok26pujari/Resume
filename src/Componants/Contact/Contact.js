import React from 'react';
import aalok from './aalok.jpg';
import JSCOE from './JSCOE.jpg';
import SIU from './siu_logo.jpg';
import './Contact.css';
const Contact = () =>{
    return (
    <div>
    <p className='f1' id='Contact'>{'Contact'}</p>
        <div className='frm'>      
            <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                    <div className="tc">
                        <img src={aalok} className="br-100 h4 w4 dib ba b--black-05 pa2" alt='Aalok' title="Aalok"/>
                        <h1 className="f3 mb2">Aalok P.</h1>
                        <h2 className="f5 fw4 gray mt0">Developer & Project Manager</h2>
                        <h3 className='f5 gray dim'>(929)422-3731</h3>
                        <h3 className='f5 gray dim'>aalokpujari@yahoo.com</h3>
                    </div>
            </article>    
            <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                    <div className="tc">
                        <img src={SIU} className="br-100 h4 w4 dib ba b--black-05 pa2" alt='SIU' title="Schiller International University"/>
                        <h1 className="f3 mb2">Master's</h1>
                        <h2 className="f5 fw4 gray mt0">IT Management</h2>
                        <h3 className='f5 gray dim'>YEAR:2016</h3>
                        <h3 className='f5 gray dim'>8560 Ulmerton Rd, Largo, FL 33771</h3>
                    </div>
            </article>  
            <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                    <div className="tc">
                        <img src={JSCOE} className="br-100 h4 w4 dib ba b--black-05 pa2" alt='JSCOE' title="Jayawantrao Sawant College of Engineering"/>
                        <h1 className="f3 mb2">Bachelor's</h1>
                        <h2 className="f5 fw4 gray mt0">Computer Science</h2>
                        <h3 className='f5 gray dim'>YEAR:2014</h3>
                        <h3 className='f5 gray dim'>JSCOE,Handewadi Rd, Hadapsar, Pune, Maharashtra 411028, India</h3>
                    </div>
            </article>    
        </div>       
    </div>
    );
}

export default Contact;