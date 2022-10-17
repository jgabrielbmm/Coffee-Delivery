import { CoffeeList } from './components/CoffeeList'
import { IntroHome } from './components/IntoHome'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <IntroHome />
      <h1>Nossos cafés</h1>
      <CoffeeList />
    </HomeContainer>
  )
}
