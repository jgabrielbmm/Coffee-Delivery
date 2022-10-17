import styled from 'styled-components'

export const SelectedCoffeeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.5rem 0.25rem;
  align-self: stretch;
  gap: 3.125rem;
  border-bottom: 1px solid ${(props) => props.theme['gray-500']};
  margin-bottom: 2rem;
`

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 20px;

  img {
    height: 4rem;
    width: 4rem;
    margin-right: 1.25rem;
  }
`

export const OrderDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
`

export const QuantityRemoveContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const QuantityCoffee = styled.div`
  background: ${(props) => props.theme['gray-400']};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;

  button {
    background: transparent;
    border: 0;
    color: ${(props) => props.theme['purple-400']};
    cursor: pointer;
  }

  button:hover {
    color: ${(props) => props.theme['purple-800']};
  }
`

export const RemoveButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;
  background: ${(props) => props.theme['gray-400']};
  line-height: 2;
  color: ${(props) => props.theme['purple-800']};
  border: 1px solid transparent;
  border-radius: 6px;
  cursor: pointer;

  span {
    font-size: 0.75rem;
    color: ${(props) => props.theme['gray-700']};
  }

  &:hover {
    background: ${(props) => props.theme['gray-500']};
  }
`
export const OrderPrice = styled.div`
  display: flex;
  align-items: center;
  text-align: right;

  p {
    font-weight: 700;
    color: ${(props) => props.theme['gray-700']};
    font-size: 1.25rem;
  }
`
