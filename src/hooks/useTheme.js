import {useContext} from 'react';
import AppContext from '@contexts/AppContext';

/**
 * Author: Carlos Duarte
 * Hook para acessar o valor do tema atual.
 *
 * @returns {Object} Retorna um objeto com as propriedades:
 * - `theme`: O valor do tema atual (light ou dark)
 * - `toggleTheme`: Fun o que alterna o tema entre light e dark
 *
 * @throws {Error} Se o hook n o estiver sendo usado dentro de um ThemeProvider
 *
 * @example
 * const { theme, toggleTheme } = useTheme();
 * console.log(theme); // light ou dark
 * toggleTheme(); // alterna para o tema oposto
 */

export const useTheme = () => {
    const {theme, toggleTheme} = useContext(AppContext);
    return {theme, toggleTheme};
};