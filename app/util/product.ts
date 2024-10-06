const apiUrl = process.env.NEXT_PUBLIC_API_URL
const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN


export async function ShopifyStore<T>(query: string, variables?: Record<string, T>) {

    if (!apiUrl || !accessToken) {
        throw new Error("api url 或者acceston 无效")
    }



    try {
        const res = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Shopify-Storefront-Access-Token": accessToken
            },
            body: JSON.stringify({
                query,
                variables
            })
        })
        if (!res.ok){
            throw new Error(`请求错误${res.status}`)
        }

        return {
            status:200,
            body:await res.json()

        }



    } catch (error) {
        console.error("获取数据错误",(error as Error).message)
        return {
            status:500,
            error:(error as Error).message
        }
       
    }


}