import React from 'react';
import ReactDOM from 'react-dom';
const Portal = ({ children: renderComponent, desId }) => {
  return ReactDOM.createPortal(renderComponent, document.getElementById(desId));
};

export default Portal;
