


class Response{

    static success(data){
        return {
            data, error:undefined
        }
    }

    static error(error){
        return{
            error, data:undefined
        }
    }
}

export default Response;