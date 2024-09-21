import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../App";


interface IFormInput {
    userName: string
    password: string
}


export default function CustomForm() {
    let navigate = useNavigate();
    let auth = useAuth();
    const { register, handleSubmit } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = (data => {
        if (data.userName) {
            auth.signin(data.userName, () => {
                navigate('/public', { replace: true });
            });
        }
    })

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Username: </label>
            <input {...register("userName", { required: true, minLength: 4, maxLength: 20 })} />
            <label>Password: </label>
            <input {...register("password", { required: true, minLength: 4, maxLength: 20 })} />
            <button type="submit">Log In</button>
        </form>
    )
}