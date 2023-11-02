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
            message : 'POST request failed',
            file : '@utils/request',
            line : 23
        }
    }
}

export const _PATCH = async ( route , body ) => {
    try {

        const response = await fetch(route, {
            method : 'PATCH',
            headers : {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify(body)
        }, { next : { revalidate : 10 } } )

        const data = await response.json();
        return { data : data , status : response.status }

        
    } catch (error) {
        return {
            message : 'PATCH request failed',
            file : '@utils/request',
            line : 47
        }
    }
}

export const _DELETE = async ( route ) => {
    try {

        const response = await fetch(route, {
            method : 'DELETE',
            headers : {
                'Content-Type': 'application/json',
            }
        }, { next : { revalidate : 10 } } )

        const data = await response.json();
        return { data : data , status : response.status }

        
    } catch (error) {
        return {
            message : 'DELETE request failed',
            file : '@utils/request',
            line : 71
        }
    }
}

