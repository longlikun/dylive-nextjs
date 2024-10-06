interface IProduct {
    id: string; // Shopify-specific product ID
    handle: string; // Unique product identifier within a Shopify store
    title: string; // Product name
    description: string; // Detailed product description
    images: {
      edges: Array<{
        node: {
          url: string; // Image URL
          altText: string | null; // Alternative text for accessibility
        };
      }>;
    };
    priceRange: {
      minVariantPrice: {
        amount: string; // Price value as a string
        currencyCode: string; // Currency code (e.g., "CNY")
      };
    };
  }
  
  export interface IProductList {
    data:{
        products: {
            edges: Array<{
              node: IProduct;
            }>;
          };

    }
   
  }


// 商品详情类型

  interface ShopifyProductPrice {
    amount: string; // Price value as a string
  }
  
  interface ShopifyProductImage {
    url: string; // Image URL
    altText: string | null; // Alternative text for accessibility
  }
  
  interface ShopifyProductVariant {
    id: string; // Shopify-specific variant ID
    title: string; // Variant title (often "Default Title" for primary variants)
    image?: ShopifyProductImage; // Optional image for the variant
  }
  
  interface ShopifyProduct {
    id: string; // Shopify-specific product ID
    handle: string; // Unique product identifier within a Shopify store
    title: string; // Product name
    description: string; // Detailed product description
    images: {
      edges: Array<{ node: ShopifyProductImage }>;
    };
    priceRange: {
      minVariantPrice: ShopifyProductPrice;
    };
    variants: {
      edges: Array<{ node: ShopifyProductVariant }>;
    };
  }
  
  export interface IProductDetail {
    data: {
      product: ShopifyProduct;
    };
  }
  