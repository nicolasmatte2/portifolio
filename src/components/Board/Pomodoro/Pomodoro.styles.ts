import styled from "styled-components";

export const PomodoroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: red;
  width: 8rem;
  height: 8rem;
  border-radius: 2rem;

  .btn-container {
    display: flex;
    gap: 10px;
  }
`;

export const Timer = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  background-color: #9ca144;
  border: 2px solid #2e2e2e;
`;

export const Button = styled.button`
  font-size: 12px;
  border-radius: 1rem;
  border: 0;
  padding: 8px;
  margin-top: 20px;

  &:active {
    transform: scale(0.9);
  }
`;
