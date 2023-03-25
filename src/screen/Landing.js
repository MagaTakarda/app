import { useNavigate } from "react-router-dom"

const Landing = () => {
    
    const navigete = useNavigate();

    const goToLogin = () => {
        navigete("/login");
    }

    return(
        <div classname= "landing_container">
            <button onClick={goToLogin}>go to login</button>
        </div>
    )
}