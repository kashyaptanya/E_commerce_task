import { Typography } from 'antd'
import React from 'react'

const CommonTitle = ({ title = "Title", style, cssStyle, divStyle,htmlTag }) => {
    return (
        <div className={divStyle}>
            <Typography.Title className={`${cssStyle} headingStylee`} style={style}>{title}</Typography.Title>
        </div>

    )
}

export default CommonTitle