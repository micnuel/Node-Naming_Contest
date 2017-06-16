import React from 'react';

const Header = ({headerMessage}) =>{
  return(
    <h2 className ='Header text-center'>
    {headerMessage}
    </h2>
  );
};

Header.propTypes ={
  headerMessage: React.PropTypes.string,
};

// Header.defaultProps= {
//   headerMessage:'Hello from default',
// };

export default Header;
