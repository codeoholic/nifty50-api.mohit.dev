const fetchStockPrice = async ( request ) => {

    try {

        const kv_response = await NIFTY50.get("data")
        const response = JSON.parse( kv_response )
        return new Response(
        
            JSON.stringify({
                
                data: response,
    
            }),
            {
    
                headers: {
            
                    'content-type': 'application/json;charset=UTF-8',
            
                },
                status: 200
            
            }
        
        )

    } catch ( error ) {

        return new Response(
        
            JSON.stringify({
                
                message: error.message,
    
            }),
            {
    
                headers: {
            
                    'content-type': 'application/json;charset=UTF-8',
            
                },
                status: 500
            
            }
        
        )

    }

}

module.exports = fetchStockPrice
