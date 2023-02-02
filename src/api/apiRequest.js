import axios from "axios";

//Canchero ruta
const ruta = "https://canchitas-backend-production.up.railway.app/auth/canchero"

export const createCancheroRequest = async (canchero) => {
    return await axios.post(`${ruta}/signup`, canchero)
}
