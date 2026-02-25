import React from "react";
import styles from "./page.module.css";

export default function about(){
    return(
        <>
         
    <section id="about" className="section about">
        <div className="section-container">
            <div className="section-header">
                <h2 className="section-title">The Future of Nature Photography</h2>
                <p className="section-subtitle">Where cutting-edge technology meets artistic vision to document Earth's most extraordinary landscapes.</p>
            </div>
            
            <div className="about-grid">
                <div className="about-timeline">
                    <div className="timeline-line"></div>
                    
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-year">2009</div>
                        <div className="timeline-title">Genesis in the Rockies</div>
                        <div className="timeline-description">21-day solo expedition through Canadian Rockies. Documented climate change effects on alpine glaciers using early digital medium format systems.</div>
                    </div>
                    
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-year">2015</div>
                        <div className="timeline-title">National Geographic Recognition</div>
                        <div className="timeline-description">First photographer to capture Aurora Borealis from 14,000+ feet elevation. Featured on National Geographic cover for breakthrough high-altitude night photography.</div>
                    </div>
                    
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-year">2019</div>
                        <div className="timeline-title">Smithsonian Acquisition</div>
                        <div className="timeline-description">Three-piece collection acquired by Smithsonian Institution. Pioneered "patience photography" - waiting 72+ hours in extreme conditions for perfect conditions.</div>
                    </div>
                    
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-year">2024</div>
                        <div className="timeline-title">AI-Enhanced Workflow</div>
                        <div className="timeline-description">Revolutionary integration of AI weather prediction and machine learning for optimal capture timing. Reducing expedition failure rate to under 5%.</div>
                    </div>
                </div>
                
                <div className="about-tech">
                    <div className="tech-card">
                        <div className="tech-icon">🤖</div>
                        <div className="tech-title">AI Weather Intelligence</div>
                        <div className="tech-description">Proprietary algorithms analyze 15+ meteorological data sources to predict optimal shooting windows with 94% accuracy up to 72 hours in advance.</div>
                    </div>
                    
                    <div className="tech-card">
                        <div className="tech-icon">🛰️</div>
                        <div className="tech-title">Satellite Reconnaissance</div>
                        <div className="tech-description">Real-time satellite imagery integration allows dynamic route planning and hazard avoidance during expeditions to previously inaccessible locations.</div>
                    </div>
                    
                    <div className="tech-card">
                        <div className="tech-icon">🎯</div>
                        <div className="tech-title">Precision Capture Systems</div>
                        <div className="tech-description">Sub-millimeter camera positioning using GPS-guided stabilization systems ensures perfect composition even in 80+ mph mountain winds.</div>
                    </div>
                </div>
            </div>

            <div className="stats-futuristic">
                <div className="stat-futuristic">
                    <h4>47</h4>
                    <p>National Parks</p>
                </div>
                <div className="stat-futuristic">
                    <h4>2.3M</h4>
                    <p>Miles Traveled</p>
                </div>
                <div className="stat-futuristic">
                    <h4>-40°F</h4>
                    <p>Coldest Shoot</p>
                </div>
                <div className="stat-futuristic">
                    <h4>99.7%</h4>
                    <p>Client Satisfaction</p>
                </div>
            </div>
        </div>
    </section>
</>
    )
}