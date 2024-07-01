import React, { useEffect } from 'react'
import ImageComponent from './ImageComponent'
import { Link } from 'react-router-dom';
import { ImInstagram } from "react-icons/im";
import { FaSquareTwitter } from 'react-icons/fa6';
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { Footer } from 'antd/es/layout/layout';
import CommonTitle from './CommonTitle';
import { StaticImage } from '../Utils/Images';

const CommonFooter = () => {

    function handleClick() {
        window.scrollTo(0, 0)
    }
    const path = window.location;
    useEffect(() => {
        handleClick()
    }, [{ ...path }])

    return (
        <section >
            <Footer className='bgFooter'>
                <div className='container d-flex mt-3 justify-content-between'>
                    <div>
                        <CommonTitle title={`FASHION`} cssStyle={`fs-6  heading text-white`} />
                        <CommonTitle title={`Copyright © 2024 - All Rights Reserved - E-Commerce`} cssStyle={`fs-6  desc`} />
                    </div>
                    <div className='text-end'>
                        <CommonTitle title={` Help `} cssStyle={`fs-6  heading text-white`} />
                        <CommonTitle title={`Shipping & Return`} cssStyle={`fs-6  desc`} />
                        <div className='footer_icon d-flex gap-5 justify-content-center  pt-3 flex-wrap' >
                            <a href={`https://x.com/login?mx=2`} target='__blank'> <FaSquareTwitter role='button' /></a>
                            <a href={`https://www.instagram.com/`} target='__blank'> <ImInstagram role='button' /></a>
                            <a href={`https://www.facebook.com/`} target='__blank'> <FaFacebookSquare role='button' /></a>
                            <a href={`https://www.youtube.com/`} target='__blank'> <IoLogoYoutube role='button' /></a>
                        </div>
                    </div>
                </div>
            </Footer>
        </section>
    )
}

export default CommonFooter