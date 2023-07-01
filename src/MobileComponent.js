import React from 'react';


function MobileComponent() {
    const containerStyle = {
        backgroundColor: '#1EC7FA',
        fontSize: '12px',
        fontFamily: 'Space mono',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // Set the height of the container to fill the viewport
      };
  
    return (
      <div style={containerStyle}>
         <h2>🐱 adventures on desktop only! </h2>
      </div>
    );
  }
  
  export default MobileComponent;