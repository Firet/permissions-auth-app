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
    const { register, formState: { errors }, handleSubmit } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = (data => {
        if (data.userName) {
            auth.signin(data.userName, () => {
                navigate('/public', { replace: true });
            });
        }
    })
    console.log('errors', errors);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Username: </label>
            <input
                {...register("userName", { required: true, minLength: 4, maxLength: 20 })}
                aria-invalid={errors.userName ? "true" : "false"}
            />
            {errors.userName?.type === "required" && (
                <p role="alert">Username is required</p>
            )}
            <label>Password: </label>
            <input
                {...register("password", { required: true, minLength: 4, maxLength: 20 })}
                aria-invalid={errors.password ? "true" : "false"}
            />
            {errors.password?.type === "required" && (
                <p role="alert">Password is required</p>
            )}
            <button type="submit">Log In</button>
        </form>
    )
}