import { Image, Modal } from 'antd';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import noNetIcon from '../Assets/noNet.png';

const NetConnection = ({ netModal, setNetModal }) => {
    const activeNet = useSelector((state) => state?.common?.activeNet);
    useEffect(() => {
        if (activeNet) {
            setNetModal(setNetModal)
        } else {
            setNetModal(!setNetModal)
        }
    }, []);
    return (
        <div>
            <Modal centered width={800} open={netModal} footer={null} onCancel={() => setNetModal(!netModal)} >
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <Image id="non-selectable" height={350} width={350} src={noNetIcon} preview={false} />
                    <h2 className="text-danger" ><b><i>Internet Connectivity Lost... <span className="text-primary">Please check!</span></i></b></h2>
                </div>
            </Modal>
        </div>
    )
}

export default NetConnection