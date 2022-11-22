import React from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center text-white fixed-bottom' style={{ backgroundColor: '#003758' }}>
      <MDBContainer className='p-2'></MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: '#003758' }}>
        © 2022 Copyright: 
        <a className='text-white' href='https://mdbootstrap.com/'>
          Community Market
        </a>
      </div>
    </MDBFooter>
  );
}