import {useContext} from "react";
import AppContext from "@contexts/AppContext";

/**
 * Author: Carlos Duarte
 * Hook que fornece as funções para autenticar ou "desautenticar" o usuário.
 *
 * @function useAuth
 * @returns {Object} Retorna um objeto contendo as seguintes propriedades:
 * - `isLoggedIn`: Booleano que indica se o usuário está autenticado
 * - `login`: Função que autentica o usuário com base em um token
 * - `logout`: Função que "desautentica" o usuário
 *
 * @example
 * import {useAuth} from "@hooks/useAuth";
 * const {isLoggedIn, login, logout} = useAuth();
 */
export const useAuth = () => {
    const {isLoggedIn, login, logout} = useContext(AppContext);
    return {isLoggedIn, login, logout};
};