// Header.js
import Image from 'next/image'
import CoreyImage from '../public/assets/Corey1.JPG'
import '../styles/global.css'
import '../styles/Header.css'
import InstagramImage from '../public/assets/instagram.png'
import LinkedInImage from '../public/assets/linkedin.png'
import GitHubImage from '../public/assets/github.png'
import ResumeImage from '../public/assets/resume.png'

const Header = () => {
    return (
      <header className="header">
        <div className="header-content">
        <h1 style={{ color: 'white', textShadow: '3px 3px 12px black' }}>Corey Gallagher</h1>
          <Image src={CoreyImage} alt="Your Image" width={350} height={350} />
          <p style={{ color: 'white',textShadow: '3px 3px 12px black' }} >Backend Software Engineer at FlexTrade</p>
          <p style={{ color: 'white', textShadow: '3px 3px 12px black'  }}>Milwaukee</p>
        </div>
        <div className="social-icons-header">
          
          <a href="https://github.com/coreygallagher1?tab=repositories" target="_blank" rel="noopener noreferrer">
            <Image src={GitHubImage} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/coreygallagher/" target="_blank" rel="noopener noreferrer">
            <Image src={LinkedInImage} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/coreygallagher1/" target="_blank" rel="noopener noreferrer">
            <Image src={InstagramImage} alt="Instagram" />
          </a>
          <a href="https://coreygallagher.dev/resume/" target="_blank" rel="noopener noreferrer">
            <Image src={ResumeImage} alt="Instagram" />
          </a>
        </div>
      </header>
    )
  }
  export default Header;
  