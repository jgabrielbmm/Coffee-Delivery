import { CurrencyDollar, CreditCard, Money, Bank } from 'phosphor-react'
import { ChangeEvent } from 'react'
import {
  Method,
  PaymentMethodContainer,
  PaymentOptions,
  PaymentText,
} from './styles'

interface PaymentMethodProps {
  onAddPaymentMethod: (method: string) => void
}

export function PaymentMethod({ onAddPaymentMethod }: PaymentMethodProps) {
  function handleSelectedMethod(event: ChangeEvent<HTMLInputElement>) {
    console.log(event.target.id)
    if (event.target.id === 'creditCart') {
      onAddPaymentMethod('Cartão de Crédito')
    } else if (event.target.id === 'debt') {
      onAddPaymentMethod('Cartão de Débito')
    } else if (event.target.id === 'money') {
      onAddPaymentMethod('Dinheiro')
    }
  }

  return (
    <PaymentMethodContainer>
      <PaymentText>
        <CurrencyDollar size={22} />
        <div>
          <h3>Pagamento</h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </PaymentText>
      <PaymentOptions>
        <Method>
          <input
            id="creditCart"
            type="radio"
            name="opcion"
            onChange={handleSelectedMethod}
          />
          <CreditCard />
          <p>Cartão de crédito</p>
        </Method>
        <Method>
          <input
            id="debt"
            type="radio"
            name="opcion"
            onChange={handleSelectedMethod}
          />
          <Bank />
          <p>Cartão de débito</p>
        </Method>
        <Method>
          <input
            id="money"
            type="radio"
            name="opcion"
            onChange={handleSelectedMethod}
          />
          <Money />
          <p>Dinheiro</p>
        </Method>
      </PaymentOptions>
    </PaymentMethodContainer>
  )
}
