import React, { useEffect, useRef } from 'react';

const FocusableInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <input 
      ref={inputRef} 
      type="text" 
      placeholder="Type something..."
    />
  );
};

export default FocusableInput;
