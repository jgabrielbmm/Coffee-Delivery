import styled from 'styled-components'

export const FinishedTitle = styled.h2`
  font-family: 'Baloo 2', cursive;
  color: ${(props) => props.theme['yellow-800']};
  font-size: 2rem;
  font-weight: 800;
  margin-top: 5rem;
`
export const FinishedMessage = styled.p`
  font-size: 1.25rem;
  color: ${(props) => props.theme['gray-800']};
  margin-top: 0.25rem;
  margin-bottom: 2.5rem;
`
export const InfoAndImage = styled.div`
  display: flex;
  justify-content: space-between;
`

export const DeliveryInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;
  border: 1px solid ${(props) => props.theme['purple-800']};
  border-radius: 6px 36px;
`

export const DeliveryInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem;

  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 1000px;
  }

  & .IconPurple {
    background: ${(props) => props.theme['purple-800']};
    color: ${(props) => props.theme.white};
  }

  & .IconYellow {
    background: ${(props) => props.theme['yellow-400']};
    color: ${(props) => props.theme.white};
  }

  & .IconDarkYellow {
    background: ${(props) => props.theme['yellow-800']};
    color: ${(props) => props.theme.white};
  }

  & div p span {
    font-weight: 700;
  }
`
