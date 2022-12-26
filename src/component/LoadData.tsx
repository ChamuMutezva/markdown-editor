import { useEffect, useState } from 'react'
import { API_ENDPOINT_PATH } from '../config'

// eslint-disable-next-line import/prefer-default-export
export const useLoadData = () => {
    const [data, setData] = useState([] as any[])
    // Get data on load from mongodb

    useEffect(() => {
        // load data from mongo db

        fetch(`${API_ENDPOINT_PATH}`)
            .then(response => response.json())
            .then(json => {
                setData(json)
            })
            .catch(error => {
                console.log(error)
            })

    }, [])

    return data
}