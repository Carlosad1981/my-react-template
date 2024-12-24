import {Avatar, Dropdown} from "rsuite";

const AvatarMenu = ({username, avatarUrl, menuOptions, onSelect}) => {

    const renderToggle = props => (
        <Avatar circle {...props} src={avatarUrl}>
            {username[0].toUpperCase()}
        </Avatar>
    );

    return (
        <>
            <Dropdown renderToggle={renderToggle} style={{zIndex: 1000}}>
                <Dropdown.Item panel style={{padding: 10, minWidth: 160}}>
                    <div><strong>{username}</strong></div>
                    <div>https://github.com/Carlosad1981</div>
                </Dropdown.Item>

                {menuOptions.map((item, index) => (
                    item.eventKey === "---" ?
                        <Dropdown.Separator key={`separator-${index}`}/> :
                        <Dropdown.Item
                            key={item.eventKey}
                            eventKey={item.eventKey}
                            onSelect={() => onSelect(item)}
                            icon={item.icon ? item.icon : null}>
                            {item.label}
                        </Dropdown.Item>
                ))}
            </Dropdown>
        </>
    );
};

export default AvatarMenu;