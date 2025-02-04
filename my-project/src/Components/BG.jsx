import React from 'react';
import styled from 'styled-components';

const Pattern = () => {
  return (
    <StyledWrapper>
      <div className="container" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    width: 100%;
    height: 100vh;
    background: 
      /* Diagonal slices */
      radial-gradient(
        circle at 100% 50%,
        #ff00cc 0% 2%,
        #00ffcc 3% 5%,
        transparent 6%
      ),
      /* Offset dots */
        radial-gradient(
          circle at 0% 50%,
          #ff00cc 0% 2%,
          #00ffcc 3% 5%,
          transparent 6%
        ),
      /* Wave-like pattern */
        radial-gradient(ellipse at 50% 0%, #3300ff 0% 3%, transparent 4%) 10px
        10px,
      /* Scattered elements */
        radial-gradient(
          circle at 50% 50%,
          #00ffcc 0% 1%,
          #ff00cc 2% 3%,
          #3300ff 4% 5%,
          transparent 6%
        )
        20px 20px,
      /* Background texture */
        repeating-linear-gradient(
          45deg,
          #1a1a1a,
          #1a1a1a 10px,
          #242424 10px,
          #242424 20px
        );
    background-size:
      50px 50px,
      50px 50px,
      40px 40px,
      60px 60px,
      100% 100%;
    animation: shift 15s linear infinite;
  }

  @keyframes shift {
    0% {
      background-position:
        0 0,
        0 0,
        10px 10px,
        20px 20px,
        0 0;
    }
    100% {
      background-position:
        50px 50px,
        -50px -50px,
        60px 60px,
        80px 80px,
        0 0;
    }
  }`;

export default Pattern;
