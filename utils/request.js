export const _GET =  async ( route ) => {
    try {

        const response = await fetch(route,{
            method : 'GET',
            headers : {
                'Content-Type': 'application/json',
            }
      }, { next : { revalidate : 10 } } )

      const data = await response.json();
      return {  data : data, status : response.status }
        
    } catch (error) {
        return {
            message : 'GET request failed',
            file : '@utils/request',
            line : 1
        }
    }
}


export const _POST = async ( route , body ) => {
    try {

        const response = await fetch(route, {
            method : 'POST',
            headers : {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify(body)
        }, { next : { revalidate : 10 } } )

        const data = await response.json();
        return { data : data , status : response.status }

        
    } catch (error) {
        return {
            message : 'GET request failed',
            file : '@utils/request',
            line : 24
        }
    }
}