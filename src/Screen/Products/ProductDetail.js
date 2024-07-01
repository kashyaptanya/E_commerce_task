import React, { useEffect, useState } from 'react'
import CommonTitle from '../../Components/CommonTitle'
import { Col, Rate, Row, Skeleton } from 'antd'
import { StaticImage } from '../../Utils/Images';
import ImageComponent from '../../Components/ImageComponent';
import CommonNoDataFound from '../../Components/CommonNoDataFound';
import moment from 'moment';
import { useSelector } from 'react-redux';

const ProductDetail = () => {
    const [getLoading, setGetLoading] = useState(true)

    const productsData = useSelector((state) => state?.common?.single_product);
    const { title, images, category, brand, description, rating, tags, price, discountPercentage, returnPolicy, reviews } = productsData
    useEffect(() => {
        setTimeout(() => {
            setGetLoading(false)
        }, 500);

    }, [])
console.log("brand",brand);

    return (
        <>
            <section className=''>
                <CommonTitle title={`Product Detail`} cssStyle={`fs-1 py-5 mb-0 heading text-center`} />
                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                        <div className='cardBG text-center d-flex align-items-center justify-content-center' style={{ minHeight: '475px' }}>
                            {
                                getLoading ? <Skeleton.Image active /> :
                                    <ImageComponent src={images ? images?.[0] : StaticImage.NoIMg} height={500} />
                            }
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                        <div className='cardBG p-4' style={{ minHeight: '500px' }}>
                            {
                                getLoading ? <Skeleton active /> :
                                    <>
                                        <div className='d-flex gap-3'>
                                            <CommonTitle title={brand ? brand : ""} cssStyle={`heading fs-5 mb-0 `} style={{ fontStyle: "italic" }} />
                                            <CommonTitle title={title ? title : ""} cssStyle={`heading text-dark fs-5 mb-0 FW`} />
                                        </div>
                                        <CommonTitle title={description ? description : ""} cssStyle={`desc fs-6 mb-3`} />
                                        <CommonTitle title={category ? category : ""} cssStyle={`heading fs-6 mb-1`} />
                                        <div className='d-flex gap-3 mb-3'>

                                            <CommonTitle title={price ? `Price : $${price}` : ""} cssStyle={`heading fs-6 mb-1`} />
                                            {
                                                discountPercentage &&
                                                <CommonTitle title={`${discountPercentage}% OFF!`} cssStyle={`heading fs-6 ss text-white px-2`} />}
                                        </div>
                                        <Rate disabled allowHalf defaultValue={rating ? rating : 0} />
                                        <div className='d-flex gap-2 mb-3'>
                                            {
                                                tags?.length > 0 ? <>
                                                    {
                                                        tags?.map((data) => {
                                                            return (
                                                                <CommonTitle title={`#${data}`} cssStyle={`desc fs-6 mb-0`} style={{ fontWeight: "600" }} />
                                                            )
                                                        })
                                                    }
                                                </>
                                                    :
                                                    ""
                                            }

                                        </div>
                                        <CommonTitle title={`Return`} cssStyle={`heading fs-6 mb-0`} />
                                        <CommonTitle title={returnPolicy} cssStyle={`desc fs-6`} />
                                    </>
                            }
                        </div>
                    </Col>
                </Row>
            </section>
            <section className='bg-white mt-4' >
                <div className='commonPadding py-1'>
                    <CommonTitle title={`Reviews`} cssStyle={`heading my-5`} />
                    <Row gutter={[26, 46]} align={'middle'} className='mb-5'>
                        {
                            getLoading ?
                                <Skeleton active={true}
                                    avatar
                                    paragraph={{
                                        rows: 1,
                                    }}
                                />
                                :
                                <>
                                    {reviews?.length > 0 ? <>
                                        {
                                            reviews?.map((data) => {
                                                return (
                                                    <>
                                                        <Col xs={24} sm={24} md={12} lg={10} xl={10}>
                                                            <div className='d-flex gap-3 align-items-center'>
                                                                <div>
                                                                    <CommonTitle title={data?.reviewerName ? data?.reviewerName : ""} cssStyle={`heading text-dark  fs-6`} style={{ textTransform: "capitalize" }} />
                                                                    <CommonTitle title={data?.reviewerEmail ? data?.reviewerEmail : ""} cssStyle={`heading text-dark  fs-6`} style={{ textTransform: "capitalize" }} />
                                                                    <CommonTitle title={moment(data?.date).format("DD MMM, YYYY")} cssStyle={`Explore fs-6`} />

                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col xs={24} sm={24} md={14} lg={14} xl={14}>
                                                            <Rate value={data?.rating} disabled allowHalf />
                                                            <CommonTitle title={data?.comment} cssStyle={`desc fs-6`} />
                                                        </Col>
                                                    </>
                                                )
                                            })
                                        }
                                    </>
                                        :
                                        <>

                                            <div className='m-auto'>
                                                <CommonNoDataFound />
                                            </div>
                                        </>
                                    }
                                </>
                        }

                    </Row>
                </div>
            </section>
        </>
    )
}
export default ProductDetail
