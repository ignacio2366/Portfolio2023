import styled from "styled-components";
import styles from "../assets/styles";
import { Link } from "react-router-dom";
export const Navigation = () => {
  return (
    <NavigationContainer>
      <HeaderLogo>MAFI</HeaderLogo>
      <NavBox>
        <NavLink>About Me</NavLink>
        <NavLink>Careers</NavLink>
        <NavLink>Sample Works</NavLink>
      </NavBox>
      <HeaderLogo>hi</HeaderLogo>
    </NavigationContainer>
  );
};

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 55px;
  background-color: ${styles.cherry};
  padding: 0 24px;
`;
const HeaderLogo = styled.h1`
  font-size: 1.75rem;
  color: ${styles.white};
  font-family: ${styles.black};
`;

const NavBox = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 27px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${styles.white};
  font-family: ${styles.regular};
  font-size: 1rem;
`;
export default Navigation;
