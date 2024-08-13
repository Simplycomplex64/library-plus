import React from "react";
import Square from "../components/Square";
import Pill from "../components/Pill";
import Banners from "../components/Banners";
import Cards from "../components/Cards";
import Testimonials from "../components/Testimonials";
import TestimonialsNopic from "../components/Testimonials-nopic";

function App() {
  const handleSquareClick = ({ shape, variant }) => {
    console.log(`Shape: ${shape}, Color: ${variant}`);
  };

  const handlePillClick = ({ shape, variant }) => {
    console.log(`Shape: ${shape}, Color: ${variant}`);
  };

  return (
    <>
      <h1 className="badgesH1">Badges</h1>
      <div className="main-badge-container">
        <Square onSquareClick={handleSquareClick}>R Badge</Square>
        <br />
        <Pill onPillClick={handlePillClick}>P Badge</Pill>
      </div>

      {/* banner section */}

      <h1 className="bannerH1">Banners</h1>
      <h3 className="bannerH1-h3">multi lines</h3>
      <br />
      <div className="banner-container-container">
        <Banners variant="default" img="" alt="">
          <h4>Default test</h4>
          <p>This was just to test what the default would look like.</p>
        </Banners>
        <Banners variant="green" img="./success.png" alt="success">
          <h4>Congratulation!</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
        </Banners>
        <Banners variant="yellow" img="./warning.png" alt="success">
          <h4>Attention</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</p>
        </Banners>
        <Banners variant="red" img="./danger.png" alt="success">
          <h4>There is a problem with your app</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</p>
        </Banners>
        <Banners variant="blue" img="./neutral.png" alt="success">
          <h4>Update available</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
        </Banners>
      </div>

        <h1 className="bannerH1">Banners</h1>
        <h3 className="bannerH1-h3">single line</h3>
        <br />
      <div className="banner-container">
        <Banners variant="green" img="./success.png" alt="success">
          <h4>Congratulation!</h4>
        </Banners>
        <Banners variant="yellow" img="./warning.png" alt="success">
          <h4>Attention</h4>
        </Banners>
        <Banners variant="red" img="./danger.png" alt="success">
          <h4>There is a problem with your app</h4>
        </Banners>
        <Banners variant="blue" img="./neutral.png" alt="success">
          <h4>Update available</h4>
        </Banners>
      </div>

      {/* cards start here */}

      <h1 className="cardH1">Cards</h1>
      <div className="card-container-container">
        <Cards variant="indigo" img="./Cloud-upload.png" alt="cloud image">
          <h3>Easy Deployment</h3>
          <p>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
        </Cards>

        <Cards variant="red" img="./success.png" alt="success icon">
          <h3>Testing reusability</h3>
          <p>I am so new to this but i am trying my best to understand it. Practice makes perfect. No?</p>
        </Cards>

        <Cards variant="blue" img="./warning.png" alt="warning icon">
          <h3>Just one more test</h3>
          <p>I have a bad habit of double or even triple checking sometime. Well is it a baad habit???</p>
        </Cards>
      </div>

      {/* testimonials start here */}

      <h1 className="testimonialsH1">Testimonials</h1>
      <h3 className="testimonialsH1-h3">with picture</h3>
      <div className="testimonials-container-container">
        <Testimonials
          img="./me.jpg"
          alt="an image of James smilling at the camera."
          testiIcon="./testimonials-icon.png"
          testiAlt="testimonials icon"
          testiText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue.
                            Amet feugiat est integer dolor auctor adipiscing nunc urna, sit."
          testiName="Joachim James R."
          testiLocation="SimplyComplex, 64" />

        <TestimonialsNopic img="./testimonials-nopic.png" alt="" name="Anonymous" location="no data">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue.
          Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
        </TestimonialsNopic>

        <Testimonials
          img="./elmo.jpg"
          alt="an image of Elmo at work."
          testiIcon="./testimonials-icon.png"
          testiAlt="testimonials icon"
          testiText="This is my song la la la la elmo's song, la la la la elmo's song :-)."
          testiName="Elmo"
          testiLocation="Sesame street" />
      </div>
    </>
  );
}

export default App;
