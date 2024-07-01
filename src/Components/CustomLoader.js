import React from 'react';
import { Image } from 'antd';
import { StaticImage } from '../Utils/Images';

const CustomLoader = () => {
    return (
        <div style={{ height: '100vh', display: 'grid', placeItems: 'center', backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundSize:'cover'}}>
            <div className='text-center'>
                <Image preview={false} src={StaticImage.logo} height={140}  />
                <h2 className='mt-4 text-white' style={{ textAlign: 'center' }}>Please wait...!</h2>
            </div>
        </div>
    )
}

export default CustomLoader