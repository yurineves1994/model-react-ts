import { styled } from 'styled-components';

export const Container = styled.div`
  width: 420px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1fcbee;
  opacity: 0.5;
  padding: 0 40px;
  position: absolute;
  right: 0;
`;

export const Button = styled.button`
  width: 420px;
  height: 75px;
  background-color: #1fcbee;
  border: none;
  color: #ffffff;
  font-weight: 600;
  font-size: 16px;

  &::before {
    content: '';
    width: 420px;
    height: 75px;
    z-index: 99999;
  }
`;
