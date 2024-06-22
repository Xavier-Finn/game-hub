import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'b2e5b5cdbd604ad98b66a805cf9b05cb'
    }
})