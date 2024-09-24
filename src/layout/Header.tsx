import { Link } from "react-router-dom";
import { AuthStatus } from "../auth/AuthStatus";
import styled from "@emotion/styled";

const HeaderContainer = styled.header`
  background-color: red;
  color: white;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export default function Header() {
    return (
        <HeaderContainer>
            <Link to="/public">Public Page </Link>
            <Link to="/protected">Protected Page</Link>
            <Link to="/admin"> Admin</Link>
            <AuthStatus />
        </HeaderContainer>
    );
}
