import { IProductList } from '@/type/product'
import React from 'react'


type props = {
    productList: IProductList
}
const ProductList = ({ productList }: props) => {
    console.log("producList in com", productList)
    return (
        // <section>
        //     <div className="mx-auto mt-10 max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        //         <header>
        //             <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">商品列表</h2>

        //             <p className="mt-4 max-w-md text-gray-500">
        //                 商品特色
        //             </p>
        //         </header>

        //         <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        //             {productList.data.products.edges.map((product) => (
        //                 <li key={product.node.id}>
        //                     <a href="#" className="group block overflow-hidden">
        //                         {
        //                             product.node.images.edges.map((item) => (
        //                                 <p key={item.node.altText}>
        //                                     <img
        //                                         src={item.node.url}

        //                                         alt=""
        //                                         className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
        //                                     />
        //                                 </p>

        //                             ))
        //                         }


        //                         <div className="relative bg-white pt-3">
        //                             <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
        //                                 {product.node.handle}
        //                             </h3>

        //                             <p className="mt-2">
        //                                 <span className="sr-only"> Regular Price </span>

        //                                 <span className="tracking-wider text-gray-900"> {product.node.priceRange.minVariantPrice.amount} </span>
        //                             </p>
        //                         </div>
        //                     </a>
        //                 </li>

        //             ))}


        //         </ul>
        //     </div>
        // </section>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably have not heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">

      {productList.data.products.edges.map((product)=>(
                <div className="bg-gray-100 p-6 rounded-lg" key={product.node.id} >
                    {product.node.images.edges.map((item)=>(
                        <p key={item.node.url}>
         <img className="h-40 rounded w-full object-cover object-center mb-6" src={item.node.url} alt="content"/>
         </p>
                    ))}
       
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{product.node.handle}</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
                <p className="leading-relaxed text-base">{product.node.description}</p>
              </div>

      ))}

      </div>



    </div>
  </div>
</section>
        
    )
}

export default ProductList