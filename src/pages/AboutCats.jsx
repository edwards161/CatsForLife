import { useParams } from "react-router-dom";
import AboutCat from '../components/AboutCat'
const AboutCats = ({catData,addToList}) => {
    const Url=() => {
        let params=useParams()
        return params.name
    }
    let cat=catData.find(x=>x.name===Url())
    return(
        <AboutCat cat={cat} addToList={addToList}/>
    )
}

export default AboutCats