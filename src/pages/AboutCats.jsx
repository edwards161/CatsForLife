import { useParams } from "react-router-dom";
import AboutCat from '../components/AboutCat'
const AboutCats = ({catData}) => {
    const Url=() => {
        let params=useParams()
        return params.name
    }
    let cat=catData.find(x=>x.name===Url())
    return(
        <AboutCat cat={cat} />
    )
}

export default AboutCats