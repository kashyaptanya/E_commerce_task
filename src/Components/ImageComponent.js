import { Image } from 'antd'
import React from 'react';
import { StaticImage } from '../Utils/Images';

const ImageComponent = ({ src, height = 50, width = '', preview = false, alt = "media",cssStyle,style}) => {
    return (
        <Image src={src} height={height} width={width} alt={alt} draggable={false} fallback={StaticImage.logo} preview={preview} className={cssStyle} style={style} />
    )
}

export default ImageComponent