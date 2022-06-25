import s from "./Freinds.module.css"
import Freind from "./FreindsItem/FreindsItem";

const Freinds = (props) => {
    return(
        <Freind className={s.freinds} freinds={props.name}/>
    )
}

export default Freinds;