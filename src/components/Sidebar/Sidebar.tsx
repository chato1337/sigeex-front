import { Menu } from "antd";
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const { SubMenu } = Menu;

const Sidebar = () => {
    const themeState = useSelector((state:RootState) => state.theme.value)
    const [current, setCurrent] = useState('1')
        
    const handleClick = (e: any) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
	return (
        <>
            <Menu
                theme={themeState ? 'dark' : 'light'}
                onClick={handleClick}
                style={{ width: 256 }}
                defaultOpenKeys={["sub1"]}
                selectedKeys={[current]}
                mode="inline"
            >
                <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                    <Menu.Item key="1">Option 1</Menu.Item>
                    <Menu.Item key="2">Option 2</Menu.Item>
                    <Menu.Item key="3">Option 3</Menu.Item>
                    <Menu.Item key="4">Option 4</Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub2"
                    icon={<AppstoreOutlined />}
                    title="Navigation Two"
                >
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                </SubMenu>
            </Menu>
        </>
	);
};

export default Sidebar;
