import axios from "axios"
import { Documents } from "../models/documento"
import { Persona } from "../models/Persona"

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

    static createPerson = async (person:Persona) => {
        const baseUrl = apiUrl+'personas'
        return await axios.post(baseUrl, person)
            .then(res => res.data)
            .catch(err => err)
    } 
}

export class DocumentsApi {
    static getDocuments = async () => {
        const baseUrl = apiUrl+'documentos'
        const { data } = await axios.get<Documents>(baseUrl as string)
        return data
    }
}