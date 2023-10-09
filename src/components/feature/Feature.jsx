import React from 'react';
import { Link } from 'react-router-dom';
import './feature.scss';

const Feature = (props) => {
const {item} = props;
return (
  <div className="img-box">
    <img src={item.img} alt=" " />
    <div className="content">
        <Link to="/nft-item">{item.title}</Link>
    </div>
  </div>);
}

export default Feature;
