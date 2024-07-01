import React from 'react'
import ImageComponent from './ImageComponent'
import { StaticImage } from '../Utils/Images'

function CommonNoDataFound({ height = 320 }) {
  return (
    <div className='text-center m-auto'>
      <ImageComponent src={StaticImage.noData} height={height} />
    </div>
  )
}

export default CommonNoDataFound