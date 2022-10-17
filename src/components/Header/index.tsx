import logoCoffeeDelivey from '../../assets/logo-coffee-delivery.svg'
import {
  CartItemsQty,
  LocationAndCartContainer,
  LocationContainer,
  NavbarContainer,
} from './styles'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import { AddressContext } from '../../contexts/AddressContext'

export function Header() {
  const { cart } = useContext(ShoppingCartContext)
  const { address } = useContext(AddressContext)
  const numberOfItemsSelected = cart.length

  return (
    <header>
      <NavbarContainer>
        <NavLink to="/" title="Home">
          <img src={logoCoffeeDelivey} alt="" />
        </NavLink>
        <LocationAndCartContainer>
          <LocationContainer>
            <MapPin size={22} weight="fill" />{' '}
            {address && (
              <span>
                {address.city}, {address.state.toUpperCase()}
              </span>
            )}
            {!address && <span>Sem localização</span>}
          </LocationContainer>
          <NavLink to="/checkout">
            <ShoppingCart size={20} weight="fill" />
          </NavLink>
          {cart.length > 0 && (
            <CartItemsQty>{numberOfItemsSelected}</CartItemsQty>
          )}
        </LocationAndCartContainer>
      </NavbarContainer>
    </header>
  )
}
