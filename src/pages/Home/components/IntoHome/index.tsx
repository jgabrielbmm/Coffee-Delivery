import {
  IntroContainer,
  IntroItems,
  IntroText,
  Title,
  Item,
  Icon,
} from './styles'
import MainImage from '../../../../assets/MainImg.png'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

export function IntroHome() {
  return (
    <IntroContainer>
      <IntroText>
        <Title>
          <h1>Encontre o café perfeito para qualquer hora do seu dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </Title>
        <IntroItems>
          <Item>
            <Icon variant="yellow">
              <ShoppingCart size={20} weight="fill" />
            </Icon>
            <p>Compra Simples e segura</p>
          </Item>
          <Item>
            <Icon variant="gray">
              <Package size={20} weight="fill" />
            </Icon>
            <p>Compra Simples e segura</p>
          </Item>
          <Item>
            <Icon variant="darkYellow">
              <Timer size={20} weight="fill" />
            </Icon>
            <p>Compra Simples e segura</p>
          </Item>
          <Item>
            <Icon variant="darkPurple">
              <Coffee size={20} weight="fill" />
            </Icon>
            <p>Compra Simples e segura</p>
          </Item>
        </IntroItems>
      </IntroText>
      <img src={MainImage} alt="" />
    </IntroContainer>
  )
}
