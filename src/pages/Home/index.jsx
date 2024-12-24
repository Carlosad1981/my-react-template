import {useScreenSize} from "@hooks/useScreenSize";

function Home() {
    const {width, height, isSmallScreen} = useScreenSize(); // Usando o hook para detectar o tamanho da tela

    return (
        <div>
            <h1>{isSmallScreen ? 'Tela pequena' : 'Tela grande'}</h1>
            <h3>Tamanho da tela: {width} x {height}</h3>
            {/* Exemplo de importação de constantes do arquivo ".env" */}
            <div>Nome da aplicação: {import.meta.env.VITE_APP_NAME}</div>
            <div style={{textAlign: "justify"}}>
                Desenvolvido por <strong>Carlos Duarte em 2024</strong>, este boilerplate é ideal para iniciar rapidamente
                projetos React modernos utilizando <strong>Vite, RSuite, Axios e React Router Dom</strong>. Este template
                oferece uma base sólida, otimizada e com <strong>layout responsivo</strong> para o desenvolvimento de
                aplicações com um conjunto de ferramentas populares já configuradas. Além disso, inclui
                <strong>suporte nativo para Progressive Web Apps (PWA)</strong>, permitindo que seu aplicativo seja instalado
                como um app em dispositivos móveis ou desktops, proporcionando uma experiência moderna,
                acessível e compatível com diversos dispositivos.
            </div>
        </div>
    );
}

export default Home;
