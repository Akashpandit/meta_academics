import React from 'react';
import './aboutUs.css';
import Navbar from './Navbar.js';
import './aboutUs2.css'
import imageLeft from './public_Speaking3.jpeg';
import AllTeam from './AllTeam';
import { Link } from 'react-router-dom';


const AboutUs = () => {
    return (
        <div className='about-body'>

            <div class="header">
                <Navbar />
                <h1 style={{ color: 'white' }}>OUR STORY</h1>
                <h1 style={{ color: 'white' }}>META ACADEMICS CELL</h1>

                <p style={{ color: 'whitesmoke' }}>MAC is a Cell comprising of THREE WINGS. <br /> To know more about the wings, scroll down.</p><br /><br />
                <h5 style={{ color: 'white' }}>OUR WINGS</h5>
            </div>

            <div class="row1-container">
                <div class="box box-down cyan">
                    <h2 className='about-header'>Writers' Wing</h2>
                    <p>Monitors activity to identify project roadblocks</p> 
                    <Link to="/writerwing"><img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="" /></Link>
                </div>

                <div class="box red">
                    <h2 className='about-header'>SWORD</h2>
                    <p>Scans our talent network to create the optimal team for your project</p>
                    <Link to="/sword"><img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt="" /></Link>  
                </div>

                <div class="box box-down blue">
                    <h2 className='about-header'>Book Lovers' Wing</h2>
                    <p>Uses data from past projects to provide better delivery estimates</p>
                    <Link to="/readerwing"><img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt="" /></Link>
                </div>
            </div>

            <div class="row2-container">
                <h1 className='row2-head' >How we started?</h1>

                <div class="blog-card">
                    <div class="meta">
                        <div class="photo" style={{ backgroundImage: "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)" }}></div>
                        <ul class="details">
                            <li class="author"><a href="jfbjds">John Doe</a></li>
                            <li class="date">Aug. 24, 2015</li>
                            <li class="tags">
                                <ul>
                                    <li><a href="fvfg">Learn</a></li>
                                    <li><a href="dfsgdf">Code</a></li>
                                    <li><a href="fdgdf">HTML</a></li>
                                    <li><a href="sfdgs">CSS</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="description">
                        <h1>Formation of the Cell</h1>
                        <h2>Opening a door to the future</h2>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                    </div>
                </div>
                <div class="blog-card alt">
                    <div class="meta">
                        <div class="photo" style={{ backgroundImage: "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg)" }}></div>
                        <ul class="details">
                            <li class="author"><a href="dasv">Jane Doe</a></li>
                            <li class="date">July. 15, 2015</li>
                            <li class="tags">
                                <ul>
                                    <li><a href="dsavds">Learn</a></li>
                                    <li><a href="dvassd">Code</a></li>
                                    <li><a href="dasfsd">JavaScript</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="description">
                        <h1>Our First Event</h1>
                        <h2>Java is not the same as JavaScript</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Ad eum dolorum architecto obcaecati enim dicta praesentium,
                            quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                        {/* <p class="read-more">
                        <a href="fdvsdv">Read More</a>
                    </p> */}
                    </div>
                </div>
                <div class="blog-card">
                    <div class="meta">
                        <div class="photo" style={{
                            backgroundImage:
                                "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)"
                        }}
                        >
                        </div>
                        <ul class="details">
                            <li class="author"><a href="jfbjds">John Doe</a></li>
                            <li class="date">Aug. 24, 2015</li>
                            <li class="tags">
                                <ul>
                                    <li><a href="fvfg">Learn</a></li>
                                    <li><a href="dfsgdf">Code</a></li>
                                    <li><a href="fdgdf">HTML</a></li>
                                    <li><a href="sfdgs">CSS</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="description">
                        <h1>Open Mic 1.0</h1>
                        <h2>Opening a door to the future</h2>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                    </div>
                </div>

                <div class="blog-card alt">
                    <div class="meta">
                        <div class="photo" style={{ backgroundImage: "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg)" }}></div>
                        <ul class="details">
                            <li class="author"><a href="dasv">Jane Doe</a></li>
                            <li class="date">July. 15, 2015</li>
                            <li class="tags">
                                <ul>
                                    <li><a href="dsavds">Learn</a></li>
                                    <li><a href="dvassd">Code</a></li>
                                    <li><a href="dasfsd">JavaScript</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="description">
                        <h1>Foundation of MUN</h1>
                        <h2>Java is not the same as JavaScript</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                        {/* <p class="read-more">
                        <a href="fdvsdv">Read More</a>
                    </p> */}
                    </div>
                </div>


            </div>

            <div className='row3-container'>

                <h1 className='row3-header'>WHY US?</h1>

                <div className='left-side'>

                    <img src={imageLeft} />

                </div>
                <div className='right-side'>

                    <div className='tips'>
                        <div className='num'>1</div>
                        <p className='info'>It enhances the confidence and self esteem.</p>
                    </div>
                    <div className='tips'><div className='num'>2</div><p className='info'>It enhances the confidence and self esteem.</p></div>
                    <div className='tips'><div className='num'>3</div><p className='info'>It enhances the confidence and self esteem.</p></div>
                    <div className='tips'><div className='num'>4</div><p className='info'>It enhances the confidence and self esteem.</p></div>
                    <div className='tips'><div className='num'>5</div><p className='info'>It enhances the confidence and self esteem.</p></div>



                </div>


            </div>


       

        <div className='row4-container'>
            <h1>HEY</h1>
            <AllTeam />
        </div>
                        
  
    </div>
  )

    

}

export default AboutUs