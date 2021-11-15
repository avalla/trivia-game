import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  z-index: 100;
  background: rgba(0, 0, 0, 0.2);
  transition: display ease 500ms;

  .lds-circle {
    display: inline-block;
    transform: translateZ(1px);
  }

  .lds-circle > div {
    display: inline-block;
    width: 6.4rem;
    height: 6.4rem;
    margin: 8px;
    margin-top: 25vh;
    border-radius: 50%;
    background: #fff;
    opacity: 0.7;
    animation: lds-circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  @keyframes lds-circle {
    0%,
    100% {
      animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
    }
    0% {
      transform: rotateY(0deg);
    }
    50% {
      transform: rotateY(1800deg);
      animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
    }
    100% {
      transform: rotateY(3600deg);
    }
  }
`;

function Loader() {
  return (
    <Container className="hero-body has-text-centered is-overlay">
      <div className="container">
        <div className="lds-circle">
          <div />
        </div>
      </div>
    </Container>
  );
}

Loader.defaultProps = {};
Loader.propTypes = {};
export default Loader;
