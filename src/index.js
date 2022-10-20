import { Router } from "itty-router"
const router = Router()

import fetchStockPrice from "./stock/price"
import cron from "./stock/cron"

router.get(
    
    "/",
    ( request ) => fetchStockPrice( request ),
    
)

router.all('*', () => new Response(
    
    JSON.stringify({
        
        "message":"you should not snoop around, but since you are, hi there!"

    }),{
        
        headers: {
        
            'content-type': 'application/json;charset=UTF-8',
    
        },
        status: 404
    
    })
    
)
async function triggerEvent(scheduledTime) {

    cron()

}
  

addEventListener('fetch', event => event.respondWith(router.handle(event.request)) )
addEventListener("scheduled", (event) => {
    
    event.waitUntil(triggerEvent(event.scheduledTime))

})
