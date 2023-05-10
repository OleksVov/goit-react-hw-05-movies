import { NavLink } from "react-router-dom";
import styled from '@emotion/styled'; 

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  background-color: rgb(130, 133, 141);
  padding: 0 50px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;

export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orange;
  }
`;
