import React from 'react';
const Alert = ({ onConfirm, title, message }) => {

  return (
      <div
          className="h-screen w-full fixed z-5 bg-black bg-opacity-30"
          onClick={() => onConfirm()}
      >
          <div className="flex flex-col bg-gray-700 w-96 h-44 rounded-md shadow-xl absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-3/4">
              <h4 className="text-white font-medium text-xl bg-gray-900 px-5 py-4 rounded-t-md">{title}</h4>
              <p className="text-white text-base pl-5 py-4">{message}</p>
              <div className="flex self-end mt-auto pr-5 pb-4">
                  <button
                      className="btn-yellow-sm"
                      onClick={() => onConfirm()}
                  >確定</button>
              </div>
          </div>
      </div>
  );
};

export default Alert;