// Importando os ícones
import {Gear, BarLineChart} from "@rsuite/icons";
import User from "@rsuite/icons/legacy/User"
import {Home, LogOut} from "lucide-react";
// Importando os hooks
import {useScreenSize} from "@hooks/useScreenSize";
import {useNavigate} from "react-router-dom";
import {useAuth} from "@hooks/useAuth";
// Importando os componentes
import {Nav} from "rsuite";
// Importando os estilos
import "./FooterApp.styles.css";

const Footer = () => {
    const {logout} = useAuth();
    const {width, isSmallScreen} = useScreenSize();
    const navigate = useNavigate();

    const styles = {
        item: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            ...(width < 665 && {flexDirection: 'column'})
        }
    };

    const linksFooter = [
        {icon: Home, to: '/', label: 'Home'},
        {icon: User, to: '/perfil', label: 'Perfil'},
        {icon: BarLineChart, to: '/painel', label: 'Painel'},
        {icon: Gear, to: '/config', label: 'Configurações'},
        {icon: LogOut, to: '#', label: 'Sair'}
    ];

    const handleNavigation = (to) => {
        if (to === '#') {
            logout();
            console.log('Executa logout ou outra funcionalidade necessária');
        } else {
            navigate(to);
        }
    };

    const renderPequeno = () => (
        <Nav justified className="footer-pequeno">
            {linksFooter.map(({icon: Icon, to, label}, index) => (
                <Nav.Item
                    key={index}
                    style={styles.item}
                    onClick={() => handleNavigation(to)}
                    icon={<Icon size="16"/>}>
                    {width < 435 ? null : label}
                </Nav.Item>
            ))}
        </Nav>
    );

    return (
        <footer style={{backgroundColor: "var(--rs-gray-500)"}}>
            {isSmallScreen ? renderPequeno() : null}
            <p style={{padding: "10px 15px", textAlign: "center"}}>
                Desenvolvido por <strong>Carlos Duarte</strong>
            </p>
        </footer>
    );
};

export default Footer;