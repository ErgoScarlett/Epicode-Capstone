import React, { useState, useEffect } from 'react';
import { Alert as BootstrapAlert } from 'react-bootstrap';

const Alert = ({ message, variant }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (message) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  if (!show) {
    return null;
  }

  return <BootstrapAlert variant={variant}>{message}</BootstrapAlert>;
};

export default Alert;

