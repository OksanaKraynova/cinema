import React from 'react';
import styled from 'styled-components'
import Search from './Search';
const UserMenu = ({ value, setSearchValue, setValue }) => {
    return (

        <Buttons>
         
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                </svg>
            </button>
            <button>
                <img src='/icons/user.svg' alt='' />
            </button>
        </Buttons>

    );
};

export default UserMenu;


const Buttons = styled.div`
    display: flex;
    gap: 35px;
    @media(max-width: 998px){
        gap: calc(30px + (75 - 30) * ((100vw - 768px) / (1440 - 768)));
        margin-left: auto;
    }
    @media(max-width: 768px){
        gap: 30px;
    }
`

