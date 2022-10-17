import styled from 'styled-components'

export const SelectedItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 24px;
  background: ${(props) => props.theme['gray-300']};
  border-radius: 6px 44px;
  align-self: stretch;
`

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  align-self: stretch;
  margin-top: 1.5rem;
`

const BasePriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme['gray-700']};
  align-self: stretch;
  gap: 0.75rem;
  font-size: 1rem;
`

export const CoffeePrices = styled(BasePriceContainer)``
export const DeliveryPrice = styled(BasePriceContainer)``
export const TotalPrice = styled(BasePriceContainer)`
  font-weight: 700;
  font-size: 1.5rem;
  color: ${(props) => props.theme['gray-800']};
`

export const OrderButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0.5rem;
  gap: 4px;
  align-self: stretch;
  width: 100%;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 6px;
  border: 1px solid transparent;
  cursor: pointer;
  margin-top: 1.5rem;

  background: ${(props) => props.theme['yellow-400']};
  color: ${(props) => props.theme.white};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['yellow-800']};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
