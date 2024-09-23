import { Link } from "react-router-dom";
import { AuthStatus } from "../auth/AuthStatus";
import styled from "@emotion/styled";

const HeaderContainer = styled.section`
  background-color: red;
  color: white;
  display: flex;
  flex-direction: row;
`;

export default function Header() {
    return (
        <HeaderContainer>
            <AuthStatus />
            <li>
                <Link to="/">Public Page</Link>
            </li>
            <li>
                <Link to="/protected">Protected Page</Link>
            </li>
        </HeaderContainer>
    );
}
