import React, { useEffect, useRef, useState } from "react";

import { renderUserDetails, maskSensitiveFields } from "../helpers/helpers";

const PopupWindow = ({ user, onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [displayUser, setDisplayUser] = useState(maskSensitiveFields(user));

  const popupRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  const handleAuthentication = () => {
    setIsAuthenticated(true);
    setDisplayUser(user);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="bg-white rounded-lg p-8 m-auto mt-8 overflow-y-auto max-h-full relative"
        ref={popupRef}
      >
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          <span className="text-xl text-lightOrange font-bold">x</span>
        </button>
        <h1 className="font-bold text-xl text-lightOrange mb-4">
          User Details
        </h1>
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(renderUserDetails(displayUser)).map(
            ([key, value]) => (
              <div key={key} className="p-4 border border-darkBlue rounded">
                <h2 className="text-sm font-semibold text-gray-500 mb-2">
                  {key}
                </h2>
                <p className="text-lg">{value}</p>
              </div>
            )
          )}
        </div>
        {!isAuthenticated && (
          <button
            className="bg-lightOrange hover:bg-darkBlue transition duration-500 text-white font-bold py-2 px-4 rounded mt-4 mb-4"
            onClick={handleAuthentication}
          >
            Authenticate
          </button>
        )}
      </div>
    </div>
  );
};

export default PopupWindow;
