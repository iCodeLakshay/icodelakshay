import React from 'react';
import styled from 'styled-components';

const HireMeButton = ({ size = 'md' }) => {
    const sizeClasses = {
        sm: 'text-sm px-3 py-1.5',
        md: 'text-base px-4 py-2',
        lg: 'text-lg px-6 py-3'
    };

    return (
        <StyledWrapper size={size}>
            <button className="cssbuttons-io-button">
                Hire me
                <div className="icon">
                    <svg height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor" />
                    </svg>
                </div>
            </button>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    .cssbuttons-io-button {
        background: #000;
        color: #fff;
        font-family: inherit;
        padding: ${props => props.size === 'sm' ? '0.25em 0.8em 0.25em 0.8em' : props.size === 'lg' ? '0.45em 1.4em 0.45em 1.4em' : '0.35em 1.2em 0.35em 1.2em'};
        font-size: ${props => props.size === 'sm' ? '14px' : props.size === 'lg' ? '18px' : '17px'};
        font-weight: 500;
        border-radius: 0.9em;
        border: none;
        letter-spacing: 0.05em;
        display: flex;
        align-items: center;
        box-shadow: inset 0 0 1.6em -0.6em rgba(255, 255, 255, 0.2);
        overflow: hidden;
        position: relative;
        height: ${props => props.size === 'sm' ? '2.2em' : props.size === 'lg' ? '3.2em' : '2.8em'};
        padding-right: ${props => props.size === 'sm' ? '2.8em' : props.size === 'lg' ? '3.8em' : '3.3em'};
        cursor: pointer;
        transition: background 0.3s ease;
    }

    .cssbuttons-io-button .icon {
        background: #fff;
        margin-left: 1em;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        height: ${props => props.size === 'sm' ? '1.8em' : props.size === 'lg' ? '2.6em' : '2.2em'};
        width: ${props => props.size === 'sm' ? '1.8em' : props.size === 'lg' ? '2.6em' : '2.2em'};
        border-radius: 0.7em;
        box-shadow: 0.1em 0.1em 0.6em 0.2em rgba(255, 255, 255, 0.2);
        right: 0.3em;
        transition: all 0.3s;
    }

    .cssbuttons-io-button:hover .icon {
        width: calc(100% - 0.6em);
    }

    .cssbuttons-io-button .icon svg {
        width: ${props => props.size === 'sm' ? '0.9em' : props.size === 'lg' ? '1.3em' : '1.1em'};
        transition: transform 0.3s;
        color: #000;
    }

    .cssbuttons-io-button:hover .icon svg {
        transform: translateX(0.1em);
    }

    .cssbuttons-io-button:active .icon {
        transform: scale(0.95);
    }
`;
export default HireMeButton;
