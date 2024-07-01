import React from 'react'
import { Puff } from 'react-loader-spinner'

const CustomLoader = () => {
    return (
        <div style={{ display: 'grid', placeItems: 'center', minHeight: '60vh' }}>
            <Puff
                visible={true}
                height="80"
                width="80"
                color="#C10000"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}

export default CustomLoader