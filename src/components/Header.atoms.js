import styled from 'styled-components';

const LogoSize = 50;
export const Logo = styled.img `
  display: block;
  width: ${LogoSize}px;
  height: ${LogoSize}px;
  margin: 0 15px 0 20px;
  @media screen and ( max-width: 600px ) {
    width: ${LogoSize - (LogoSize * 0.125)}px;
    height: ${LogoSize - (LogoSize * 0.125)}px;
  }
`;

export const Masthead = styled.header `
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 10px;
  box-sizing: border-box;
`;

export const Title = styled.h1 `
  font-weight: lighter;
  text-align: center;
  margin: 0;
  font-size: 2em;
  @media screen and ( max-width: 600px ) {
    font-size: 1.75em;
  }
`;

export const Quote = styled.h2 `
  font-weight: lighter;
  text-align: center;
`;

export const Head = styled.i `
  height: 0px;
  padding-right: 20px;
`;

export const Balloon = styled.div `
  background-color: #f7d51d;
`

export const SubTitle = styled.p `
  font-weight: lighter;
  text-align: center;
  margin: 0;
  font-size: 1.25em;
  @media screen and ( max-width: 600px ) {
    font-size: 1.25em;
  }
  color: blue;
`;