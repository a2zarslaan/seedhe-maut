import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 45px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`
export const LogoContainer = styled(Link)`
  height: 100%;
`

export const LogoImg = styled.img`
  height: 100%
`

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`
