import React from 'react';
const linke='https://s3.amazonaws.com/academia.edu.documents/33835638/2._Manage-WDLT_Wireless-Aalok_Pujari.pdf?AWSAccessKeyId=AKIAIWOWYYGZ2Y53UL3A&Expires=1521564882&Signature=tXTxMPWpjwSAKVF0zcHdeKkSdCE%3D&response-content-disposition=inline%3B%20filename%3DWDLT_WIRELESS_DEVICE_LOCATION_TRACING.pdf';
const Publication = () =>{
  return (
    <div>
        <p className='f1'>Publication</p>
        <h2 className='i'>Research paper</h2>
        <div>
            <h3 className='i u link dim'><a href={linke} className='dark-red'>WDLT:</a> Wireless Device Location Tracing</h3>
        </div>
    </div>
    );
}

export default Publication;