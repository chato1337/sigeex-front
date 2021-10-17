import axios from "axios"

const apiUrl = process.env.REACT_APP_API_URL

export class PopulationApi {
    static getPopulationList = async () => {
        const baseUrl = apiUrl+'personas'
        //TODO refactor type warning
        const { data } = await axios.get(baseUrl as string)
        return data
    }

    static getSinglePerson = async (id:number) => {
        const baseUrl = apiUrl+'personas/'+id
        const { data } = await axios.get(baseUrl as string)
        return data
    }
}