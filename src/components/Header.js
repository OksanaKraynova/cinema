import React, { useState } from 'react';
import styled from 'styled-components'
import Logo from './Logo';
import Menu from './Menu';
import UserMenu from './UserMenu';

const Header = ({searchValue, setSearchValue}) => {

    const [menu, setMenu] = useState(false)
    return (
        <Wrapper>
            <Container className='container'>
                <Logo />
                <Menu menu={menu} setMenu={setMenu} />
                <UserMenu searchValue={searchValue} setSearchValue={setSearchValue}/>
                <Burger onClick={(() => setMenu(!menu))} >
                    <span></span>
                </Burger>
            </Container>
        </Wrapper>
    );
};

export default Header;

const Wrapper = styled.header`
  z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #010101;
`

const Container = styled.div`
    display: flex;
    height: 100px;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 998px){
        height: 70px;
        justify-content: flex-start;
        gap:30px;
    }
`

const Burger = styled.div`
position: relative;
    display: none;
    width: 30px;
    height: 20px;
    z-index: 5;
    @media(max-width: 768px){
display: block; 
    }
    span{
        position: absolute;
    background-color: #fff;
    left: 0;
    width: 100%;
    height: 2px;
    top: 9px;
    transition: all 0.3s ease;
    }
    &:before {
    content: "";
    background-color: #fff;
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    top: 0;
    transition: all 0.3s ease;
    }
    &:after {
    content: "";
    background-color: #fff;
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    bottom: 0;
    transition: all 0.3s ease;
    
}
&.active:after {
    transform: rotate(-45deg);
    bottom: 9px;
}
&.active:before {
    transform: rotate(45deg);
    top: 9px;
}
&.active span {
    transform: scale(0);
}
`