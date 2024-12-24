import {useState, useEffect} from 'react';
import AppContext from "@contexts/AppContext";

/**
 * @typedef {Object} AppContextValue
 * @property {string} theme - Tema atual da aplicação (light ou dark)
 * @property {function} toggleTheme - Função que alterna o tema entre light e dark
 * @property {{width: number, height: number, isSmallScreen: boolean}} screenSize - Informações do tamanho da tela
 * @property {boolean} isLoggedIn - Indica se o usuário está autenticado
 * @property {string} userToken - Token de autentica o do usuário
 * @property {Object} userInfo - Informações do usuário autenticado
 * @property {function} login - Função que autentica o usuário
 * @property {function} logout - Função que "desautentica" o usuário
 */
const AppProvider = ({ children }) => {
    /** ======================================
     * Tema
     ====================================== */
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light' || savedTheme === 'dark') {
            setTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    /** ======================================
     * Tamanho da Tela
     ====================================== */
    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
        isSmallScreen: window.innerWidth <= 768,
    });

    useEffect(() => {
        const handleResize = () => {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight,
                isSmallScreen: window.innerWidth <= 768,
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    /** ======================================
     * Login
     ====================================== */
    const [userToken, setUserToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    const login = (token, userData) => {
        setUserToken(token);
        setUserInfo(userData);
        localStorage.setItem('userToken', token);
        localStorage.setItem('userInfo', JSON.stringify(userData));
    };

    const logout = () => {
        setUserToken(null);
        setUserInfo(null);
        localStorage.removeItem('userToken');
        localStorage.removeItem('userInfo');
    };

    useEffect(() => {
        const storedToken = localStorage.getItem('userToken');
        const storedUserInfo = localStorage.getItem('userInfo');

        if (storedToken && storedUserInfo) {
            setUserToken(storedToken);
            setUserInfo(JSON.parse(storedUserInfo));
        }
    }, []);

    const isLoggedIn = () => {
        if (!userToken) return false;

        try {
            const tokenPayload = JSON.parse(atob(userToken.split('.')[1]));
            return tokenPayload.exp * 1000 > Date.now();
        } catch (error) {
            console.error('Erro ao verificar o token:', error);
            return false;
        }
    };

    /** ======================================
     * Valor do Contexto
     ====================================== */
    const contextValue = {
        theme,
        toggleTheme,
        screenSize,
        isLoggedIn,
        userToken,
        userInfo,
        login,
        logout,
    };

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default AppProvider;