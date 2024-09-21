import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../App";

export default function LoginPage() {
    let navigate = useNavigate();
    let location = useLocation();
    let auth = useAuth();

    let from = location.state?.from?.pathname || "/";

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        let formData = new FormData(event.currentTarget);
        let username = formData.get("username") as string;

        auth.signin(username, () => {
            navigate('/public', { replace: true });
        });

        // auth.admin(() => {
        //     navigate('/protected', { replace: true });
        // });
    }

    return (
        <div>

            {auth.user && <h3>auth user is: {auth.user}</h3>}
            <p>You must log in to view the page at {from}</p>

            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input name="username" type="text" />
                </label>{" "}
                <button type="submit">Login</button>
            </form>
        </div>
    );
}