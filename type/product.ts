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