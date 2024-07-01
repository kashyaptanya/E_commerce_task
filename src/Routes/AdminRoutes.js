import { Drawer, Layout } from 'antd'
import React, { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import NetConnection from '../Components/NetConnection'
import classes from './route.module.css'
import ImageComponent from '../Components/ImageComponent';
import { StaticImage } from '../Utils/Images';
/* Icons */
import { MenuOutlined } from '@ant-design/icons';
import { FaBagShopping } from "react-icons/fa6";
import CommonFooter from '../Components/CommonFooter';
import { apiCallFun, getFetchApi } from '../Redux/action/common';
import { ApisEndPoint } from '../Utils/endPoints';
import Toast from '../Utils/Toast';
import { useDispatch } from 'react-redux';
import { myLogger } from '../Utils/const';

const { Header, Content } = Layout;

const headerStyle = {
    height: 100,
    zIndex: 12,
    background: '#fff',
    display: "flex",
    alignItems: "center",
    boxShadow: "rgba(100, 100, 111, 0.4) 0px 7px 29px 0px"
};

const contentStyle = {
    // minHeight: '95vh',
    maxHeight: '95vh',
    overflowY: 'auto',
    overflowX: 'hidden',
    background: '#EEEDEB',
    color: '#000',
};

const AdminRoutes = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const ref = useRef(null);
    const [open, setOpen] = useState(false);
    const [netModal, setNetModal] = useState(false);
    const path = window.location?.pathname;

    useEffect(() => {
        if (ref.current) {
            ref.current.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }, [path]);

    useEffect(()=>{
        const callBackData = (response) => {
            if (response?.status) {
                myLogger("tanyaaaaaaaaaa",response?.data)
            } else {
              
            }
        }
        const url = ApisEndPoint.productsUrl
        const method = `GET`
        const dispatchType = `PRODUCTS`

        dispatch(apiCallFun({ url, method, data: null,dispatchType, callBackData }))
    },[])

    return (
        <Layout style={{ maxHeight: '100vh' }}>
            <Header style={headerStyle} className='commonPadding' >
                <div className='container-fluid' style={{ display: 'flex', justifyContent: 'space-between', height: 64, alignItems: 'center' }}>
                    <div onClick={() => { navigate('/') }} role='button' >
                        <ImageComponent src={StaticImage.logo} alt='logo' height={30} preview={false} />
                    </div>
                    <div className={classes?.lg__screen}>
                        <Link to={'/'} className={path == "/" ? 'path_link' : "all_menu"}>HOME</Link>
                        <Link to={'/productsShop'} className={path == "/productsShop" ? 'path_link' : "all_menu"}>PRODUCTS</Link>
                        <Link to={'/shop'} className={path == "/shop" ? 'path_link' : "all_menu"}><FaBagShopping /></Link>
                    </div>
                    <div onClick={() => setOpen(!open)} className={classes.menu__icon}>
                        <MenuOutlined className='text-white' />
                    </div>
                </div>
            </Header>
            <Layout>
                <Content style={contentStyle} ref={ref}>
                    <Outlet />
                    <CommonFooter />
                </Content>
            </Layout>
            <Drawer title="" placement="right" onClose={() => setOpen(!open)} open={open}>
                <div className='d-flex flex-column gap-4 lg__screen align-items-start' >
                    <Link to={'/'} className={path == "/" ? 'path_link text-dark' : "all_menu text-dark"}>HOME</Link>
                    <Link to={'/productsShop'} className={path == "/productsShop" ? 'path_link text-dark' : "all_menu text-dark"}>PRODUCTS</Link>
                </div>
            </Drawer>
            {netModal && <NetConnection netModal={netModal} setNetModal={setNetModal} />}
        </Layout>
    )
}
export default AdminRoutes
