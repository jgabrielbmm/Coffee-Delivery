import {
  DeliveryInfo,
  DeliveryInfoContainer,
  FinishedMessage,
  FinishedTitle,
  InfoAndImage,
} from './styles'
import { MapPin, CurrencyDollar, Timer } from 'phosphor-react'
import Delivery from '../../assets/Delivery.png'
import { useLocation } from 'react-router-dom'

export function Finished() {
  const { state } = useLocation()
  console.log(state)

  const city = state.orderContent.address.city
  const district = state.orderContent.address.district
  const number = state.orderContent.address.number
  const st = state.orderContent.address.state.toUpperCase()
  const street = state.orderContent.address.street
  const paymentMethod = state.orderContent.selectedMethod

  return (
    <div>
      <FinishedTitle>Uhu! Pedido confirmado</FinishedTitle>
      <FinishedMessage>
        Agora é só aguardar que logo o café chegará até você
      </FinishedMessage>
      <InfoAndImage>
        <DeliveryInfoContainer>
          <DeliveryInfo>
            <span className="IconPurple">
              <MapPin weight="fill" />
            </span>
            <div>
              <p>
                Entrega em{' '}
                <span>
                  {street}, {number}
                </span>{' '}
              </p>
              <p>
                {district} - {city}, {st}
              </p>
            </div>
          </DeliveryInfo>
          <DeliveryInfo>
            <span className="IconYellow">
              <Timer weight="fill" />
            </span>

            <div>
              <p>Previsão de entrega</p>
              <p>
                <span>20 min - 30 min</span>
              </p>
            </div>
          </DeliveryInfo>
          <DeliveryInfo>
            <span className="IconDarkYellow">
              <CurrencyDollar weight="fill" />
            </span>

            <div>
              <p>Pagamento na entrega</p>
              <p>
                <span>{paymentMethod}</span>
              </p>
            </div>
          </DeliveryInfo>
        </DeliveryInfoContainer>
        <img src={Delivery} alt="" />
      </InfoAndImage>
    </div>
  )
}
