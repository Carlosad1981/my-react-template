import {useEffect, useState} from "react";
import {Sidenav, Nav} from "rsuite";
import {useNavigate} from "react-router-dom";
import User from "@rsuite/icons/legacy/User";
import {EmailFill, Gear, BarLineChart} from "@rsuite/icons";

const SidebarApp = () => {
    const [activeKey, setActiveKey] = useState(() => localStorage.getItem("activeKey") || "1");
    const [openKeys, setOpenKeys] = useState(() => {
        try {
            const savedKeys = localStorage.getItem("openKeys");
            return savedKeys ? JSON.parse(savedKeys) : ["3"];
        } catch {
            return ["3"]; // Fallback mais seguro
        }
    });
    const [expanded, setExpand] = useState(() => {
        try {
            const savedExpand = localStorage.getItem("expanded");
            return savedExpand === null ? true : JSON.parse(savedExpand);
        } catch {
            return true; // Fallback mais seguro
        }
    });

    const navigate = useNavigate();

    // Sincronizando os estados com localStorage
    useEffect(() => {
        localStorage.setItem("activeKey", activeKey);
    }, [activeKey]);

    useEffect(() => {
        localStorage.setItem("openKeys", JSON.stringify(openKeys));
    }, [openKeys]);

    useEffect(() => {
        localStorage.setItem("expanded", JSON.stringify(expanded));
    }, [expanded]);

    const handleNavSelect = (key, to) => {
        setActiveKey(key);
        if (to) {
            navigate(to);
        }
    };

    return (
        <Sidenav expanded={expanded} openKeys={openKeys} onOpenChange={setOpenKeys}>
            <Sidenav.Body>
                <Nav activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
                    <Nav.Item eventKey="1" icon={<BarLineChart/>}
                              onClick={() => handleNavSelect("1", "/")}>
                        Painel</Nav.Item>
                    <Nav.Menu eventKey="2" title="Perfil" icon={<User/>}>
                        <Nav.Item eventKey="2-1"
                                  onClick={() => handleNavSelect("2-1", "/perfil/informacoes-pessoais")}>
                            Informações Pessoais</Nav.Item>
                        <Nav.Item eventKey="2-2"
                                  onClick={() => handleNavSelect("2-2", "/perfil/endereco")}>
                            Endereço</Nav.Item>
                        <Nav.Item eventKey="2-3"
                                  onClick={() => handleNavSelect("2-3", "/perfil/telefone")}>
                            Telefone</Nav.Item>
                        <Nav.Item eventKey="2-4"
                                  onClick={() => handleNavSelect("2-4", "/perfil/informacoes-bancarias")}>
                            Informações Bancárias</Nav.Item>
                    </Nav.Menu>
                    <Nav.Item eventKey="3" icon={<Gear/>}
                              onClick={() => handleNavSelect("3", "/configuracoes")}>
                        Exemplo erro 404</Nav.Item>
                    <Nav.Item eventKey="4"
                              icon={<EmailFill/>}
                              onClick={() => handleNavSelect("4", "/contato")}>
                        Contato</Nav.Item>
                </Nav>
            </Sidenav.Body>
            <Sidenav.Toggle onToggle={(expanded) => setExpand(expanded)}/>
        </Sidenav>
    );
};

export default SidebarApp;
