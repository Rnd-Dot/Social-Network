import loading from "../../../assets/images/loading.gif"
import s from "./Preloader.module.css"


const Preloader = () => {
    return <img src={loading} className={s.loading} alt=""/>
}

export default Preloader;