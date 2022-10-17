import { createContext, ReactNode, useReducer } from 'react'
import { ITCoffee } from '../data/data'

interface ShoppingCartContextProviderProps {
  children: ReactNode
}

export interface ShoppingCart {
  item: ITCoffee
  qty: number
}

interface ShoppingCartContxetType {
  cart: ShoppingCart[]
  AddNewItemToCart: (newItem: ITCoffee, qty: number) => void
  RemoveItemOfCart: (id: number) => void
  ChangeTheQtyOfAnItem: (
    chosenCoffee: ShoppingCart,
    increaseOption: boolean,
  ) => void
}

export const ShoppingCartContext = createContext({} as ShoppingCartContxetType)

export function ShoppingCartContextProvider({
  children,
}: ShoppingCartContextProviderProps) {
  const [cart, dispatch] = useReducer((state: ShoppingCart[], action: any) => {
    switch (action.type) {
      case 'ADD_NEW_ITEM': {
        state = state.filter((cartItem) => {
          return cartItem.item.id !== action.payload.item.id
        })

        return [...state, action.payload]
      }

      case 'REMOVE_ITEM': {
        return state.filter((cartItem) => {
          return cartItem.item.id !== action.payload.id
        })
      }

      case 'CHANGE_QTY_OF_AN_ITEM': {
        return state.map((cartItem) => {
          if (cartItem === action.payload.chosenCoffee) {
            if (action.payload.increase) {
              cartItem.qty = cartItem.qty + 1
            } else {
              if (cartItem.qty > 1) {
                cartItem.qty = cartItem.qty - 1
              }
            }
          }
          return cartItem
        })
      }
      default:
        return state
    }
  }, [])

  function AddNewItemToCart(newItem: ITCoffee, qty: number) {
    dispatch({
      type: 'ADD_NEW_ITEM',
      payload: {
        item: newItem,
        qty,
      },
    })
  }

  function RemoveItemOfCart(id: number) {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: {
        id,
      },
    })
  }

  function ChangeTheQtyOfAnItem(
    chosenCoffee: ShoppingCart,
    increaseOption: boolean,
  ) {
    dispatch({
      type: 'CHANGE_QTY_OF_AN_ITEM',
      payload: {
        chosenCoffee,
        increase: increaseOption,
      },
    })
  }

  return (
    <ShoppingCartContext.Provider
      value={{ cart, AddNewItemToCart, RemoveItemOfCart, ChangeTheQtyOfAnItem }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
