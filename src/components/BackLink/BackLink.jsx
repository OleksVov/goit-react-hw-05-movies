import { Link } from "react-router-dom";
import {HiChevronDoubleLeft} from "react-icons/hi";
import styled from "@emotion/styled";


const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  :hover {
    color: blue;
  }
`;

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiChevronDoubleLeft size="24" />
      {children}
    </StyledLink>
  );
};