import React from 'react';
import './Header.css';
import { useSelector } from 'react-redux';
const Header = () => {
    const result=useSelector((state)=>state.cardData);
        console.warn("data in header",result);
  return (
    <div className="header">
      <div className="card-div">
        <span>{result.length}</span>
        <img
          src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
          alt=""
        />
      </div>
    </div>
  )
}

export default Header;
