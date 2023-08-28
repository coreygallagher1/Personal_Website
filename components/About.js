// About.js

import Image from 'next/image'
import dynamic from "next/dynamic";
import CoreyImage from '../public/assets/Corey1.JPG'

const About = () => {
  return (
    <section id="about" className="section">
      <div className="main-container">
        <h1>About Me</h1>
        <div className="about-info">
          <div className="about-text">
            <p>
              <strong>Hi, I'm Corey,</strong> a Full Stack Software Engineer currently working at FlexTrade Systems.
            </p>
            <p>
              I specialize in creating <em>efficient</em> and <em>scalable</em> web applications.
            </p>
            <p>
              Having graduated from Marquette University, I hold degrees in both <span className="highlight">Computer Science</span> and <span className="highlight">Computational Mathematics</span>.
            </p>
            <p>
              When I'm not coding, I'm usually working out, hiking, or planning my next big project. I'm passionate about finance, investing, and self-improvement.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default dynamic (() => Promise.resolve(About), {ssr: false});
