import styled from '@emotion/styled';
import { Button } from '@mui/material';

const StyledButton = styled(Button)`
	background-color: var(--white);
	color: var(--black);
	margin: 10px;
	&:hover {
		background-color: var(--accent);
		color: var(--black);
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
