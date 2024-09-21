import { useForm, SubmitHandler } from 'react-hook-form';
// import { ErrorMessage } from '@hookform/error-message'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../App";

interface IFormInput {
    userName: string
    password: string
    multipleErrorInput: string
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
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Username: </label>
            <input
                {...register("userName", {
                    required: 'Username is required',
                    minLength: { value: 4, message: "Must exceed 3 characters" },
                    maxLength: { value: 21, message: "Must have less than 20 characters" }
                })}
                aria-invalid={errors.userName ? "true" : "false"}
            />
            {errors.userName?.type === "required" && (
                <p role="alert">{errors.userName.message}</p>
            )}
            {errors.userName?.type === "minLength" && (
                <p role="alert">{errors.userName.message}</p>
            )}
            {errors.userName?.type === "maxLength" && (
                <p role="alert">{errors.userName.message}</p>
            )}
            <label>Password: </label>
            <input
                {...register("password", {
                    required: 'Password is required',
                    minLength: { value: 4, message: "Must exceed 3 characters" },
                    maxLength: { value: 21, message: "Must have less than 20 characters" }
                })}
                aria-invalid={errors.userName ? "true" : "false"}
            />
            {errors.password?.type === "required" && (
                <p role="alert">{errors.password.message}</p>
            )}
            {errors.password?.type === "minLength" && (
                <p role="alert">{errors.password.message}</p>
            )}
            {errors.password?.type === "maxLength" && (
                <p role="alert">{errors.password.message}</p>
            )}
            <button type="submit">Log In</button>
        </form>
    )
}