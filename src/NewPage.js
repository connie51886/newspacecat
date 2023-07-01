import React , { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function NewPage() {
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

  const frameStyle = {
    backgroundImage: `url('./images/gameframe.png')`,
    width: '772px', 
    height: '542px', 

    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };




  const numberStyle = {
    fontFamily: 'Space mono',
    fontSize: '88px',
    color: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    position: 'relative',
  };

  const instructionStyle = {
    fontFamily: 'Space mono',
    fontSize: '24px',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  };

//timer styling
   const countdownContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    
    width: '100%',
    height: '100%',
    position: 'relative',
    margin: '96px',
    zIndex: 1, 
  };

//timer code
  const [count, setCount] = useState(3);
  const [showText, setShowText] = useState(false);
  const [showContainer, setShowContainer] = useState(true);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 3) {
          setShowText(true);
          return prevCount - 1;
        } else if (prevCount === 1) {
          clearInterval(timer);
          setTimeout(() => {
            setShowText(false);
            setShowContainer(false);
            setShowVideo(true); // Show the video
          }, 2000);
          return 'Go!';
        } else if (typeof prevCount === 'string') {
          return prevCount;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []); 
 
 


  
  //box styles

  const blueBoxStyle = {
    backgroundColor: 'rgba(30, 199, 250, 0.5)',
    margin: '112px 40px 40px',

    width: '707px',
    height: '400px',

    border: '1px solid black',
    borderRadius: '4px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',

   
    zIndex: 0,
  };

  


  const backButtonStyle = {
    position: 'absolute',
    top: '36px',
    left: '38px',
    color: 'white',
    fontSize: '16px',
    textDecoration: 'underline',
    cursor: 'pointer',

  
    fontFamily: 'Space mono',

  };


  return (
    <div style={backgroundImage}>
      <div style={frameStyle}>
          <Link to="/" style={backButtonStyle}>
            RETURN TO LAUNCHPAD
          </Link>

          <div id="blueBox" style={blueBoxStyle}>
    
          {showContainer && (
            <div style={countdownContainerStyle}>
              <h1 style={numberStyle}>{count}</h1>
              {count !== 'Go!' && (
                <p style={instructionStyle}>The story unfolds...</p>
              )}          
            </div>
              )}


          {showVideo && (
            <iframe width="707" height="400" src="https://www.youtube.com/embed/v-tpmvGRoyw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          )}
          </div>
      
      </div>
    </div>
);

}

export default NewPage;