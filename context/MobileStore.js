import React, { createContext, useState, useEffect } from 'react';
import isMobile from "../tools/Tools";

const useMobile = () => {
    const [mobile, setMobile] = useState(false);
    useEffect(() => {
        setMobile(isMobile.any() ? true : false)
    }, [])
    return (mobile)
}

export default useMobile;