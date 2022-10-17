import {
  AddressContent,
  ChangeAddressButton,
  RegisteredAddressContainer,
  RegisteredAddressTitle,
} from './styled'
import { AddressBook } from 'phosphor-react'
import { useContext } from 'react'
import { AddressContext } from '../../../../contexts/AddressContext'

export function RegisteredAddress() {
  const { address, removeRegisteredAddress } = useContext(AddressContext)

  function handleRemoveAddress() {
    removeRegisteredAddress()
  }

  return (
    <RegisteredAddressContainer>
      <RegisteredAddressTitle>
        <AddressBook size={22} color={'#4b2995'} />
        <h3>Endereço Cadastrado</h3>
      </RegisteredAddressTitle>
      <AddressContent>
        <p>
          {address?.street}, {address?.number}
        </p>
        <p>{address?.district}</p>
        {address?.complement && <p>{address?.complement}</p>}
        <p>
          {address?.city}-{address?.state.toUpperCase()} {address?.cep}
        </p>
      </AddressContent>
      <ChangeAddressButton onClick={handleRemoveAddress}>
        Trocar Endereço
      </ChangeAddressButton>
    </RegisteredAddressContainer>
  )
}
