import styled from 'styled-components'

export const inchesToPixelConverter = (width, height) =>(
  { width: (width*96), height:(height*96)});

  export const CenterContent = styled.div`
    text-align: center
  `;
