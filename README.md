# My React Template

Um boilerplate para iniciar rapidamente projetos **React** com **Vite**, **RSuite**, **Axios** e **React Router**. Este
template fornece uma base sólida e otimizada para construir aplicativos React modernos, com um conjunto de ferramentas
populares já configuradas.

---

## ⚡️ **Recursos Principais**

- **React** (v18.3.1): Biblioteca para a construção de interfaces de usuário.
- **Vite** (v6.0.3): Ferramenta de build ultrarrápida, ideal para desenvolvimento moderno com front-end.
- **RSuite** (v5.76.0): Uma elegante biblioteca de componentes UI para React.
- **React Router DOM** (v7.1.0): Gerenciamento de rotas para aplicações React.
- **Axios** (v1.7.9): Uma biblioteca para consumo de APIs HTTP.
- **Eslint e Plugins**: Linter poderoso para manter a qualidade do código.
- **Lucide React** (v0.469.0): Conjunto de ícones modernos otimizados para React.
- **PWA com Vite**: Configurações iniciais para Progressive Web Applications.

Além disso, o template oferece:

- Suporte completo para **responsividade**, ideal para telas pequenas e grandes.
- Hooks compartilhados, como `useScreenSize` e `useAuth`.
- Arquitetura modular, otimizando **escalabilidade** e **manutenção** do código.

## 🔧 **Pré-requisitos**

Antes de começar, certifique-se de ter instalados no seu ambiente:

- **Node.js** (v16 ou superior)
- **npm** (gerenciador de pacotes Node.js)

---

## 🚀 **Começando**

Siga as etapas abaixo para começar a usar o **My React Template** em seu novo projeto.

### **1. Use o NPM ou Clone o Repositório**

Você pode instalar e usar este template de duas formas: instalando como uma solução base ou clonando diretamente o
repositório.

- **Usando o NPM (recomendado):**

  Se você preferir usar o NPM para iniciar o seu projeto, basta executar:
    ```bash
    npx criar-app meu-app
    cd meu-app
    npm run dev
    ```

  No caso da instalação pelo **npm**, não é necessário instalar manualmente as dependências, pois todas já são
  instaladas durante a instalação do **my-react-template**.


- **Clonar diretamente o repositório:**

  Você pode clonar o repositório do GitHub para iniciar o seu projeto:

1. Clone este repositório:
```bash
  git clone https://github.com/Carlosad1981/my-react-template.git
```
2. Acesse a pasta do projeto:
``` bash
   cd my-react-template
```

3. Instale as dependências:
``` bash
   npm install
```

4. Inicie o servidor de desenvolvimento:
``` bash
   npm run dev
```

---

## 🛠️ **Scripts Disponíveis**
- **`npm run dev`**: Inicia o servidor de desenvolvimento.
- **`npm run build`**: Gera o build de produção otimizado.
- **`npm run lint`**: Executa o linter para verificar problemas no código.
- **`npm run preview`**: Visualiza a aplicação no ambiente de build.

---

## ⚙️ **Estrutura do Projeto**

O boilerplate vem com a seguinte estrutura básica:

### 📂 **Estrutura de Diretórios**
Abaixo está a estrutura de diretórios do projeto `my-react-template`, com uma descrição de cada diretório ou arquivo importante:
``` plaintext
    my-react-template/
    ├── public/                  # Diretório usado para arquivos estáticos.
    │   ├── index.html           # Arquivo HTML principal.
    │   └── assets/              # Arquivos de mídia (imagens, fontes, etc).
    ├── src/                     # Diretório principal do código-fonte do projeto.
    │   ├── main.jsx             # Componente principal do React.
    │   ├── assets/              # Arquivos de média do código fonte.
    │   ├── components/          # Componentes reutilizáveis menores.
    │   ├── contexts/            # Contextos compartilhados pelos componentes e páginas da aplicação.
    │   ├── fragments/           # Componentes reutilizáveis ou layouts comuns.
    │   ├── hooks/               # Hooks contendo as principais funcionalidades do template.
    │   ├── pages/               # Páginas do aplicativo (cada página é um componente React).
    │   ├── services/            # Serviços e funções auxiliares.
    │   └── utils/               # Funções utilitárias.
    ├── .eslintrc.js             # Configuração do ESLint.
    ├── package.json             # Configuração do npm (dependências, scripts, etc).
    ├── README.md                # Documentação principal do projeto.
    └── vite.config.js           # Configuração do bundler Vite.
```
---

## ‍💻 **Como Usar**

### **Adicionar uma Nova Página**

Para adicionar uma nova página ao seu projeto, basta seguir esses passos:

1. Crie um novo arquivo em `/src/paginas/`, como, por exemplo: `NovaPagina.js`.
2. Defina o conteúdo dessa página:
    ```jsx
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
    import Home from './pages/Home'; 
    import NovaPagina from './pages/NovaPagina';

    function App() {
      return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nova-pagina" element={<NovaPagina />} />
          </Routes>
        </Router>
      );
    }

    export default App;
    ```
   Aqui você já terá sua primeira página personalizada. Você pode ainda criar ou instalar outros componentes e adicionar
   mais rotas conforme necessário.

---

## 🙋‍♂️ **Contribuindo**
Sinta-se à vontade para contribuir com melhorias neste template. Para isso:
1. Faça um **fork** do repositório.
2. Crie uma nova branch para suas alterações:
``` bash
   git checkout -b minha-nova-funcionalidade
```
1. Faça suas alterações e commite:
``` bash
   git commit -m "Adiciona minha nova funcionalidade"
```
1. Por fim, abra um **pull request**!

---

## 📄 **Licença**
Este projeto está licenciado sob a [Licença MIT](). 💚

### 🎉 **Observação Final**
Este boilerplate foi desenvolvido com o intuito de facilitar o processo de inicialização para desenvolvedores React, incluindo um conjunto de ferramentas modernas e práticas já configuradas para garantir um desenvolvimento mais eficiente.

**Enjoy coding! 🚀**

---

## 📬 **Contato**

- **Nome:** Carlos Duarte.
- **Email:** carlosad1981@gmail.com
- **GitHub:** https://github.com/Carlosad1981
