import {useScreenSize} from "@hooks/useScreenSize";
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {Button, Container} from 'rsuite';
import {Camera} from 'lucide-react';
import './Error404.styles.css';


const Error404 = () => {
    const [position, setPosition] = useState({x: 0, y: 0});
    const navigate = useNavigate();
    const {width, height} = useScreenSize();

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX / width - 0.5) * 80;
            const y = (e.clientY / height - 0.5) * 80;
            setPosition({x, y});
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [height, width]);

    return (
        <Container className="error-page">
            <div className="error-content">
                <div
                    className="error-number"
                    style={{
                        transform: `translate(${position.x}px, ${position.y}px)`
                    }}
                >
                    404
                </div>

                <div
                    className="error-icon"
                    style={{
                        transform: `translate(${-position.x}px, ${-position.y}px)`
                    }}
                >
                    {<Camera size="150px" strokeWidth="0.5px" />}
                </div>

                <h2 className="error-title">
                    Oops! Página não encontrada
                </h2>

                <p className="error-message">
                    Parece que você se perdeu no caminho. A página que você está procurando não existe ou foi movida.
                </p>

                <div className="error-buttons">
                    <Button appearance="default" onClick={() => window.history.back()}>
                        Voltar
                    </Button>
                    <Button appearance="primary" onClick={() => navigate("/")}>
                        Página Inicial
                    </Button>
                </div>
            </div>
        </Container>);
};

export default Error404;