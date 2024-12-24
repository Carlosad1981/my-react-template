import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BaseLayout from "@fragments/BaseLayout/index.jsx";
import Home from "@pages/Home/index.jsx";
import Error404 from "@pages/Error404";

function About() {
    return <h1>Página Sobre</h1>;
}

function Contact() {
    return <h1>Página de Contato</h1>;
}

function Panel() {
    return <h1>Painel</h1>;
}

function Perfil({texto}) {
    return (
        <>
            <h1>Perfil</h1>
            <div>{texto}</div>
        </>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                {/* Exemplos de páginas. Aqui você deverá colocar as suas rotas conforme sua necessidade. */}
                <Route path="/" element={<BaseLayout><Home/></BaseLayout>}/>
                <Route path="*" element={<Error404/>}/>

                <Route path="/painel" element={<BaseLayout><Panel/></BaseLayout>}/>
                <Route path="/perfil" element={<BaseLayout><Perfil texto="Perfil"/></BaseLayout>}/>
                <Route path="/perfil/informacoes-pessoais" element={<BaseLayout><Perfil texto="Informações Pessoais"/>
                </BaseLayout>}/>
                <Route path="/perfil/endereco" element={<BaseLayout><Perfil texto="Endereço"/></BaseLayout>}/>
                <Route path="/perfil/telefone" element={<BaseLayout><Perfil texto="Telefone"/></BaseLayout>}/>
                <Route path="/perfil/informacoes-bancarias" element={<BaseLayout><Perfil texto="Informações Bancárias"/>
                </BaseLayout>}/>
                <Route path="/sobre" element={<BaseLayout><About/></BaseLayout>}/>
                <Route path="/contato" element={<BaseLayout><Contact/></BaseLayout>}/>
            </Routes>
        </Router>
    );
}

export default App
