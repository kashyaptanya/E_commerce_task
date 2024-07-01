import { Button } from 'antd';
import React from 'react'
import ImageComponent from './ImageComponent';

const ButtonComponent = ({ title, loading = false, media, height = 20, width = 20, type = "ghost", inlineStyle = undefined, cssStyle = undefined, onClick, block = false, mediaRight, htmlType ,prefixIcon}) => {
    const handleClick = () => {
        onClick && onClick({ title });
    };
    return (
        <Button loading={loading} type={type} block={block} className={`${cssStyle} d-flex gap-1 align-items-center justify-content-center buttonAnimatee`} style={inlineStyle} onClick={() => handleClick()} htmlType={htmlType && htmlType} icon={prefixIcon}>
            {media && <ImageComponent src={media} height={height} width={width} preview={false} navData={"#"} replace={false} />}
            {title && title}
            {mediaRight && <ImageComponent src={mediaRight} height={height} width={width} preview={false} navData={"#"} replace={false} />}
        </Button>
    )
}

export default ButtonComponent