# My React Template

Um boilerplate para iniciar rapidamente projetos **React** com **Vite**, **RSuite**, **Axios** e **React Router**. Este
template fornece uma base sólida e otimizada para construir aplicativos React modernos, com um conjunto de ferramentas
populares já configuradas.

---

## 🚀 **Começando**

Siga as etapas abaixo para começar a usar o **My React Template** em seu novo projeto.

### **1. Use o NPM ou Clone o Repositório**

Você pode usar este boilerplate de duas maneiras:

- **Usando o NPM (recomendado):**

  Se você preferir usar o NPM para iniciar o seu projeto, basta executar:
    ```bash
    npx criar-meu-layout meu-app
    cd meu-app
    npm run dev
    ```
  
  No caso da instalação pelo **npm**, não é necessário instalar manualmente as dependências, pois todas já são
  instaladas durante a instalação do **my-react-template**.


- **Clonar diretamente o repositório:**

  Você pode clonar o repositório do GitHub para iniciar o seu projeto:
  ```bash
  git clone https://github.com/Carlosad1981/my-react-template.git
  cd my-react-template
  npm install
  npm run dev
  ```

---

## 🛠️ **Tecnologias Incluídas**

Este template já inclui as seguintes tecnologias e bibliotecas:

- **React:** Biblioteca JavaScript para construir interfaces de usuário.
- **Vite:** Ferramenta de build super rápida e otimizada para o React.
- **RSuite:** Conjunto de componentes de UI para React, pronto para uso, com uma aparência moderna e consistente.
- **Axios:** Cliente HTTP para fazer requisições de API.
- **React Router Dom:** Biblioteca para gerenciamento de rotas em aplicativos React.

---

## ⚙️ **Estrutura do Projeto**

O boilerplate vem com a seguinte estrutura básica:

- /src
    - /assets # Arquivos estáticos, como imagens e fontes
    - /componentes # Componentes reutilizáveis
    - /fragmentos # Agrupamento de componentes
    - /paginas # Páginas do aplicativo (ex: Home, About)
    - /servicos # Serviços, como APIs usando Axios
    - /App.js # Componente principal do app
- /public
    - /index.html # Arquivo HTML principal

---

## ‍💻 **Como Usar**

### **Adicionar uma Nova Página**

Para adicionar uma nova página ao seu projeto, basta seguir esses passos:

1. Crie um novo arquivo em `/src/paginas/`, como, por exemplo: `NovaPagina.js`.
2. Defina o conteúdo dessa página:
    ```jsx
    import React from 'react';

    const NovaPagina = () => {
      return (
        <div>
          <h1>Nova Página</h1>
          <p>Bem-vindo à nova página do aplicativo!</p>
        </div>
      );
    };

    export default NovaPagina;
    ```

3. Adicione a nova página ao **React Router** em `App.js`:
    ```jsx
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import Home from './paginas/Home'; 
    import NovaPagina from './paginas/NovaPagina';

    function App() {
      return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-page" element={<NovaPagina />} />
          </Routes>
        </Router>
      );
    }

    export default App;
    ```
   Aqui você já terá sua primeira página personalizada. Você pode ainda criar ou instalar outros componentes e adicionar
   mais rotas conforme necessário.

---

## 📝 **Licença**

Este projeto é licenciado sob a MIT License.

---

## 🙋‍♂️ **Contribuindo**

Se você quiser contribuir para o desenvolvimento deste boilerplate, fique à vontade para abrir issues ou pull requests.
Sinta-se à vontade para melhorar ou corrigir qualquer parte do código!

---

## **Contato**

- **Nome:** Carlos Duarte.
- **Email:** carlosad1981@gmail.com
- **GitHub:** https://github.com/Carlosad1981
