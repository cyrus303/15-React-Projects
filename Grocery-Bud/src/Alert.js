import React, { useEffect } from 'react';

const Alert = ({ type, msg, removeAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      //calls the same show alter fucntion in app.js but default is set to false hence it dissapers after 3 seconds
      removeAlert();
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
