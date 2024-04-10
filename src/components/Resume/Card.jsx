import React from 'react';

const Card = ({ icon, title, year, desc }) => (
  <div className="relative pl-10 pb-6">
    <div className="absolute left-0 top-0 h-full w-1 bg-blue-500"></div>
    <div className="flex items-center mb-2 pl-3">
      <i className={`mr-2 ${icon} text-red-500`}></i>
      <span className="text-sm text-gray-600">{year}</span>
    </div>
    <h3 className="text-lg font-semibold text-gray-800 mb-2 pl-3">{title}</h3>
    <p className='text-sm text-gray-600 mb-2 pl-3'>{desc}</p>
  </div>
);

export default Card;
