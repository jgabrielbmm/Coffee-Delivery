import { Plus, Minus, ShoppingCart } from 'phosphor-react'
import {
  CoffeeContainer,
  CoffeeTag,
  TagContainer,
  CoffeeName,
  CoffeeDescription,
  BuyCoffee,
  Price,
  Cart,
  SetQuantityCoffee,
  SelectCoffee,
} from './styles'
import { ITCoffee } from '../../../../data/data'
import { useContext, useState } from 'react'
import { ShoppingCartContext } from '../../../../contexts/ShoppingCartContext'

interface CoffeeProps {
  coffee: ITCoffee
}

export function Coffee({ coffee }: CoffeeProps) {
  const { AddNewItemToCart } = useContext(ShoppingCartContext)
  const [quantity, setQuantity] = useState(1)

  function handleAddNewItemToCart() {
    AddNewItemToCart(coffee, quantity)
  }

  function handleDecreaseQuantity() {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1)
    }
  }

  function handleIncreaseQuantity() {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  return (
    <CoffeeContainer>
      <img src={coffee.image} alt="" />
      <TagContainer>
        {coffee.tags.map((tag) => {
          return <CoffeeTag key={tag}>{tag}</CoffeeTag>
        })}
      </TagContainer>
      <CoffeeName>{coffee.name}</CoffeeName>
      <CoffeeDescription>{coffee.coffeInfo}</CoffeeDescription>
      <BuyCoffee>
        <Price>
          R$ <span>{String(coffee.price.toFixed(2)).replace('.', ',')}</span>
        </Price>
        <SelectCoffee>
          <SetQuantityCoffee>
            <button onClick={() => handleDecreaseQuantity()}>
              <Minus weight="bold" size={14} />
            </button>
            <span>{quantity}</span>
            <button onClick={() => handleIncreaseQuantity()}>
              <Plus weight="bold" size={14} />
            </button>
          </SetQuantityCoffee>
          <Cart onClick={handleAddNewItemToCart}>
            <ShoppingCart weight="fill" />
          </Cart>
        </SelectCoffee>
      </BuyCoffee>
    </CoffeeContainer>
  )
}
