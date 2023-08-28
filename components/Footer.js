// Footer.js
import Image from 'next/image'
import dynamic from "next/dynamic";
import '../styles/global.css'
import InstagramImage from '../public/assets/instagram.png'
import LinkedInImage from '../public/assets/linkedin.png'
import GitHubImage from '../public/assets/github.png'


const Footer = () => {
    return (
      <footer className="footer">
        <div className="social-icons">
          <a href="https://github.com/coreygallagher1?tab=repositories" target="_blank" rel="noopener noreferrer">
            <Image src={GitHubImage} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/coreygallagher/" target="_blank" rel="noopener noreferrer">
            <Image src={LinkedInImage} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/coreygallagher1/" target="_blank" rel="noopener noreferrer">
            <Image src={InstagramImage} alt="Instagram" />
          </a>
        </div>
        <p style={{ color: 'white',textShadow: '3px 3px 12px black' }}>© 2023 Corey Gallagher</p>
      </footer>
    )
  }
  
  export default dynamic (() => Promise.resolve(Footer), {ssr: false});
  