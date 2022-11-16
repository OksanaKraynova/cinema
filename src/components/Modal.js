import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { enableScroll } from '../funcs/scroll';



const Modal = props => {

    const [active, setActive] = useState(false);

    useEffect(() => {
        setActive(props.active);
    }, [props.active]);

    return (
        <Container id={props.id} className={`modal ${active ? 'active' : ''}`}>
            {props.children}
        </Container>
    );
}

Modal.propTypes = {
    active: PropTypes.bool,
    id: PropTypes.string
}

export const ModalContent = props => {

    const contentRef = useRef(null);

    const closeModal = () => {
        contentRef.current.parentNode.classList.remove('active');
        enableScroll()
        if (props.onClose) props.onClose();
    }

    return (
        <Wrapper ref={contentRef} className="modal__content">
            {props.children}
            <Close onClick={closeModal}>
              <span>&times;</span>
            </Close>
        </Wrapper>
    )
}



ModalContent.propTypes = {
    onClose: PropTypes.func
}

export default Modal;

const Container = styled.div`
    position: fixed;
    z-index: 99;
    top: 100px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
    background-color: rgba(0,0,0, 0.4);
    opacity: 0;
    visibility: hidden;
    display: flex;
    &.active {
        opacity: 1;
        visibility: visible;
    }
 
`

const Wrapper= styled.div`
    flex: 0 1 1000px;
    margin: 0 auto; 
    margin-top: 100px;
    position: relative;
    @media(max-width: 1149px){
        padding: 0px 20px ;
    }
`

const Close = styled.button`
    position: absolute;
    right: -26px;
    font-size: 30px;
    top: -26px;
    @media(max-width: 1149px){
        top: -34px;
        right: 20px;
    }
`