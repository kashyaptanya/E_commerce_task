import { Image } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { StaticImage } from '../Utils/Images';

const CommonImage = ({ src, height, width, preview = false, navData = "#", replace, cssStyle, style,divStyle }) => {
    const navigate = useNavigate();
    return (
        <div role='button' onClick={() => { navigate(navData, { replace: replace }) }} className={divStyle}>
            <Image src={src} height={height} width={width} preview={preview} fallback={StaticImage.logo} draggable={false} style={style} className={cssStyle} />
        </div>
    )
}

export default CommonImage