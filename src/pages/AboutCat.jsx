import { useLocation } from "react-router-dom";
import React from "react"
const AboutCats = ({catData}) => {
    const url = useLocation=()=>{
        const {e}=useLocation()
        return React.useMemo(()=> new URLSearchParams(e),[e])
    }

}
export default AboutCats