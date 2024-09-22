import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { TextField, Button } from '@mui/material';
import { useAuth } from "../App";

interface IFormInput {
    userName: string
    password: string
    multipleErrorInput: string
}


export default function CustomForm() {
    const navigate = useNavigate();
    const auth = useAuth();
    const { register, formState: { errors }, handleSubmit } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = (data => {
        if (data.userName) {
            auth.signin(data.userName, () => {
                navigate('/public', { replace: true });
            });
        }
    })
    return (
        <form 
            onSubmit={handleSubmit(onSubmit)}>  

        <TextField
          label="Username"  
  
          {...register("userName", {
            required: 'Username is required',
            minLength: { value: 4, message: "Must exceed 3 characters" },
            maxLength: { value: 21, message: "Must have less than 20 characters" }
          })}
          error={!!errors.userName}
          helperText={errors.userName?.message}
          
        />
        <TextField
          label="Password"
          type="password"
          {...register("password", {
            required: 'Password is required',
            minLength: { value: 4, message: "Must exceed 3 characters" },
            maxLength: { value: 21, message: "Must have less than 20 characters" }
          })}
          error={!!errors.password}
          helperText={errors.password?.message}
      
        />
        <Button type="submit" variant="contained" color="primary">
          Log In
        </Button>
      </form>
    )
}