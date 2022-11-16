import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'


const Menu = ({ menu, setMenu }) => {
    return (
        <List className={menu ? 'header-menu active' : 'header-menu'} >
            <li onClick={(() => setMenu(false))}>
                <Link to='/' >Home</Link>
            </li>
            <li onClick={(() => setMenu(false))}>
                <Link to='/tv' >TV Shows</Link>
            </li>
            <li onClick={(() => setMenu(false))}>
                <Link to='/movie' >Movies</Link>
            </li>

        </List>
    );
};

export default Menu;

const List = styled.ul`
    display: flex;
    gap:54px;
    @media(max-width: 998px){
        gap: calc(30px + (54 - 30) * ((100vw - 768px) / (1440 - 768)));
    }
    @media(max-width: 768px){
        flex-direction: column;
        position: fixed;top: 0;
        right: 0;bottom: 0;
        background-color: #010101;
        width: 200px;
        padding: 70px 0 0 20px;
        transition: transform 0.2s ;
        transform: translateX(100%);
        
        &.active{
            transform: translateX(0%);
        }
    }
    li{
        font-size: 16px;
        opacity: 0.5;
        font-weight: 700;
        position: relative;
        transition: opacity 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        @media(max-width: 768px){
            font-size: 20px;
        }
        a:after{
                content: '';
                height: 2px;
                position: absolute;
                background: linear-gradient(316.53deg, #26FFF2 13.2%, #326CFF 71.54%);
                left: 0;    
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transform: scaleX(0);
                transition: transform 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            }
            &:hover{
                opacity: 1;
        a:after{
                    opacity: 1;
                    transform: scaleX(1);
        }
    }
    }
`