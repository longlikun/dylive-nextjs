import { IProductList } from '@/type/product'
import Link from 'next/link'
import React from 'react'


type props = {
    productList: IProductList
}
const ProductList = ({ productList }: props) => {
    console.log("producList in com", productList)
    return (
  
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">商品列表</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">商品特色:ote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably have not heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div>
    <div className="flex flex-wrap -m-4">
    

      {productList.data.products.edges.map((product)=>(
          <div className="xl:w-1/4 md:w-1/2 p-4"  key={product.node.id}>
                <div className="bg-gray-100 p-6 rounded-lg" >
                    {product.node.images.edges.map((item)=>(
                        <p key={item.node.url}>
         <img className="h-40 rounded w-full object-cover object-center mb-6" src={item.node.url} alt="content"/>
         </p>
                    ))}
       
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{product.node.handle}</h3>
                <Link href={`/products/${product.node.handle}`}>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{product.node.handle}</h2>
                </Link>
                {}
                <div className=''>${product.node.priceRange.minVariantPrice.amount}</div>
                <p className="leading-relaxed text-base">{product.node.description}</p>
              </div>
              </div>
      ))}

    



    </div>
  </div>
</section>
        
    )
}

export default ProductList