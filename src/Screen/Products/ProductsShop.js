import React, { useState } from 'react'
import CommonTitle from '../../Components/CommonTitle'
import CommonCardShop from '../../Components/CommonCardShop'
import CommonInput from '../../Components/CommonInput'
import CommonSelect from '../../Components/CommonSelect'
import { useDispatch, useSelector } from 'react-redux'
import { apiCallFun } from '../../Redux/action/common'
import { ApisEndPoint } from '../../Utils/endPoints'
import { myLogger } from '../../Utils/const'
import CommonNoDataFound from '../../Components/CommonNoDataFound'

const quanityOption = [
    {
        label: <span>Title</span>,
        title: 'Title',
        options: [
            {
                value: 'desc',
                label: 'Desc',
            },
            {
                value: 'asc',
                label: 'Asc',
            },
        ],
    },

    {
        label: <span>Reset</span>,
        title: 'Reset',
        options: [
            {
                value: 'reset',
                label: 'Reset',
            },
        ],
    },
];

const ProductsShop = () => {
    const dispatch = useDispatch()
    const productsList = useSelector((state) => state?.common?.product_data);
    const [searchValue, setSearchValue] = useState("");

    const handleSearch = (e) => {
        setSearchValue(e)
        getProduct({ keyword: e })
    }

    const handleQuanity = (value) => {
        setSearchValue("")
        getProduct({ filterPrice: value })
    };

    const getProduct = ({ keyword, filterPrice }) => {
        let urlData = `${ApisEndPoint.productsUrl}`;
        if (keyword) {
            urlData += `/search?q=${keyword}`
        }
        else if (filterPrice == "reset") {
            urlData += ``
        }
        else if (filterPrice) {
            urlData += `?sortBy=title&order=${filterPrice}`
        }
        else {
            urlData += ``
        }
        myLogger("urlData", urlData);

        const callBackData = (response) => {
            if (response?.status) {
                myLogger("tanyaaaaaaaaaa", response?.data)
            } else {
            }
        }
        const url = urlData
        const method = `GET`
        const dispatchType = `PRODUCTS`

        dispatch(apiCallFun({ url, method, data: null, dispatchType, callBackData }))
    }

    return (
        <>
            <section className=''>
                <div className='d-flex justify-content-end mt-3 mx-2 gap-2'>
                    <CommonInput cssStyle={`input_style w-25`} placeholder={'Search products...'} onChange={(e) => handleSearch(e)} value={searchValue} allowClear />
                    <CommonSelect placeholder='Sort by' defaultValue={`Sort by`} cssStyle={`input_style`} mapData={quanityOption} inlineStyle={{ minWidth: '8rem' }} onChangeSelect={handleQuanity} />
                </div>
                <CommonTitle title={`Shop Collection`} cssStyle={`fs-1 py-5 mb-0 heading text-center`} />
                <div className='d-flex py-5 gap-5 px-2 flex-wrap cardBG justify-content-center'>
                    {
                        productsList?.products?.length > 0 ? <>
                            {
                                productsList?.products?.map((data) => {
                                    return (
                                        <>
                                            <CommonCardShop PrdouctData={data} />
                                        </>
                                    )
                                })
                            }
                        </>
                            :
                            <CommonNoDataFound />
                    }

                </div>
            </section>
        </>
    )
}
export default ProductsShop