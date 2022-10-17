import { Coffee } from '../Coffee'
import { CoffeeListContainer } from './styles'
import { coffeeData } from '../../../../data/data'
export function CoffeeList() {
  return (
    <CoffeeListContainer>
      {coffeeData.map((coffee) => {
        return <Coffee key={coffee.id} coffee={coffee} />
      })}
    </CoffeeListContainer>
  )
}
