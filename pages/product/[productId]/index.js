import {useRouter} from 'next/router'

function ProductDetail() {

    const router = useRouter()
    const productId = router.query.productId //(same as dymnamic page name)
    return <h1>Product Detail Page {productId}</h1>
   
}

export default ProductDetail