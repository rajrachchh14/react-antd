import React from 'react';
import { Carousel } from 'antd';

function HeroSection() {
  const item = [
    {
      key: '1',
      title: 'one title',
      content: 'one content',
    },
    {
      key: '2',
      title: 'two title',
      content: 'two content',
    },
    {
      key: '3',
      title: 'three title',
      content: 'three content',
    },
  ];

  const contentStyle = {
    // height: '160px',
    color: '#fff',
    lineHeight: '660px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <div>
      <Carousel>
        {item.map((data, index) => {
          return (
            <div>
              {console.log(data.title)}
              <h3 style={contentStyle} key={index}>
                {data.title}
              </h3>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default HeroSection;
