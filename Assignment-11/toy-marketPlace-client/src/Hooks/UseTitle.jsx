import { useEffect } from "react"

// Use Dynamic Title by every components

const UseTitle = title => {
    useEffect( () => {
        document.title = `Kids Store | ${title}`;
    }, [title])
}

export default UseTitle;