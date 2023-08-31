import React from 'react';
import '../styles/Experience.css';
import Image from 'next/image';
import LeidosImage from '../public/assets/Leidos.jpeg';
import DirectSupplyImage from '../public/assets/DirectSupply.jpeg';
import MarquetteImage from '../public/assets/Marquette1.jpeg';
import FlexTradeImage from '../public/assets/FlexTrade.jpeg';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="main-container">
        <h1>Experience</h1>

        <div className="job">
          <Image src={FlexTradeImage} alt="FlexTrade" />
          <div className="job-content">
            <h2>Backend Software Engineer</h2>
            <p>FlexTrade, Milwaukee, Wisconsin, July 2023 - Present</p>
            <ul>
              <li>Developed high-performance trading algorithms to optimize hedge fund transactions on stock exchanges.</li>
              <li>Implemented real-time portfolio tracking features to provide actionable insights into asset performance.</li>
              <li>Ensured compliance with financial regulations by integrating a compliance-checking module into the trading software.</li>
            </ul>
          </div>
        </div>

        <div className="job">
          <Image src={MarquetteImage} alt="Marquette University" />
          <div className="job-content">
            <h2>Undergraduate Research Associate</h2>
            <p>Marquette University, Milwaukee, Wisconsin, Jan 2023 - May 2023</p>
            <ul>
              <li>Developed an interactive R application for predicting food shortage risks.</li>
              <li>Collaborated with researchers and data analysts.</li>
              <li>Devised a metadata crosswalk between Feeding America applications.</li>
            </ul>
          </div>
        </div>

        <div className="job">
          <Image src={DirectSupplyImage} alt="Direct Supply" />
          <div className="job-content">
            <h2>Software Engineer Intern</h2>
            <p>Direct Supply, Milwaukee, Wisconsin, May 2022 - May 2023</p>
            <ul>
              <li>Developed a supplier portal product refresh strategy utilizing AWS Lambda, DynamoDB, and JavaScript.</li>
              <li>Enhanced rapid development API framework.</li>
              <li>Created a bulk ETL process using AWS Glue and Python.</li>
            </ul>
          </div>
        </div>

        <div className="job">
          <Image src={LeidosImage} alt="Leidos" />
          <div className="job-content">
            <h2>Software Test Engineer Intern</h2>
            <p>Leidos, Eagan, Minnesota, May 2021 - Aug 2021</p>
            <ul>
              <li>Developed and executed highly effective automated unit testing programs written in C++.</li>
              <li>Conducted manual testing of the FAA’s EnRoute Automation Modernization system.</li>
              <li>Collaborated closely with cross-functional teams to ensure software quality.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
