import React from 'react';
import './brand.scss';
import { Link } from 'react-router-dom';
import bgImg1 from '../../assets/media/bg-4.b06f904d58e0c5c06ac7.jpg';
import img1 from '../../assets/GifImage/Armour3.gif';

const Brand = () => {
  const data = {
      id: 1,
      title: 'Elixer nft collectionS for everyone',
      desc : 'Explore our exclusive NFT collection, where art meets blockchain. Discover unique digital assets and join the future of ownership',
      bgImg: bgImg1,
      img : img1
    };

  return (
    <section className='slider'>
      <div className={`box-slider ${data.classAction}`}>
        <img className='bg-slider' src={data.bgImg} alt="elixer" />
        <div className="box-slider__main">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-md-12">
                        <div className="content-box">
                            <h1 className="title">{data.title}</h1>
                            <p className="sub-title">{data.desc}</p>
                            <div className="wrap-btn">
                                <Link to="/contact" className="tf-button-st2 btn-effect"><span className="effect">connect wallet</span></Link>
                                <button to="#" className="tf-button btn-effect popup-youtube">
                                    <span className="boder-fade"></span>                                     
                                    <span className="effect">watch video</span>
                                </button>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <div className="image">
                            <img src={data.img} alt="elixer" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Brand;
