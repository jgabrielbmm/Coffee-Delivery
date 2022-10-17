import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  display: grid;
  grid-template-columns: 55fr 45fr;
  column-gap: 2rem;
  div h2 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.3;
    color: ${(props) => props.theme['gray-800']};
    margin-bottom: 1rem;
  }
`
