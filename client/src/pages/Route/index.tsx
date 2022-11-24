import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

function RoutePage () {
    const { name } = useParams()
    const [routeContent, setRouteContent] = useState('')

    const getRouteContent = async () => {
        const routeResponse = await axios.get(`${process.env.REACT_APP_API_ADDRESS}/mock/${name}`)
        setRouteContent(routeResponse.data.content)
    }

    useEffect(() => {
        getRouteContent()
    }, [])

    return <div>
        <h1>{name}</h1>
        <pre>
            {routeContent}
        </pre>
    </div>
}

export default RoutePage