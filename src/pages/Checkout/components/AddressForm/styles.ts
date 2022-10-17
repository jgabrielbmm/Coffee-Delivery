import styled from 'styled-components'

export const AddressFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: ${(props) => props.theme['gray-200']};
  padding: 2.5rem;

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`

export const AddressText = styled.div`
  display: flex;
  align-items: flex-start;
  height: 2.75rem;
  gap: 0.5rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme['yellow-800']};

  h3 {
    color: ${(props) => props.theme['gray-800']};
    font-weight: 400;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-700']};
  }
`

export const Form = styled

export const BaseInput = styled.input`
  height: 2.75rem;
  padding: 0.75rem;
  background: ${(props) => props.theme['gray-300']};
  border: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 4px;

  &:focus {
    border: 1px solid ${(props) => props.theme['yellow-800']};
  }
`

export const NumberAndComplement = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  align-self: stretch;
`
export const NumberInput = styled(BaseInput)`
  flex: none;
  order: 0;
  flex-grow: 0;
`

export const ComplementInput = styled(BaseInput)`
  flex: none;
  order: 1;
  flex-grow: 1;
`
export const DistrictCityState = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.75rem;
  align-self: stretch;
`

export const StreetInput = styled(BaseInput)`
  align-self: stretch;
`
export const DistrictInput = styled(BaseInput)`
  flex: 0;
  order: 0;
  flex-grow: 0;
`
export const CityInput = styled(BaseInput)`
  flex: none;
  order: 1;
  flex-grow: 1;
`
export const StateInput = styled(BaseInput)`
  flex: 0;
  order: 2;
  flex-grow: 0;
  max-width: 60px;
  text-transform: uppercase;
`

export const SaveAddress = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0.5rem;
  gap: 4px;
  align-self: stretch;
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

export const ErrorMessage = styled.span`
  display: block;
  padding: 0.25rem;
  border: none;
  border-radius: 4px;
  background: red;
  color: ${(props) => props.theme.white};
  font-size: 0.75rem;
  align-self: stretch;
  text-align: center;
`
