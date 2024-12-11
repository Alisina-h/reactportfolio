import React from "react";
import './Hero.css';  // CSS-fil för styling
import img2 from '../../assets/img/bil2hero (1).jpg';

const Hero = () => {
    return (
        <section id="home" className="hero-container">
            <div className="hero-content">
                <h2>Web Developer</h2>
                <p>Välkommen till min digitala lekplats! Här blandar jag kod, kreativitet och lite kaos för att skapa projekt som både fungerar och ser bra ut. Kolla runt och se vad jag kan göra – och tveka inte att höra av dig om du gillar vad du ser!,</p>
            </div>

            <div className="hero-img">
                <div>
                    <div className="tech-icon">
                        {/* React Ikon från FontAwesome */}
                        <span className="fab fa-react img" style={{fontSize: '4rem', color: '#61DBFB'}}></span> {/* React ikon */}
                    </div>
                    <img src={img2} alt="Image 2" className="img imgstor" />
                </div>

                <div className="tech-icons">
                    {/* HTML5 Ikon från FontAwesome */}
                    <div className="tech-icon">
                        <span className="fab fa-html5 img" style={{fontSize: '4rem', color: '#F7DF1E'}}></span> {/* HTML5 ikon */}
                    </div>

                    {/* JavaScript Ikon från FontAwesome */}
                    <div className="tech-icon">
                        <span className="fab fa-js img" style={{fontSize: '4rem', color: '#F7DF1E'}}></span> {/* JavaScript ikon */}
                    </div>

                    {/* CSS Ikon från FontAwesome */}
                    <div className="tech-icon">
                        <span className="fab fa-css3-alt img" style={{fontSize: '4rem', color: '#2965F1'}}></span> {/* CSS ikon */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
