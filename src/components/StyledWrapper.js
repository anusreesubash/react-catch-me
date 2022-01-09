import styled from 'styled-components';

const Wrapper = styled.div`
  .canvas {
    height: 500px;
    width: 500px;
    background-color: #ccc;
    position: relative;
    top: 0;
    left: 0;
  }

  .block {
    transition: all 0.5s ease-in-out;
  }
`;

export default Wrapper;
