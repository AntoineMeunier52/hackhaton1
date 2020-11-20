import React from 'react'
import styled from 'styled-components';
import SearchBar from '../modules/searchbar/SearchBar'
import PeakyLogo from './PeakyLogo.png'

const SiteNav = styled.nav`
    color: white;
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 60px;
    padding-right: 60px;
`

const NavgationBar = styled.div`
    background: transparent;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Logo = styled.div`
    width: 160px;
    height: 130px;
    background: url(${logo});
    background-size: cover;
`

const Text = styled.div`
` 

const Nav = ({ fetchRentings }) => (
    <SiteNav>
        <NavgationBar>
            <Logo />
            <Text>Devenez Hôte</Text>
        </NavgationBar> 
        <SearchBar fetchRentings={fetchRentings} />
    </SiteNav>
)

export default Nav;