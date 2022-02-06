import React from 'react';
import { Carousel, Button } from 'antd';

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
    lineHeight: '640px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <>
      <Carousel>
        {item.map((data, index) => {
          return (
            <div className="container-fluid">
              <div className="content">
                <p style={contentStyle}> {data.title}</p>
              </div>
              {/* <Button type="danger">Primary Button</Button> */}
            </div>
          );
        })}
      </Carousel>
    </>
  );
}

export default HeroSection;
