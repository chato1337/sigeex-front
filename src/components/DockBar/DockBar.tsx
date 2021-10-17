import "./DockBarStyles.scss";
import MenuImg from "../../assets/img/menu1.png";
import { Link } from "react-router-dom";

const DockBar = () => {

    const menuItems = [
        {
            name: 'menu 000',
            link: '/',
            img: MenuImg
        },
        {
            name: 'population 001',
            link: '/population',
            img: MenuImg
        },
        {
            name: 'analitycs 002',
            link: '/analytics',
            img: MenuImg
        },
        {
            name: 'menu 004',
            link: '#',
            img: MenuImg
        },
    ]

	return (
		<div id="dock-container">
			<div id="dock">
				<ul>
					{
                        menuItems.map(item => (
                            <DockItem
                                labelName={item.name}
                                dockLink={item.link}
                                dockImg={item.img}
                                key={item.name}
                            />
                        ))
                    }
				</ul>
			</div>
		</div>
	);
};

export default DockBar;

type DockItemProps = {
    labelName: string,
    dockLink: string,
    dockImg: string
}

const DockItem = ({ labelName, dockLink, dockImg }: DockItemProps) => {
    return (
        <li>
            <span>{ labelName }</span>
            <Link to={ dockLink }>
                <img src={ dockImg } alt="pointer icon" />
            </Link>
        </li>
    )
}