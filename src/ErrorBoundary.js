import { Button, Watermark } from 'antd';
import React, { useEffect, useState } from 'react';
import { StaticImage } from './Utils/Images';

const ErrorBoundary = ({ children }) => {
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const errorHandler = (error, info) => {
            console.error('Error:', error, info);
            setHasError(true);
        };
        window.addEventListener('error', errorHandler);
        return () => {  window.removeEventListener('error', errorHandler);  };
    }, []);

    return hasError ? (
        <Watermark style={{ display: 'grid', placeItems: 'center', minHeight: '100vh' }}   image={StaticImage.logo}>
            <div className='text-center rounded bg-danger p-5' style={{ opacity: 0.8, zIndex:99 }}>
                <h2 className='text-white'>Something went wrong.</h2>
                <Button className='bg-primary text-white' type='text' onClick={() => window.location.reload()}>Reload</Button>
            </div>
        </Watermark>
    ) : (
        children
    );
};

export default ErrorBoundary;
