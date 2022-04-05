import axios from "axios";

export const api = {
    getProducts: async () => {
        return await axios.get("https://artisant.io/api/products").then((data) => data.data.data.products)
    }
}