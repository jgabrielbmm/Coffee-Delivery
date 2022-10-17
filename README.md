## Coffee Delivery
Aplicação para gerenciar um carrinho de compras de uma cafeteria fictícia 
feita em ReactJS e TypeScript.
link do figma https://www.figma.com/file/kTZqny2EQN1SSG05DInvCZ/Coffee-Delivery-(Copy)?node-id=0%3A1
OBS: Eu fiz algumas mudanças. 

### Como inicializar o projeto 
Instalar dependências:
```js
npm install
```
Inicializar a aplicação:
```js
npm run dev
```
O projeto está rodando da porta 3000, caso você esteja com outra aplicação rodando 
nessa porta você pode trocar ela indo em **vite.config.ts** e alterar a port.
```js
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
})
```
### Funcionalidades
* Listagem de produtos (cafés) disponíveis para compra
* Adicionar uma quantidade específicas de itens no carrinho
* Aumentar ou remover a quantidade de itens no carrinho
* Formulário para o usuário preencher o seu endereço
* Exibir o total de itens no carrinho no Header
* Exibir o valor total da soma de itens no carrinho multiplicados pelo valor

### Conceitos usados no desenvolvimento 
* Estados
* ContextAPI
* LocalStorage (pendente)
* Imutabilidade do estado 
* Lista e chaves no React JS
* Propriedades
* Componentização
* Styled-components