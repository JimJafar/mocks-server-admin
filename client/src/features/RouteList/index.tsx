import React, {useEffect, useState} from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom";

function RouteList() {
    const navigate = useNavigate()
    const [routes, setRoutes] = useState([])

    const getRoutes = async () => {
        const routesResponse = await axios.get(`${process.env.REACT_APP_API_ADDRESS!}/mocks`)
        setRoutes(routesResponse.data)
    }

    useEffect(() => {
        getRoutes()
    }, [])

    return <ul>
        {routes.map(route => <li>
            <a onClick={() => navigate(`route/${route}`)}>{route}</a>
        </li>)}
    </ul>
}

export default RouteList