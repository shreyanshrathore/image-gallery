// import React, { useState } from 'react'
// import './api.css'
// import CloseIcon from '@material-ui/icons/Close';
// import Before from '@material-ui/icons/NavigateBefore';
// import Next from '@material-ui/icons/NavigateNext';

// const FetchApi = () => {


//     const [data, setData] = useState([])
//     const apiGet = () => {
//         fetch('https://picsum.photos/v2/list?limit=100')
//             .then((response) => response.json())
//             .then((json) => {
//                 console.log(json)
//                 setData(json)
//             });
//     }
//     const [model, setModel] = useState(false);
//     const [src, setSrc] = useState('');

//     const getImag = (down) => {
//         setSrc(down.download_url);
//         setModel(true);
//     }

//     const closebutton = () => {
//         setModel(false);

//     }
//     let sign = '';
//     if (model === true) {
//         sign = 'model open'
//     }

//     else {
//         sign = 'model';
//     }
//     return (
//         <div>
//             <button onClick={apiGet}>Click Me!!!</button>
//             <br />

//             <div className={sign} >
//                 <img src={src} />
//                 {console.log(src)}
//                 <button className='before'>before</button>
//                 <CloseIcon onClick={closebutton} />
//                 <button className='next'>after</button>
//             </div>



//             <div className="gallery">
//                 {data.map((item, index) => {
//                     return (
//                         <div className="pics" key={index} onClick={() => getImag(item)}>
//                             <img src={item.download_url} alt="image-cnt" style={{ width: '100%' }} />
//                         </div>
//                     )
//                 })}
//             </div>

//         </div>
//     )
// }

// export default FetchApi