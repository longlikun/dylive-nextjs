import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductList from '../components/ProductList'
import { ShopifyStore } from '../util/product'


const ProductListPage = async () => {

    const query = `
    query producList {
  products(first: 8) {
    edges {
      node {
        id
        handle
        title
        description
        images(first: 1) {
          edges {
            node {
              url
              altText
            }
          }
        }
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
      }
    }
  }
}
    `


    const products = await ShopifyStore(query)
    // console.log(products.body)

    const productList = products.body

    return (

        <>
            <Header></Header>
            <ProductList productList={productList}></ProductList>

            <Footer></Footer>
        </>

    )
}

export default ProductListPage