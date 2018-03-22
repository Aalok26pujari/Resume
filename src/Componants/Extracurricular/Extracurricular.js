import React from 'react';
import Drawing from './mybest.jpg';
import soccer from './soccer.jpg';
import Sketing from './Sketing.JPG';
import volleyball from './volleyball.JPG';
import Chess from './Chess.JPG';
import './Extracurricular.css';

const Extracurricular = () =>{
    return (
    <div>
        <p className='f1'id='Extracurricular'>{'Extracurricular'}</p>
            <article className='unchi'>
              <h2 className="f3 fw4 pa3 mv0">Albums</h2>
              <div className="cf pa2">
                <div className="fl w-50 w-25-m w-20-l pa2 dim shadow-3">
                  <img src={Drawing} alt="Drawing" className="w-100 db outline black-10 grow unchi"/>
                    <dl className="mt2 f6 lh-copy">
                      <dt className="clip">Title</dt>
                      <dd className="ml0 black truncate w-100">Drawing</dd>
                    </dl>
                </div>
                <div className="fl w-50 w-25-m w-20-l pa2 dim shadow-3">
                  <img src={soccer} alt="Soccer" className="w-100 db outline black-10 grow unchi"/>
                    <dl className="mt2 f6 lh-copy">
                      <dt className="clip">Title</dt>
                      <dd className="ml0 black truncate w-100">Soccer</dd>
                    </dl>
                </div>
                <div className="fl w-50 w-25-m w-20-l pa2 dim shadow-3">
                  <img src={Sketing} alt="Sketing" className="w-100 db outline black-10 grow unchi"/>
                    <dl className="mt2 f6 lh-copy">
                      <dt className="clip">Title</dt>
                      <dd className="ml0 black truncate w-100">Sketing</dd>                     
                    </dl>
                </div>
                <div className="fl w-50 w-25-m w-20-l pa2 dim shadow-3">
                  <img src={volleyball} alt="volleyball" className="w-100 db outline black-10 grow unchi"/>
                    <dl className="mt2 f6 lh-copy">
                      <dt className="clip">Title</dt>
                      <dd className="ml0 black truncate w-100">Volleyball</dd>
                    </dl>
                </div>
                <div className="fl w-50 w-25-m w-20-l pa2 dim shadow-3">
                  <img src={Chess} alt="Chess" className='w-100 db outline black-10 grow unchi'/>
                    <dl className="mt2 f6 lh-copy">
                      <dt className="clip">Title</dt>
                      <dd className="ml0 black truncate w-100">Chess</dd>
                    </dl>
                </div>
              </div>
            </article>
    </div>
    );
}

export default Extracurricular;