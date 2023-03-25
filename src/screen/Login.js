import { useNavigate } from "react-router-dom";

const login = () => {
    const navigete = useNavigate();

    const goToHome = () => {
        navigete("/Home");
    }

    return(
        <div className="login_container">
            <div className="login_inner_container">
                <div className="login_left_container"> </div>

            </div>

        </div>
    )
}