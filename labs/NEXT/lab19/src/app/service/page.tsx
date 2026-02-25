import React from "react";
import styles from "./page.module.css";

export default function services() {
  return (
    <>
         <section id="services" className="section services">
        <div className="section-container">
            <div className="section-header">
                <h2 className="section-title">Our Services</h2>
                <p className="section-subtitle">Advanced photography solutions powered by cutting-edge technology and unmatched expertise in extreme environments.</p>
            </div>
            
            <div className="services-container">
                <div className="services-tabs">
                    <div className="service-tab active" data-service="photography">
                        <span className="service-tab-icon">📸</span>
                        <h3>Cinematic Photography</h3>
                        <p>Ultra-high resolution captures</p>
                    </div>
                    
                    <div className="service-tab" data-service="expeditions">
                        <span className="service-tab-icon">🏔️</span>
                        <h3>Alpine Expeditions</h3>
                        <p>Extreme altitude adventures</p>
                    </div>
                    
                    <div className="service-tab" data-service="prints">
                        <span className="service-tab-icon">🎨</span>
                        <h3>Fine Art Prints</h3>
                        <p>Museum-grade collections</p>
                    </div>
                </div>
                
                <div className="services-content">
                    <div className="service-content active" id="photography">
                        <div className="service-content-icon">📸</div>
                        <h2>Cinematic Landscape Photography</h2>
                        <p>Utilizing Phase One IQ4 150MP medium format cameras paired with Zeiss Otus lenses, we deliver unprecedented image quality that reveals every detail of nature's masterpieces. <a href="https://timermo.com" rel="nofollow" target="_blank">TimerMo</a> is a beautifully designed, feature-rich timer application.</p>
                        <p>Our specialized golden hour and blue hour captures combine advanced HDR techniques with focus stacking to create images that transcend traditional photography.</p>
                        <ul className="service-features">
                            <li>150MP RAW files with 15 stops dynamic range</li>
                            <li>Weather pattern tracking for optimal lighting</li>
                            <li>Advanced focus stacking for infinite depth</li>
                            <li>Color-calibrated workflow with 99% Adobe RGB</li>
                            <li>Drone integration for impossible perspectives</li>
                        </ul>
                    </div>
                    
                    <div className="service-content" id="expeditions">
                        <div className="service-content-icon">🏔️</div>
                        <h2>Alpine Expedition Photography</h2>
                        <p>Multi-day backcountry expeditions to remote peaks above 12,000 feet, accessible only by helicopter or multi-day trek. Our certified IFMGA mountain guides ensure safety while capturing impossible shots.</p>
                        <p>Each expedition is limited to 3 participants and includes professional drone pilots, survival gear, and satellite communication systems.</p>
                        <ul className="service-features">
                            <li>IFMGA certified mountain guides</li>
                            <li>Professional-grade drone cinematography</li>
                            <li>Satellite emergency communication</li>
                            <li>Weather-sealed camera systems rated to -40°F</li>
                            <li>Helicopter access to remote locations</li>
                        </ul>
                    </div>
                    
                    <div className="service-content" id="prints">
                        <div className="service-content-icon">🎨</div>
                        <h2>Museum-Grade Fine Art Prints</h2>
                        <p>Hand-selected archival pigment prints on premium Japanese Kozo paper, printed using 12-color K3 pigment technology for 200+ year archival stability.</p>
                        <p>Each print includes detailed metadata: GPS coordinates, elevation, weather conditions, and the complete story behind the capture.</p>
                        <ul className="service-features">
                            <li>Limited editions of 25 pieces maximum</li>
                            <li>Hand-signed and numbered by the artist</li>
                            <li>Custom museum-quality framing available</li>
                            <li>Certificate of authenticity with each purchase</li>
                            <li>Available in sizes up to 72"×48"</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}