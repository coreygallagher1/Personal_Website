// Header.js
import dynamic from "next/dynamic";
import Image from 'next/image'
import CoreyImage from '../public/assets/Corey1.JPG'
import '../styles/global.css'

const Header = () => {
    return (
      <header className="header">
        <div className="header-content">
        <h1 style={{ color: 'white', textShadow: '3px 3px 12px black' }}>Corey Gallagher</h1>
          <Image src={CoreyImage} alt="Your Image" width={300} height={300} />
          <p style={{ color: 'white',textShadow: '3px 3px 12px black' }} >Backend Software Engineer at FlexTrade</p>
          <p style={{ color: 'white', textShadow: '3px 3px 12px black'  }}>Milwaukee</p>
        </div>
      </header>
    )
  }
  export default dynamic (() => Promise.resolve(Header), {ssr: false});
  