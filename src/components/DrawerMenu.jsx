import {Avatar, Button, Divider, Drawer} from 'rsuite';
import './DrawerMenu.styles.css';

const DrawerMenu = ({open, setOpen, onSelect, menuTopOptions, menuBottomOptions}) => {
    const handleClose = (item) => {
        setOpen(false);
        onSelect(item);
    }

    const showButton = (item, index) => {
        return (item.eventKey === "---" ? (
            <Divider style={{margin: "5px"}} id={index}
                     key={`separator-${index}`}/>) : (
            <Button style={{justifyContent: 'flex-start', width: "100%"}}
                    appearance="subtle"
                    id={index}
                    key={item.eventKey}
                    onClick={() => handleClose(item)}
                    startIcon={item.icon ? item.icon : null}>
                {item.label}
            </Button>))
    };

    return (<div><Avatar circle onClick={() => setOpen(true)}>C</Avatar>
        <Drawer className="drawer-menu"
                placement='left' open={open}
                onClose={() => setOpen(false)}>
            <Drawer.Header>
                <Drawer.Title>
                    <div>Carlos Duarte</div>
                    <div style={{fontSize: "12px", fontWeight: "normal"}}>https://github.com/Carlosad1981</div>
                </Drawer.Title>
            </Drawer.Header>
            <Drawer.Body className="drawer-body">
                <div style={{
                    display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%"
                }}>
                    <div>
                        {menuTopOptions.map((item, index) => showButton(item, index))}
                    </div>
                    <div style={{marginBottom: '50px'}}>
                        {menuBottomOptions.map((item, index) => showButton(item, index))}
                    </div>
                </div>
            </Drawer.Body>
        </Drawer>
    </div>);
};

export default DrawerMenu;
