import React from 'react';

function FakeWebsiteFooter() {
  const footerStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    width: '100%',
    padding: '10px', // Adjust padding as needed
    color: 'white', // Text color
    textAlign: 'center', // Center-align the content
  };

  return (
    <footer style={footerStyle}>
      <p>This website is for demonstration purposes only and is not real.<br/>
      Please do not put any real payment info<br/>
      YOU WILL GET HACKED
      </p>
    </footer>
  );
}

export default FakeWebsiteFooter;