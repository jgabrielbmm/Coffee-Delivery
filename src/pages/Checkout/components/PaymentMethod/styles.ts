import styled from 'styled-components'

export const PaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: ${(props) => props.theme['gray-200']};
  padding: 2.5rem;
  margin-top: 0.75rem;
`
export const PaymentText = styled.div`
  display: flex;
  align-items: flex-start;
  height: 2.75rem;
  gap: 0.5rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme['purple-800']};

  h3 {
    color: ${(props) => props.theme['gray-800']};
    font-weight: 400;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-700']};
  }
`
export const PaymentOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
`
export const Method = styled.label`
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 0.75rem;
  background: ${(props) => props.theme['gray-300']};
  color: ${(props) => props.theme['purple-800']};
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;

  p {
    text-transform: uppercase;
    color: ${(props) => props.theme['gray-700']};
    font-size: 0.75rem;
  }

  &:hover {
    background: ${(props) => props.theme['gray-500']};
    color: ${(props) => props.theme['gray-800']};
  }
`
