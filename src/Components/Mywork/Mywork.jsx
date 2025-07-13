import React from 'react';
import './Mywork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data.js';
import arrow_icon from '../../assets/arrow_icon.svg';

const Mywork = () => {
  return (
    <div id='work' className='mywork'>
      <div className='mywork-title'>
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt='pattern' />
      </div>

      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <a 
              key={index} 
              href={work.w_link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mywork-item"
            >
              <img src={work.w_img} alt={work.w_name} />
            </a>
          );
        })}
      </div>

      <div className="mywork-showmore">
        <p>Show more</p>
        <img src={arrow_icon} alt='arrow icon' />
      </div>
    </div>
  );
};

export default Mywork;
