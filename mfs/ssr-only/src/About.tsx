import * as React from 'react';

const About: React.FC = () => {
  console.log('Rendering the about page; SECRET=', process.env.MY_SECRET);

  return (
    <>
      <h1>About</h1>
    </>
  );
};

export default About;
