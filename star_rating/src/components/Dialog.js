import React, { useState } from 'react';
const Dialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      // Clicked on the overlay outside the dialog
      handleClose();
    }
  };

  return (
    <div>
      <button className='btn' onClick={handleOpen}>Open Dialog</button>

      {isOpen && (
        <div className="dialog-overlay" onClick={handleOverlayClick}>
          <div className="dialog-content">
            <div className="spinner">
              <img alt='icon' 
                    src='https://cdn.dribbble.com/users/2442115/screenshots/8699490/dec-01-2019_19-16-16.gif'
                    />
            </div>
            <p onClick={handleClose} className='close'>Close</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dialog;