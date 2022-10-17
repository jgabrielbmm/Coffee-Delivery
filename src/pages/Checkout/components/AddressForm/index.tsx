import { useForm } from 'react-hook-form'
import { MapPin } from 'phosphor-react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import {
  AddressFormContainer,
  AddressText,
  BaseInput,
  CityInput,
  ComplementInput,
  DistrictCityState,
  DistrictInput,
  ErrorMessage,
  NumberAndComplement,
  NumberInput,
  SaveAddress,
  StateInput,
  StreetInput,
} from './styles'
import { useContext } from 'react'
import { AddressContext } from '../../../../contexts/AddressContext'

const newAddressFormValidationSchema = zod.object({
  cep: zod
    .number()
    .lte(99999999, { message: 'Informe um CEP válido' })
    .gt(10000000, { message: 'Informe um CEP válido' })
    .int(),
  street: zod.string().min(1, { message: 'Informe  rua' }),
  number: zod.number().min(1, 'Informe o número do local').step(1).int(),
  complement: zod.string().optional(),
  district: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  state: zod.string().min(1, 'Informe o estado'),
})

type NewAddressFormData = zod.infer<typeof newAddressFormValidationSchema>

export function AddressForm() {
  const { addNewAddress, address } = useContext(AddressContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewAddressFormData>({
    resolver: zodResolver(newAddressFormValidationSchema),
    defaultValues: {
      cep: undefined,
      street: '',
      number: undefined,
      complement: '',
      district: '',
      city: '',
      state: '',
    },
  })

  function handleSaveAddress(data: NewAddressFormData) {
    addNewAddress(data)
    console.log(address)
  }

  return (
    <AddressFormContainer>
      <AddressText>
        <MapPin size={22} />
        <div>
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </AddressText>
      <form onSubmit={handleSubmit(handleSaveAddress)}>
        <BaseInput
          type="number"
          placeholder="CEP"
          {...register('cep', { valueAsNumber: true })}
        />
        {errors.cep?.message && (
          <ErrorMessage>{errors.cep.message.toString()}</ErrorMessage>
        )}
        <StreetInput placeholder="Rua" {...register('street')} />
        {errors.street?.message && (
          <ErrorMessage>{errors.street.message.toString()}</ErrorMessage>
        )}
        <NumberAndComplement>
          <NumberInput
            placeholder="Número"
            {...register('number', { valueAsNumber: true })}
          />

          <ComplementInput
            placeholder="Complemento"
            {...register('complement')}
          />
        </NumberAndComplement>
        {errors.number?.message && (
          <ErrorMessage>{errors.number.message.toString()}</ErrorMessage>
        )}

        <DistrictCityState>
          <DistrictInput placeholder="Bairro" {...register('district')} />
          <CityInput placeholder="Cidade" {...register('city')} />
          <StateInput placeholder="UF" maxLength={2} {...register('state')} />
        </DistrictCityState>
        {errors.district?.message && (
          <ErrorMessage>{errors.district.message.toString()}</ErrorMessage>
        )}
        {errors.city?.message && (
          <ErrorMessage>{errors.city.message.toString()}</ErrorMessage>
        )}
        {errors.state?.message && (
          <ErrorMessage>{errors.state.message.toString()}</ErrorMessage>
        )}

        <SaveAddress>Confirmar Endereço</SaveAddress>
      </form>
    </AddressFormContainer>
  )
}
