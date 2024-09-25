import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import styled from '@emotion/styled';
import { LoginInput } from '../../../types/LoginInputType';
import { useAuth } from '../../../hooks/useAuth';
import { CustomButton } from '../CustomButton/CustomButton';

export default function CustomForm() {

	const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	// background-color: var(--white);
	margin: 10px;
`;

	const FormInnerContainer = styled.div`
		display: flex;
		flex-direction: column;
	`;

	const StyledTextField = styled(TextField)`
		margin-top: 10px;
	`;


	const navigate = useNavigate();
	const auth = useAuth();
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<LoginInput>();

	const onSubmit: SubmitHandler<LoginInput> = (data) => {
		if (data.userName) {
			auth.signin(data.userName, () => {
				navigate('/protected', { replace: true });
			});
		}
	};
	return (
		<FormContainer onSubmit={handleSubmit(onSubmit)}>
			<FormInnerContainer>
				<TextField
					label="Username"
					{...register('userName', {
						required: 'Username is required',
						minLength: {
							value: 4,
							message: 'Must exceed 3 characters',
						},
						maxLength: {
							value: 21,
							message: 'Must have less than 20 characters',
						},
					})}
					error={!!errors.userName}
					helperText={errors.userName?.message}
				/>
				<StyledTextField
					label="Password"
					type="password"
					{...register('password', {
						required: 'Password is required',
						minLength: {
							value: 4,
							message: 'Must exceed 3 characters',
						},
						maxLength: {
							value: 21,
							message: 'Must have less than 20 characters',
						},
					})}
					error={!!errors.password}
					helperText={errors.password?.message}
				/>
				<CustomButton type="submit" color="primary" label="Log In" onClick={() => null}>
				</CustomButton>
			</FormInnerContainer>
		</FormContainer>
	);
}
