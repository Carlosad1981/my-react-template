import {useContext} from "react";
import AppContext from "@contexts/AppContext";

/**
 * Author: Carlos Duarte
 * Hook para obter o tamanho da tela (largura e altura).
 * Caso precise apenas saber se é uma tela típica de aparelho mobile, use o Hook *useIsSmallScreen*.
 *
 * @returns {Object} Retorna um objeto contendo as propriedades:
 * - `width`: a largura atual da tela em pixels.
 * - `height`: a altura atual da tela em pixels.
 * - `isSmallScreen`: um booleano indicando se a tela tem tamanho inferior ou igual a 768px.
 *
 * @example
 * const { width, height, isSmallScreen } = useScreenSize();
 * console.log(`Largura: ${width}, Altura: ${height}`);
 * if (isSmallScreen) {
 *     // Código para telas pequenas
 * }
 */
export const useScreenSize = () => {
    const {screenSize} = useContext(AppContext);
    return screenSize;
};

/**
 * Author: Carlos Duarte
 * Hook para detectar se a tela tem tamanho inferior ou igual a 768px.
 * Caso necessite recuperar do tamanho exato da tela (Largura e Altura), use o hook *useScreenSize*
 *
 * @returns {boolean} Retorna true se a tela tiver tamanho inferior ou igual
 * a 768px, false caso contrário.
 *
 * @example
 * import {useIsSmallScreen} from "@hooks/useScreenSize";
 * const isSmallScreen = useIsSmallScreen();
 * if (isSmallScreen) {
 *     // Código personalizado para telas pequenas (<= 768)
 * } else {
 *     // Código personalizado para telas grandes (> 768)
 * }
 */
export const useIsSmallScreen = () => {
    const {screenSize} = useContext(AppContext);
    return screenSize.isSmallScreen;
};