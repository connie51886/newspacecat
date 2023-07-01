import './App.css';
import React , {  useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import NewPage from './NewPage';
import MobileComponent from './MobileComponent';
import { isMobile } from 'react-device-detect';

function App() {
  let componentToRender;

  if (isMobile) {
    componentToRender = <MobileComponent />;
  } else {
    componentToRender = (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newpage" element={<NewPage />} />
        </Routes>
      </Router>
    );
  }

  return <div>{componentToRender}</div>;
}

  

  function Home() {

  //desktop begins
  const backgroundImage = {
    backgroundImage: `url('./images/galaxy2.png')`, 
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',

    width: '100vw',
    minHeight: '100vh',
    margin: '0',
    padding: '0',
    overflow: 'hidden',
  }

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
  
    position: 'relative',
    justifyContent: 'center',
    minHeight: '100vh',
    width: 'fit-content',
    zIndex: '8',
  };

  const catStyle = {
    width: '800px',// Adjust the width as desired
    height: '800px',// Adjust the height as desired
    marginLeft: '100px',
    marginTop: '100px',

    marginRight: '-50px', // Adjust the negative margin to control the overlap
    zIndex: '2', // Set a higher z-index for the image to appear on top
    animation: 'hoverAnimation 3s ease-in-out infinite',
  };

  const bubbleStyle = {
    width: '400px',// Adjust the width as desired
    height: '200px',// Adjust the height as desired
    marginLeft: '-200px',
    marginRight: '0px', // Add any desired margin
    marginTop: '-440px',
  };

  const boxStyle = {

    position: 'relative',
    backgroundImage: `url('./images/realBox.png')`,
    width: '600px',
    height: '400px',
    marginLeft: '-500px',
    marginBottom: '-220px',
 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };



  //button magic

  const [button1Hover, setButton1Hover] = useState(false);
  const [button2Hover, setButton2Hover] = useState(false);

  const buttonContainerStyle = {
 
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '148px',
    marginBottom: '100px',
    justifyContent: 'center',
   
    width: 'fit-content', // Set width to fit the content
    position: 'relative', // Add this line
  
  };

  const buttonStyle1 = {
    flex: '1',
   

    padding: '10px',
    backgroundColor: button1Hover ? 'black' : '#1EC7FA',
    color: button1Hover ? 'white' : 'black', // Change text color on hover


    border: '2px solid black',
    borderRadius: '4px',
    cursor: 'pointer',
    
    width: '320px',
    height: '64px',

    fontSize: '24px',
    fontFamily: 'Space mono',
    zIndex:'5',
  };

  const buttonStyle2 = {
    backgroundColor: button2Hover ? 'black' : 'white',
    color: button2Hover ? 'white' : 'black',

    padding: '10px',
    border: '2px solid black',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '20px',


    width: '320px',
    height: '64px',
   
    fontSize: '24px',
    fontFamily: 'Space mono',

  };

  const buttonWrapperStyle = {

    cursor: 'pointer',
  };
  
  const handleButton2Click = () => {
    window.open('https://www.youtube.com/watch?v=qjf472A83N8&ab_channel=Science', '_blank');
  };

    return (
      <div style={backgroundImage}>
        <div style={containerStyle}>
          <img src="./images/cat.png" style={catStyle} alt="cat" />
          <img src="./images/dialogue.png" style={bubbleStyle} alt="dialogue" />
            <div style={boxStyle}>
              <div style={buttonContainerStyle} >
                  <Link to="/newpage" style={{ width: '100%' }} >
                  <div style={buttonWrapperStyle} >
                        <button 
                        style={buttonStyle1}
                        onMouseEnter={() => setButton1Hover(true)}
                        onMouseLeave={() => setButton1Hover(false)}> 
                         
                          🚀 Find out
                        </button>
                  </div>
            </Link>
            
                <div style={buttonWrapperStyle}
                        onClick={handleButton2Click}>
                <button style={buttonStyle2}
                  onMouseEnter={() => setButton2Hover(true)}
                  onMouseLeave={() => setButton2Hover(false)}>
                  No, I like gravity
                  </button>
              </div>
        </div>
        </div>
        </div>
      </div>
    );
  }

export default App;
