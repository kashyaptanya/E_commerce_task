import React from 'react'
import CommonTitle from './CommonTitle'
import ButtonComponent from './ButtonComponent'
import ImageComponent from './ImageComponent'
import { StaticImage } from '../Utils/Images'
import { useNavigate } from 'react-router-dom'
import { myLogger } from '../Utils/const'
import { Rate } from 'antd'
import { ApisEndPoint } from '../Utils/endPoints'
import { apiCallFun } from '../Redux/action/common'
import { useDispatch } from 'react-redux'

const CommonCardShop = ({ PrdouctData }) => {
  myLogger("PrdouctData", PrdouctData)
  const { title, images, id, brand, rating, price, discountPercentage } = PrdouctData
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleProduct = () => {
    const callBackData = (response) => {
      if (response?.status) {
      } else {
      }
    }
    const url = `${ApisEndPoint.productsUrl}/${id}`
    const method = `GET`
    const dispatchType = `SINGLE_PRODUCTS`

    dispatch(apiCallFun({ url, method, data: null, dispatchType, callBackData }))
  }

  return (
    <div className=' d-flex gap-1  ' onClick={() => handleProduct()}>
      <div className='cardShop' onClick={() => navigate("/productDetail")} role='button'>
        <div style={{ height: "21rem" }}>
          <div className='text-center'>
            <ImageComponent src={images?.[0] ? images?.[0] : StaticImage.NoIMg} height={200} style={{ borderRadius: "18px" }} />
          </div>
          <CommonTitle title={title ? title : ""} cssStyle={`heading fs-5 mb-0`} style={{ width: "12rem" }} />
          <CommonTitle title={brand ? brand : ""} cssStyle={`desc fs-6`} />
          <div className='d-flex gap-2'>
            <CommonTitle title={price ? `$${price}` : ""} cssStyle={`desc fs-6`} /><CommonTitle title={discountPercentage ? `${discountPercentage}%` : ""} cssStyle={`heading text-dark fs-6`} />
          </div>
          <Rate value={rating ? rating : 0} disabled allowHalf />
        </div>
        <div className='d-flex  align-items-center justify-content-center my-3'>
          <ButtonComponent title={'ADD TO CART'} cssStyle={'commonButton'} inlineStyle={{ height: "2.2rem" }} />
        </div>
      </div>
    </div>
  )
}

export default CommonCardShop