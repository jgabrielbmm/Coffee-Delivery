import { createContext, ReactNode, useState } from 'react'

export interface ITAddress {
  cep: number
  street: string
  number: number
  complement?: string
  district: string
  city: string
  state: string
}

interface AddressContextType {
  address: ITAddress | null
  addNewAddress: (newAddress: ITAddress) => void
  removeRegisteredAddress: () => void
}

interface AddressContextProviderProps {
  children: ReactNode
}

export const AddressContext = createContext({} as AddressContextType)

export function AddressContextProvider({
  children,
}: AddressContextProviderProps) {
  const [address, setAddress] = useState<ITAddress | null>(null)

  function addNewAddress(newAddress: ITAddress) {
    setAddress(newAddress)
  }

  function removeRegisteredAddress() {
    setAddress(null)
  }

  return (
    <AddressContext.Provider
      value={{ address, addNewAddress, removeRegisteredAddress }}
    >
      {children}
    </AddressContext.Provider>
  )
}
