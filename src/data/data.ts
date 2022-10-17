export interface ITCoffee {
  id: number
  name: string
  coffeInfo: string
  tags: string[]
  price: number
  image: string
}

export const coffeeData: ITCoffee[] = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    coffeInfo: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['tradicional'],
    price: 9.9,
    image: 'http://localhost:3000/expresso-tradicional.png',
  },
  {
    id: 2,
    name: 'Expresso Americano',
    coffeInfo: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['tradicional'],
    price: 9.9,
    image: 'http://localhost:3000/expresso-americano.png',
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    coffeInfo: 'Café expresso tradicional com espuma cremosa',
    tags: ['tradicional'],
    price: 9.9,
    image: 'http://localhost:3000/expresso-cremoso.png',
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    coffeInfo: 'Bebida preparada com café expresso e cubos de gelo',
    tags: ['tradicional'],
    price: 9.9,
    image: 'http://localhost:3000/cafe-gelado.png',
  },
  {
    id: 5,
    name: 'Café com leite',
    coffeInfo: 'Meio a meio de expresso tradicional com leite vaporizadoo',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
    image: 'http://localhost:3000/cafe-com-leite.png',
  },
  {
    id: 6,
    name: 'Latte',
    coffeInfo:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
    image: 'http://localhost:3000/latte.png',
  },
  {
    id: 7,
    name: 'Capuccino',
    coffeInfo:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
    image: 'http://localhost:3000/capuccino.png',
  },
  {
    id: 8,
    name: 'Macchiato',
    coffeInfo: 'Café expresso misturado com um pouco de leite quente e espuma',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
    image: 'http://localhost:3000/macchiato.png',
  },
  {
    id: 9,
    name: 'Mocaccino',
    coffeInfo: 'Café expresso com calda de chocolate, pouco leite e espuma',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
    image: 'http://localhost:3000/mocaccino.png',
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    coffeInfo: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tags: ['especial', 'com leite'],
    price: 9.9,
    image: 'http://localhost:3000/chocolate-quente.png',
  },
  {
    id: 11,
    name: 'Cubano',
    coffeInfo:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags: ['especial', 'alcoólico', 'gelado'],
    price: 9.9,
    image: 'http://localhost:3000/cubano.png',
  },
  {
    id: 12,
    name: 'Havaiano',
    coffeInfo: 'Bebida adocicada preparada com café e leite de coco',
    tags: ['especial'],
    price: 9.9,
    image: 'http://localhost:3000/havaiano.png',
  },
  {
    id: 13,
    name: 'Árabe',
    coffeInfo: 'Bebida preparada com grãos de café árabe e especiarias',
    tags: ['especial'],
    price: 9.9,
    image: 'http://localhost:3000/arabe.png',
  },
  {
    id: 14,
    name: 'Irlandês',
    coffeInfo: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    tags: ['especial', 'Alcoólico'],
    price: 9.9,
    image: 'http://localhost:3000/irlandes.png',
  },
]
