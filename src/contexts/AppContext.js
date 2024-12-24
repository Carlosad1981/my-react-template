import {createContext} from 'react';

/**
 * @module src/contexts/AppProvider
 * @description
 * Criação do contexto global da aplicação que contém as seguintes propriedades:
 *
 * - `theme`: string que indica o tema atual da aplicação (light ou dark)
 * - `toggleTheme`: função que alterna o tema entre light e dark
 * - `screenSize`: objeto com as propriedades `width`, `height` e `isSmallScreen` que indica o tamanho da tela
 * - `isLoggedIn`: booleano que indica se o usuário está autenticado (Você deve criar sua lógica)
 * - `userToken`: string com o token de autenticação do usuário
 * - `userInfo`: objeto com as informações do usuário autenticado
 * - `login`: função que autenticação usuário
 * - `logout`: função que "desautentica" o usuário
 *
 * @example
 * import {AppContext} from '@contexts/AppProvider';
 *
 * const {theme, toggleTheme, screenSize, isLoggedIn, userToken, userInfo, login, logout} = useContext(AppContext);
 */
const AppContext = createContext({
    theme: localStorage.getItem('theme') || 'light',
    toggleTheme: null,
    screenSize: { width: window.innerWidth, height: window.innerHeight, isSmallScreen: window.innerWidth <= 768 },
    isLoggedIn: null,
    userToken: null,
    userInfo: null,
    login: null,
    logout: null,
});

export default AppContext;