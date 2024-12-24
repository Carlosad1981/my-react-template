import AppProvider from '@contexts/AppProvider.jsx';
import {createRoot} from 'react-dom/client';
import {useTheme} from "@hooks/useTheme";
import ptBR from 'rsuite/locales/pt_BR';
import {CustomProvider} from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import App from './App.jsx';

export const Root = () => {
    return (
        <AppProvider>
            <ThemeWrapper/>
        </AppProvider>
    );
};

export const ThemeWrapper = () => {
    const {theme} = useTheme();

    return (
        <CustomProvider theme={theme} locale={ptBR}>
            <App/>
        </CustomProvider>
    );
};

createRoot(document.getElementById('root')).render(<Root/>);