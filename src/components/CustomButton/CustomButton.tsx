import styled from '@emotion/styled';
import { Button } from '@mui/material';

const StyledButton = styled(Button)`
	margin: 10px;
`;

export const CustomButton = ({
	type,
	label,
	onClick,
	color
}) => {
	return (
		<StyledButton color={color} type={type} onClick={onClick}>
			{label}
		</StyledButton>
	);
};
