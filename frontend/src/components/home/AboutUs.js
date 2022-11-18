import React from 'react';
import './aboutUs.css';
import Navbar from './Navbar.js';
import './aboutUs2.css'
import imageLeft from './public_Speaking3.jpeg';
import AllTeam from './AllTeam.js';
import whyUs1 from '../../assets/whyUsConfidence.png'
import whyUs2 from '../../assets/expressImpress.png'
import whyUs3 from '../../assets/whyUsLeadership.png'
import whyUs4 from '../../assets/whyUsThreeWings.png'
import whyUs5 from '../../assets/whyUSTechnocrat.png'
import OurStory from './OurStory';

const AboutUs = () => {
    return (
        <div className='about-body'>

            <div className="header">
                <h1 style={{ color: 'white' }}>OUR STORY</h1>
                <h1 style={{ color: 'white' }}>META ACADEMICS CELL</h1>

                <p style={{ color: 'whitesmoke' }}>MAC is a Cell comprising of THREE WINGS. <br /> To know more about the wings, scroll down.</p><br /><br />
                <h5 style={{ color: 'white' }}>OUR WINGS</h5>
            </div>

            <div className="row1-container">
                <div className="box box-down cyan">
                    <h2 className='about-header'>Writers' Wing</h2>
                    <p>Monitors activity to identify project roadblocks</p>
                    <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="" />
                </div>

                <div className="box red">
                    <h2 className='about-header'>SWORD</h2>
                    <p>Scans our talent network to create the optimal team for your project</p>
                    <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt="" />
                </div>

                <div className="box box-down blue">
                    <h2 className='about-header'>Book Lovers' Wing</h2>
                    <p>Uses data from past projects to provide better delivery estimates</p>
                    <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt="" />
                </div>
            </div>

            <div className="row2-container">
                <h1 className='row2-head' >How we started?</h1>

                <OurStory />

                {/* <div className="blog-card">
                    <div className="meta">
                        <div className="photo" style={{ backgroundImage: "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)" }}></div>
                        <ul className="details">
                            <li className="author"><a href="jfbjds">John Doe</a></li>
                            <li className="date">Aug. 24, 2015</li>
                            <li className="tags">
                                <ul>
                                    <li><a href="fvfg">Learn</a></li>
                                    <li><a href="dfsgdf">Code</a></li>
                                    <li><a href="fdgdf">HTML</a></li>
                                    <li><a href="sfdgs">CSS</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="description">
                        <h1>Formation of the Cell</h1>
                        <h2>Opening a door to the future</h2>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                    </div>
                </div>
                <div className="blog-card alt">
                    <div className="meta">
                        <div className="photo" style={{ backgroundImage: "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg)" }}></div>
                        <ul className="details">
                            <li className="author"><a href="dasv">Jane Doe</a></li>
                            <li className="date">July. 15, 2015</li>
                            <li className="tags">
                                <ul>
                                    <li><a href="dsavds">Learn</a></li>
                                    <li><a href="dvassd">Code</a></li>
                                    <li><a href="dasfsd">JavaScript</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="description">
                        <h1>Our First Event</h1>
                        <h2>Java is not the same as JavaScript</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Ad eum dolorum architecto obcaecati enim dicta praesentium,
                            quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                        
                    </div>
                </div>
                <div className="blog-card">
                    <div className="meta">
                        <div className="photo" style={{
                            backgroundImage:
                                "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)"
                        }}
                        >
                        </div>
                        <ul className="details">
                            <li className="author"><a href="jfbjds">John Doe</a></li>
                            <li className="date">Aug. 24, 2015</li>
                            <li className="tags">
                                <ul>
                                    <li><a href="fvfg">Learn</a></li>
                                    <li><a href="dfsgdf">Code</a></li>
                                    <li><a href="fdgdf">HTML</a></li>
                                    <li><a href="sfdgs">CSS</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="description">
                        <h1>Open Mic 1.0</h1>
                        <h2>Opening a door to the future</h2>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                    </div>
                </div>

                <div className="blog-card alt">
                    <div className="meta">
                        <div className="photo" style={{ backgroundImage: "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg)" }}></div>
                        <ul className="details">
                            <li className="author"><a href="dasv">Jane Doe</a></li>
                            <li className="date">July. 15, 2015</li>
                            <li className="tags">
                                <ul>
                                    <li><a href="dsavds">Learn</a></li>
                                    <li><a href="dvassd">Code</a></li>
                                    <li><a href="dasfsd">JavaScript</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="description">
                        <h1>Foundation of MUN</h1>
                        <h2>Java is not the same as JavaScript</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                       
                    </div>
                </div> */}


            </div>

            <div className='row3-container'>

                <h1 className='row3-header'>WHY US?</h1>

                <div className="why-us-outer-container">
                    <div className="why-us-row">
                        <div className="why-us-full-content-container">
                            <div className="bullet-numbering">
                                <div className="why-us-image-holder">
                                    <img src={whyUs1} alt="" />
                                </div>
                            </div>
                            <div className="why-us-content">
                                It enhances the confidence and self esteem.
                            </div>
                            <div className="shape-container"></div>
                        </div>

                        <div className="why-us-full-content-container">
                            <div className="bullet-numbering">
                                <div className="why-us-image-holder">
                                    <img src={whyUs2} alt="" />
                                </div>
                            </div>
                            <div className="why-us-content">
                                A place where words are spoken to express and not to only impress.
                            </div>
                            <div className="shape-container"></div>
                        </div>
                    </div>
                    <div className="why-us-row">
                        <div className="why-us-full-content-container">


                            <div className="bullet-numbering">
                                <div className="why-us-image-holder">
                                    <img src={whyUs3} alt="" />
                                </div>
                            </div>
                            <div className="why-us-content">
                                The team which believes that everyone can be instilled with great leadership skills.
                            </div>
                            <div className="shape-container"></div>
                        </div>
                        <div className="why-us-full-content-container">


                            <div className="bullet-numbering">
                                <div className="why-us-image-holder">
                                    <img src={whyUs4} alt="" />
                                </div>
                            </div>
                            <div className="why-us-content">
                                The three wings focus on the three most important skills which every leader of tomorrow needs.
                            </div>
                            <div className="shape-container"></div>
                        </div>
                    </div>
                    <div className="why-us-row">
                        <div className="why-us-full-content-container">


                            <div className="bullet-numbering">
                                <div className="why-us-image-holder">
                                    <img src={whyUs5} alt="" />
                                </div>
                            </div>
                            <div className="why-us-content">
                                Gives the necessary exposure before opening to the technocrat world.
                            </div>
                            <div className="shape-container"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div>

                <AllTeam />
            </div>
        </div>


    )
}

export default AboutUs