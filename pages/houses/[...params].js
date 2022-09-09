import { useRouter } from "next/router"

function Houses(){
    const router = useRouter()
    const {params = []} = router.query
    console.log(params) //returns array
    
    if(params.length === 2){
        return(
            <h1>
                Viewing houses in the range of {params[0]} and {params[1]}
            </h1>
        )
    }else if(params.length == 1){
        return(
            <h1>
                Viewing houses for greater than{params[0]}
            </h1>
        )
    }
    
    return <h1>Houses Home Page</h1>
}

export default Houses