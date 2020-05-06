import React from 'react';

const Review = () => {
  return (
    <div className='row'>
      <div className='col-sm-12'>
        <h6>Scan for review the Restaurant or Click the link below</h6>
        <img src={require('../img/qr.png')} alt='' width='300px' />
      </div>
      <div className='col-sm-12'>
        <a href='https://docs.google.com/forms/d/e/1FAIpQLSdSNucoTkMIh0up5MOc0_MakOMtsDkUJC86V5E6sECUDiAp_Q/viewform'>
          Review Link
        </a>
      </div>
    </div>
  );
};

export default Review;
