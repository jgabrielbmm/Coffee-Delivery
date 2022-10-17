import {
  Info,
  OrderDescription,
  OrderPrice,
  QuantityCoffee,
  QuantityRemoveContainer,
  RemoveButton,
  SelectedCoffeeContainer,
} from './styles'
import { Minus, Plus, Trash } from 'phosphor-react'
import {
  ShoppingCart,
  ShoppingCartContext,
} from '../../../../contexts/ShoppingCartContext'
import { useContext } from 'react'

interface SelectedCoffeeProps {
  chosenCoffee: ShoppingCart
}

export function SelectedCoffee({ chosenCoffee }: SelectedCoffeeProps) {
  const { RemoveItemOfCart, ChangeTheQtyOfAnItem } =
    useContext(ShoppingCartContext)

  const id = chosenCoffee.item.id

  const price = chosenCoffee.item.price * chosenCoffee.qty

  function handleDeleteItem(id: number) {
    RemoveItemOfCart(id)
  }

  function handleChangeAmount(chosenCoffe: ShoppingCart, increase: boolean) {
    ChangeTheQtyOfAnItem(chosenCoffe, increase)
  }

  return (
    <SelectedCoffeeContainer>
      <Info>
        <img src={chosenCoffee.item.image} alt="" />
        <OrderDescription>
          <h4>{chosenCoffee.item.name}</h4>
          <QuantityRemoveContainer>
            <QuantityCoffee>
              <button onClick={() => handleChangeAmount(chosenCoffee, false)}>
                <Minus weight="bold" size={14} />
              </button>
              <span>{chosenCoffee.qty}</span>
              <button onClick={() => handleChangeAmount(chosenCoffee, true)}>
                <Plus weight="bold" size={14} />
              </button>
            </QuantityCoffee>
            <RemoveButton onClick={() => handleDeleteItem(id)}>
              <Trash size={16} />
              <span>REMOVER</span>
            </RemoveButton>
          </QuantityRemoveContainer>
        </OrderDescription>
      </Info>
      <OrderPrice>
        <p>R$ {String(price.toFixed(2)).replace('.', ',')}</p>
      </OrderPrice>
    </SelectedCoffeeContainer>
  )
}
