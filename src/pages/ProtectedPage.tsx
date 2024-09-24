import { Outlet } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashbaord";
import styled from "@emotion/styled";

const DashboardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: papayawhip;
    width: 100%;
  `;

export default function ProtectedPage() {
  return (
    <>
      <h3>Protected</h3>
      <DashboardContainer>
        <Dashboard />
        <Outlet />
      </DashboardContainer>
    </>
  )
}