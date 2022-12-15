describe('Buscar Camargo Aranha no Google', () => {
  it('Acessa a página do Google', () => {
    cy.visit('https://www.google.com.br')
  })
  it('Digite no campo de busca', () => {
    cy.get('input[name=q]').type('Etec Camargo Aranha')
  })
  it('Clica em Pesquisa', () => {
    cy.get('form').submit()
  })
  it('Acessa o site do Camargo Aranha', () => {
    cy.contains('Camargo Aranha').click()
  })
})