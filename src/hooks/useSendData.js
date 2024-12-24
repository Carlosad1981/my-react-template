import { useState, useCallback } from 'react';
import sendDataRequest from '@services/sendDataRequest';

/**
 * Author: Carlos Duarte
 * Hook que fornece uma função utilitária para enviar dados para um endpoint da API, gerenciar
 * estados de carregamento, tratamento de erros e dados da resposta.
 *
 * @function useSendData
 * @returns {Object} Retorna um objeto contendo as seguintes propriedades:
 * - `sendData`: Função para executar uma requisição à API com base nos parâmetros fornecidos.
 * - `loading`: Booleano indicando se a requisição está em andamento.
 * - `error`: Objeto contendo detalhes sobre qualquer erro ocorrido durante a requisição
 *   (por exemplo, `message` e `status`), ou nulo se nenhum erro ocorreu.
 * - `data`: Os dados da resposta da API, ou nulo se ainda não foi recebida nenhuma resposta.
 *
 * A função `sendData` permite realizar requisições HTTP personalizadas com configurações específicas,
 * como URL do endpoint, método HTTP, corpo da requisição, manipulação de tipo de conteúdo e credenciais.
 */
const useSendData = () => {
    const [loading, setLoading] = useState(false); // Estado de carregamento
    const [error, setError] = useState(null); // Estado de erro
    const [data, setData] = useState(null); // Estado da resposta

    const sendData = useCallback(async (endpoint, dataToSend = null, method = 'POST',
                                        isContentTypeText = true, withCredentials = false) => {
        setLoading(true);
        setError(null);

        try {
            const responseData = await sendDataRequest(endpoint, dataToSend, method, isContentTypeText, withCredentials);
            setData(responseData);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }, []);

    return { sendData, loading, error, data };
};

export default useSendData;
