import { useContext, useState } from 'react'
import { AddressContext } from '../../contexts/AddressContext'
import { AddressForm } from './components/AddressForm'
import { PaymentMethod } from './components/PaymentMethod'
import { RegisteredAddress } from './components/RegisteredAddress'
import { SelectedItems } from './components/SelectedItems'
import { CheckoutContainer } from './styles'

export function Checkout() {
  const { address } = useContext(AddressContext)
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null)
  function addPaymentMethod(method: string) {
    setSelectedMethod(method)
  }
  return (
    <CheckoutContainer>
      <div>
        <h2>Complete seu pedido</h2>
        {!address && <AddressForm />}
        {address && <RegisteredAddress />}
        <PaymentMethod onAddPaymentMethod={addPaymentMethod} />
      </div>
      <div>
        <h2>Café selecionados</h2>
        <SelectedItems selectedMethod={selectedMethod} />
      </div>
    </CheckoutContainer>
  )
}
