# Sistema de Controle de Estoque - Armazém Santa Ana

Sistema de controle de estoque desenvolvido para o Armazém Santa Ana, estabelecimento tradicional de Curitiba com 91 anos de história.

## Estrutura do Projeto

```
Intro-desen-web/
├── index.html
├── assets/
│   └── logo.svg
├── css/
│   ├── global.css
│   ├── home.css
│   ├── crud.css
│   └── historia.css
├── js/
│   ├── mercearia.js
│   ├── limpeza.js
│   ├── carnes.js
│   └── bebidas.js
└── pages/
    ├── mercearia.html
    ├── limpeza.html
    ├── carnes.html
    ├── bebidas.html
    └── historia.html
```

## Funcionalidades

### Página Inicial (index.html)
- Grid de categorias com navegação visual
- Links para cada seção do estoque
- Design responsivo

### Páginas de CRUD
Cada categoria possui:
- Listagem de produtos em tabela
- Busca por código, nome ou categoria
- Adicionar novos produtos
- Editar produtos existentes
- Excluir produtos
- Armazenamento local (LocalStorage)

### Categorias Disponíveis
1. Mercearia - Grãos, massas, conservas, temperos, óleos
2. Limpeza - Detergentes, desinfetantes, sabões, acessórios
3. Carnes - Bovina, suína, frango, peixe
4. Bebidas - Refrigerantes, cervejas, sucos, águas, vinhos

### Página Nossa História
- História do Armazém Santa Ana
- Linha do tempo desde 1934
- Valores da empresa
- Design elegante e informativo

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript ES6
- LocalStorage para persistência de dados

## Como Usar

1. Abra o arquivo index.html no navegador
2. Navegue pelas categorias clicando nos cards
3. Em cada página de categoria:
   - Clique em "Adicionar Produto" para cadastrar
   - Use a busca para filtrar produtos
   - Clique em "Editar" para modificar um produto
   - Clique em "Excluir" para remover um produto

## Características Técnicas

- Sem banco de dados (dados salvos no LocalStorage do navegador)
- Arquitetura modular com separação de responsabilidades
- CSS organizado por funcionalidade
- JavaScript separado por página
- Design responsivo para diferentes dispositivos
- Interface profissional e intuitiva

## Paleta de Cores

- Principal: #C1694F (terracota)
- Secundária: #B85E47 (terracota escuro)
- Fundo: #f5f5f5 (cinza claro)
- Texto: #333333
- Elementos: white, #6c757d, #dc3545, #28a745

## Navegação

O sistema possui navegação consistente em todas as páginas através da sidebar lateral, com links para:
- Início
- Mercearia
- Limpeza
- Carnes
- Bebidas
- Nossa História
