import styled from '@emotion/styled';

interface ButtonProps {
    label: string,
    variant?: 'primary' | 'secondary';
    onClick: () => void,
}

const StyledButton = styled.button<{ variant?: ButtonProps['variant'] }>`
  background-color: ${(props) => {
        switch (props.variant) {
            case 'primary':
                return 'blue';
            case 'secondary':
                return 'red';
            default:
                return 'green';
        }
    }};
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;  `;

export const CustomButton = ({ label, onClick, variant = 'primary' }: ButtonProps) => {
    return <StyledButton variant={variant} onClick={onClick}>{label}</StyledButton>;
};