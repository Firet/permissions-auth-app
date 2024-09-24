import styled from '@emotion/styled';
import { Button } from '@mui/material';

const StyledButton = styled(Button)`
	background-color: white;
	color: grey;
	margin: 10px;
	&:hover {
		background-color: #ffff80;
		color: black;
	}
`;

export const CustomButton = ({
	type,
	label,
	onClick,
	color,
}) => {
	return (
		<StyledButton color={color} type={type} onClick={onClick}>
			{label}
		</StyledButton>
	);
};
