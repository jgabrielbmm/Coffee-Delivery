import styled, { css } from 'styled-components'

export const IntroContainer = styled.div`
  display: flex;
  margin-top: 5.75rem;
  gap: 3.5rem;

  img {
    width: 30rem;
    height: 22.5rem;
  }
`

export const IntroText = styled.div`
  width: 36.75rem;
`
export const Title = styled.div`
  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    line-height: 1.3;
    font-weight: 800;
    align-self: stretch;
    color: ${(props) => props.theme['gray-900']};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme['gray-800']};
    margin-bottom: 4rem;
  }
`
export const IntroItems = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  row-gap: 1.25rem;
  column-gap: 2.5rem;
  margin-bottom: 6.75rem;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
`

interface IconProps {
  variant?: 'yellow' | 'darkYellow' | 'gray' | 'darkPurple'
}

export const Icon = styled.div<IconProps>`
  background-color: ${(props) => props.theme['purple-400']};
  color: ${(props) => props.theme.white};
  width: 2rem;
  height: 2rem;
  border-radius: 1000px;

  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.variant === 'yellow' &&
    css`
      background: ${props.theme['yellow-400']};
    `}
  ${(props) =>
    props.variant === 'darkYellow' &&
    css`
      background: ${props.theme['yellow-800']};
    `}
  ${(props) =>
    props.variant === 'gray' &&
    css`
      background: ${props.theme['gray-700']};
    `}
  ${(props) =>
    props.variant === 'darkPurple' &&
    css`
      background: ${props.theme['purple-800']};
    `}
`
