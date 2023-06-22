import { useEffect, useState } from "react";


const usePopular = () => {
    const [popular, setPopular] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        fetch('https://top-spin-server.vercel.app/popular')
        .then(res => res.json())
        .then(data => {
            setPopular(data);
            setLoading(false);
        })
    }, [])
    return [popular, loading]
};

export default usePopular;