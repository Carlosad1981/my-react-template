// Importação dos ícones
import {EmailFill, Gear, BarLineChart} from "@rsuite/icons";
import {LogOutIcon, Moon, Sun, Home} from "lucide-react";
import User from "@rsuite/icons/legacy/User";
// Importação dos Hooks
import {useScreenSize} from "@hooks/useScreenSize";
import {useNavigate} from "react-router-dom";
import {useTheme} from '@hooks/useTheme';
import {useState} from "react";
// Importação dos componentes
import AvatarMenu from "@components/AvatarMenu";
import DrawerMenu from "@components/DrawerMenu";
import {IconButton} from "rsuite";
// Importação dos estilos
import "./HeaderApp.styles.css";

const HeaderApp = () => {
    const {isSmallScreen} = useScreenSize();
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const {theme, toggleTheme} = useTheme();
    const menuOptions = [
        {eventKey: "home", label: "Home", to: "/", icon:<Home size={15}/>},
        {eventKey: "perfil", label: "Meu Perfil", to: "/perfil", icon:<User/>},
        {eventKey: "---"}, // Adiciona um separador no menu
        {eventKey: "config", label: "Configurações", to: "/config", icon: <Gear/>}, // Exemplo de rota inexistente (erro 404)
        {eventKey: "contato", label: "Contato", to: "/contato", icon: <EmailFill/>},
        {eventKey: "---"},
        {eventKey: "logout", label: "Sair", to: "/logout", icon: <LogOutIcon size={15}/>},
    ];

    const menuTopOptions = [
        {eventKey: "home", label: "Home", to: "/", icon:<Home size={15}/>},
        {eventKey: "painel", label: "Painel", to: "/painel", icon: <BarLineChart/>},
        {eventKey: "---"}, // Adiciona um separador no menu
        {eventKey: "link1", label: "Link 1", to: "/link1"},
        {eventKey: "link2", label: "link 2", to: "/link2"},
        {eventKey: "link3", label: "link 3", to: "/link3"},
        {eventKey: "link4", label: "link 4", to: "/link4"},
    ];

    const handleSelect = (evento) => {
        navigate(evento?.to); // Navega, se definido
    };

    const drawerMenu = () => {
        return <DrawerMenu open={open} menuTopOptions={menuTopOptions} menuBottomOptions={menuOptions}
                           setOpen={setOpen} onSelect={handleSelect} />;
    };

    const avatarMenu = () => {
        return <AvatarMenu username="Carlos Duarte" menuOptions={menuOptions} onSelect={handleSelect}/>;
    };

    return (
        <header>
            <div className="header-div">
                {isSmallScreen ? drawerMenu() : avatarMenu()}
            </div>
            <div>
                <IconButton onClick={toggleTheme} appearance="link" icon={theme === 'light' ? <Moon/> : <Sun/>}/>
            </div>
        </header>
    );
};

export default HeaderApp;
