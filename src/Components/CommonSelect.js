import { Select } from "antd"
import { FaCaretDown } from "react-icons/fa6";

const CommonSelect = ({ defaultValue, mapData, placeholder = "Select", inlineStyle, cssStyle, onChangeSelect }) => {

    const handleSelectChange = (searchValue) => {
        onChangeSelect && onChangeSelect(searchValue);
    };
    return (
        <Select  onChange={(e) => handleSelectChange(e)} defaultValue={defaultValue} defaultActiveFirstOption={!defaultValue} className={cssStyle} style={inlineStyle} suffixIcon={<FaCaretDown style={{ fontSize: "1.25rem",color:'#344767' }} />} placeholder={placeholder}
        options={mapData}
         />
    )
}
export default CommonSelect