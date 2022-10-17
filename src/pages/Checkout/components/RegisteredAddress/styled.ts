import styled from 'styled-components'

export const RegisteredAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: ${(props) => props.theme['gray-200']};
  padding: 2.5rem;

  h3 {
    color: ${(props) => props.theme['gray-800']};
    font-weight: 400;
  }
`

export const RegisteredAddressTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`

export const AddressContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.5rem;
`

export const ChangeAddressButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0.5rem;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 6px;
  border: 1px solid transparent;
  cursor: pointer;
  margin-top: 1.5rem;

  background: ${(props) => props.theme['yellow-400']};
  color: ${(props) => props.theme.white};

  &:hover {
    background: ${(props) => props.theme['yellow-800']};
  }
`
