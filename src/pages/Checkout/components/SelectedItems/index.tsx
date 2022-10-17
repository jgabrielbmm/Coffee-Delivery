import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AddressContext, ITAddress } from '../../../../contexts/AddressContext'
import {
  ShoppingCart,
  ShoppingCartContext,
} from '../../../../contexts/ShoppingCartContext'
import { SelectedCoffee } from '../SelectedCoffee'
import {
  CoffeePrices,
  SelectedItemsContainer,
  DeliveryPrice,
  PriceContainer,
  TotalPrice,
  OrderButton,
} from './styles'

interface SelectedItemProps {
  selectedMethod: string | null
}

export interface OrderContent {
  cart: ShoppingCart[]
  address: ITAddress | null
  selectedMethod: string | null
}

export function SelectedItems({ selectedMethod }: SelectedItemProps) {
  const { cart } = useContext(ShoppingCartContext)
  const { address } = useContext(AddressContext)
  const navigate = useNavigate()

  //  calculating the price of all items
  const priceItems = cart.reduce((previous, current) => {
    const currentValue: number = current.item.price * current.qty
    return previous + currentValue
  }, 0)

  // total price
  const totalPrice = priceItems + 3.5

  const hasRegisteredAddress = address

  const isButtonDisabled = !hasRegisteredAddress || !selectedMethod

  function handleFinishedOrder() {
    const orderContent = {
      cart,
      address,
      selectedMethod,
    }
    navigate('/finished', { state: { orderContent } })
  }

  return (
    <SelectedItemsContainer>
      {cart.length === 0 && (
        <div>
          <p>Nenhum café selecionado</p>
        </div>
      )}

      {cart.length > 0 && (
        <div>
          {cart.map((chosenCoffee) => {
            return (
              <SelectedCoffee
                key={chosenCoffee.item.id}
                chosenCoffee={chosenCoffee}
              />
            )
          })}
          <PriceContainer>
            <CoffeePrices>
              <p>Total de itens</p>
              <p>R$ {priceItems.toFixed(2).replace('.', ',')}</p>
            </CoffeePrices>
            <DeliveryPrice>
              <p>Entrega</p>
              <p>R$ 3,50</p>
            </DeliveryPrice>
            <TotalPrice>
              <p>Total</p>
              <p>R$ {totalPrice.toFixed(2).replace('.', ',')}</p>
            </TotalPrice>
          </PriceContainer>
          <OrderButton
            disabled={isButtonDisabled}
            onClick={handleFinishedOrder}
          >
            Confirmar Pedido
          </OrderButton>
        </div>
      )}
    </SelectedItemsContainer>
  )
}
