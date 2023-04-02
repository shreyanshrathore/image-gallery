import React, { useState } from 'react';
import './api.css';
import CloseIcon from '@material-ui/icons/Close';
import Before from '@material-ui/icons/NavigateBefore';
import Next from '@material-ui/icons/NavigateNext';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const FetchApi = () => {
    const[home , setHome] = useState(false)
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // add currentIndex state
  const apiGet = () => {
    fetch('https://picsum.photos/v2/list?limit=100')
      .then((response) => response.json())
      .then((json) => {
        console.log(json); 
        setData(json);
      });
      setHome(true);
  };

  const [model, setModel] = useState(false);
  const [src, setSrc] = useState('');

  const closebutton = () => {
    setModel(false);
    setCurrentIndex(0); // reset currentIndex when closing the model
  };
  let sign = '';
  if (model === true) {
    sign = 'model open';
  } else {
    sign = 'model';
  }

  const getImage = (down, index) => {
    setSrc(down);
    setCurrentIndex(index); // set currentIndex when opening the model
    setModel(true);
  };

  const getNextImage = () => {
    setCurrentIndex((currentIndex + 1) ); // increment currentIndex to display the next image
    setSrc(data[currentIndex + 1]);
  };

  const getPrevImage = () =>{
    if(currentIndex>0){
    setCurrentIndex((currentIndex - 1) ); // increment currentIndex to display the next image
    setSrc(data[currentIndex - 1]);
    }
  }

  return (
    <div>
      <button onClick={apiGet} className={home? "click open" : "click"}>Gallery</button>
      <br />

      <div className={sign}>
        <Before className='before' onClick={getPrevImage} style={{ fontSize: 60 }}/>
        <LazyLoadImage src={src.download_url} loading="lazy" />
        <CloseIcon onClick={closebutton} className='closebutton'/>
        <Next className='next' onClick={getNextImage} style={{ fontSize: 60 }}/>

      </div>

      <div className='gallery'>
        {data.map((item, index) => {
          return (
            <div
              className='pics'
              key={index}
              onClick={() => getImage(item, index)}
            >
              <LazyLoadImage
                loading="lazy"
                effect = "blur"
                src={item.download_url}
                alt='image-cnt'
                style={{ width: '100%' }}

              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FetchApi;
