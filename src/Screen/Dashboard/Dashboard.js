import { Col, Row } from 'antd'
import React from 'react'
import ImageComponent from '../../Components/ImageComponent'
import { StaticImage } from "../../Utils/Images"
import CommonTitle from '../../Components/CommonTitle'
import ButtonComponent from '../../Components/ButtonComponent'
import CommonCardShop from '../../Components/CommonCardShop'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Dashboard = () => {
    const navigate = useNavigate()
    const productsList = useSelector((state) => state?.common?.product_data);
    const topRatedProducts = productsList?.products
        ?.filter(product => product?.rating >= 1 && product.rating <= 5)
        ?.sort((a, b) => b.rating - a.rating)
        ?.slice(0, 4);

    return (
        <>
            <section>
                <Row>
                    <Col sm={24} md={24} lg={10} xl={10}>
                        <ImageComponent src={StaticImage.banner} height={`auto`} />
                    </Col>
                    <Col sm={24} md={24} lg={14} xl={14} className='banner_bg d-flex align-items-center px-5'>
                        <div className='maindiv'>
                            <CommonTitle title={`Buy 2 products and get free shipping`} cssStyle={`fs-5 mb-0`} />
                            <CommonTitle title={`Best Shop `} cssStyle={`mb-1 shop_head`} />
                            <CommonTitle title={`Online `} cssStyle={`shop_head`} />
                            <ButtonComponent title={'Shop Now'} cssStyle={`button_common`} />
                        </div>
                    </Col>
                </Row>
            </section>
            <section className=''>
                <CommonTitle title={`View Tranding Products`} cssStyle={`fs-3 py-5 heading text-center`} />
                <div className='d-flex py-5 px-2 flex-wrap gap-5 cardBG justify-content-center'>
                    {
                        topRatedProducts?.map((data) => {
                            return (
                                <CommonCardShop PrdouctData={data} />
                            )
                        })
                    }
                </div>
                <ButtonComponent title={'View All'} cssStyle={`button_common m-auto my-5`} onClick={() => navigate("/productsShop")} />
            </section>
        </>
    )
}
export default Dashboard