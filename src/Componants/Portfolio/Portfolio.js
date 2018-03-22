import React from 'react';
import bank from './Bank.png';
import exam from './exam.jpg';
import EMp from './Emp.JPG';
import Wdlt from './WDLT.JPG';
const Portfolio = () =>{
    return (
    <div>
        <p className='f1' id='Portfolio'>{'Project Portfolio'}</p>
            <section className="mw7 center avenir">
              <article className="bt bb b--black-10">
                 <div className="db pv4 ph3 ph0-l no-underline black dim">
                    <div className="flex flex-column flex-row-ns">
                        <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                            <img src={EMp} className="db" alt="Employee Payroll System"/>
                        </div>
                        <div className="w-100 w-60-ns pl3-ns">
                        <h1 className="f3 fw1 baskerville mt0 lh-title">Employee Payroll System</h1>
                            <p className="f6 f5-l lh-copy">
                                " In this project, we implement various functionality like generate payroll slip, leaves, documentation, Tax, Monthly salary. "
                            </p>
                            <p className="f6 lh-copy mv0">Year: 2016</p>
                        </div>
                    </div>
                </div>
              </article>
            </section>
            <section className="mw7 center avenir">
              <article className="bt bb b--black-10">
                 <div className="db pv4 ph3 ph0-l no-underline black dim">
                    <div className="flex flex-column flex-row-ns">
                        <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                            <img src={bank} className="db" alt="Bank Website"/>
                        </div>
                        <div className="w-100 w-60-ns pl3-ns">
                        <h1 className="f3 fw1 baskerville mt0 lh-title">Bank Website</h1>
                            <p className="f6 f5-l lh-copy">
                                " We implement some functionality like overdraft protection, JMS Java Messaging Service we created the various user interfaces using JSP, JavaScript, Bootstrap and CSS "
                            </p>
                            <p className="f6 lh-copy mv0">Year: 2015</p>
                        </div>
                    </div>
                </div>
              </article>
            </section>
            <section className="mw7 center avenir">
              <article className="bt bb b--black-10">
                 <div className="db pv4 ph3 ph0-l no-underline black dim">
                    <div className="flex flex-column flex-row-ns">
                        <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                            <img src={Wdlt} className="db" alt="WDLT"/>
                        </div>
                        <div className="w-100 w-60-ns pl3-ns">
                        <h1 className="f3 fw1 baskerville mt0 lh-title">WDLT: Wireless Device Location Tracing</h1>
                            <p className="f6 f5-l lh-copy">
                                " This is Real Time location tracking system for that we use java multithreading and cookie concept to select device MAC and IP address of device and multithreading is used to track of current location. "
                            </p>
                            <p className="f6 lh-copy mv0">Year: 2014</p>
                        </div>
                    </div>
                </div>
              </article>
            </section>
            <section className="mw7 center avenir">
              <article className="bt bb b--black-10">
                 <div className="db pv4 ph3 ph0-l no-underline black dim">
                    <div className="flex flex-column flex-row-ns">
                        <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                            <img src={exam} className="db" alt="Examination System"/>
                        </div>
                        <div className="w-100 w-60-ns pl3-ns">
                        <h1 className="f3 fw1 baskerville mt0 lh-title">Examination System</h1>
                            <p className="f6 f5-l lh-copy">
                                " Select random 10 questions from the database of 30 questions. Provide various functionality like view student score and exam reset option. "
                            </p>
                            <p className="f6 lh-copy mv0">Year: 2013</p>
                        </div>
                    </div>
                </div>
              </article>
            </section>
    </div>
    );
}

export default Portfolio;