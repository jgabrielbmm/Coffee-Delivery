import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16rem;
  height: 20rem;
  background: ${(props) => props.theme['gray-200']};
  border-radius: 6px 36px;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }
`

export const TagContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`

export const CoffeeTag = styled.span`
  background: ${(props) => props.theme['yellow-100']};
  color: ${(props) => props.theme['yellow-800']};
  font-size: 0.625rem;
  line-height: 1.3;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.25rem 0.5rem;
  margin-top: 0.75rem;
  border-radius: 100px;
`

export const CoffeeName = styled.h3`
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 1.25rem;
  color: ${(props) => props.theme['gray-800']};
  line-height: 1.3;

  display: flex;
  align-items: flex-end;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`

export const CoffeeDescription = styled.p`
  font-size: 0.875rem;
  line-height: 1.3;
  text-align: center;
  color: ${(props) => props.theme['gray-600']};
  margin: 0 1.25rem;
`
export const BuyCoffee = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  gap: 1.5rem;
`

export const Price = styled.div`
  text-align: right;
  color: ${(props) => props.theme['gray-700']};

  span {
    font-family: 'Baloo 2', cursive;
    font-size: 1.5rem;
  }
`

export const Cart = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme['purple-800']};
  color: ${(props) => props.theme.white};
  padding: 0.5rem;
  border: 0;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['purple-400']};
  }
`
export const SetQuantityCoffee = styled.div`
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

export const SelectCoffee = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;
`
