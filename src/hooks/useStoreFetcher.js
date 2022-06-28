import {useEffect, useState} from "react";
import {get} from "../store/api/get";

export default function useStoreFetcher(state, store, path) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!state) {
            setLoading(true);
            get(path, store, setError, setLoading(false));
        }
    }, [state, path, store])

    return {
        error,
        loading
    }
}