import React from 'react';
import { Input } from 'antd';
import { handleKeyPress } from '../Utils/const';

const CommonInput = ({ maxLength, placeholder, type = 'text', onChange, bordered, acceptType, value, allowClear = true, id, cssStyle, readOnly = false, inlineStyle, icon }) => {
    const handleChange = (e) => {
        onChange && onChange(e.target.value);
    };

    return (
        <Input
            maxLength={maxLength}
            readOnly={readOnly}
            id={id}
            value={value}
            allowClear={allowClear}
            placeholder={placeholder}
            type={type}
            onChange={handleChange}
            className={cssStyle}
            bordered={bordered}
            suffix={icon}
            style={inlineStyle}
            onKeyPress={acceptType === 'Number' ? handleKeyPress : undefined}
        />
    );
};

export default CommonInput;