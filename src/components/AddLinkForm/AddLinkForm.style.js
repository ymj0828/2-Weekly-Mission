import styled from "styled-components";

export const AddLinkForm = styled.div`
  padding: 6rem 0 9rem;
  background-color: var(--main-background-color);
`;

export const FormWrap = styled.div`
  position: relative;
  width: 80rem;
  padding: 1.6rem 2rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  border-radius: 0.8rem;
  border: 1px solid var(--main-color);
  background-color: #fff;
`;

export const Input = styled.input`
  flex: 1;
  padding-left: 1.2rem;
  font-size: 1.6rem;
  align-items: stretch;
  display: block;
  border: none;
  outline: none;
`;

export const Button = styled.button`
  padding: 1rem 1.6rem;
  border-radius: 0.8rem;
  background-image: linear-gradient(
    91deg,
    var(--main-color) 0.12%,
    #6ae3fe 101.84%
  );
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--gray-light-color);
`;
