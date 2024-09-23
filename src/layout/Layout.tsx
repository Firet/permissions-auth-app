import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import Footer from "./Footer";
import Header from "./Header";

const LayoutContainer = styled.section`
  background-color: #a2c3c9;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Layout() {
    return (
        <LayoutContainer>
            <Header />
            <Outlet />
            <Footer />
        </LayoutContainer>
    );
}
