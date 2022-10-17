import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2.375rem;
  margin: 2rem 0;
`
export const LocationAndCartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;

  a {
    background: ${(props) => props.theme['yellow-100']};
    color: ${(props) => props.theme['yellow-800']};
    padding: 0.5rem;
    border-radius: 6px;
    height: 2.375rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  a:hover {
    background: ${(props) => props.theme['yellow-400']};
    color: ${(props) => props.theme.white};
  }
`

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  height: 2.375rem;
  gap: 0.25rem;
  background: ${(props) => props.theme['purple-100']};
  color: ${(props) => props.theme['purple-800']};
  border-radius: 6px;
  font-size: 0.875rem;
  line-height: 1.6;
`
export const CartItemsQty = styled.div`
  padding: 0.75rem;
  width: 1.25rem;
  height: 1rem;
  border-radius: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 130%;
  background: ${(props) => props.theme['yellow-800']};
  color: ${(props) => props.theme.white};
  margin-left: -1.75rem;
  margin-top: -2.125rem;
`
