import SidebarApp from "@fragments/SidebarApp/index.jsx";
import HeaderApp from "@fragments/HeaderApp/index.jsx";
import FooterApp from "@fragments/FooterApp/index.jsx";
import {useIsSmallScreen} from "@hooks/useScreenSize";
import {Container} from "rsuite";
import '../../index.css';

const BaseLayout = ({ children }) => {
    const isSmallScreen = useIsSmallScreen();

    return (
        <Container className="mainStyle">
            <HeaderApp />
            <div className="contentStyle">
                {!isSmallScreen && (
                    <aside style={{ backgroundColor: 'rgba(128, 128, 128, 0.1)' }}>
                        <SidebarApp />
                    </aside>
                )}
                <main className="scrollableContent">
                    <div>{children}</div>
                </main>
            </div>
            <FooterApp />
        </Container>
    );
};

export default BaseLayout;