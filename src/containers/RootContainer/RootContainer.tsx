import DockBar from "../../components/DockBar/DockBar"
import "./RootContainerStyles.scss"
import { Switch } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { setAutoDarkMode } from "../../redux/themeSlice";
import { RootState } from "../../app/store";
import GeneralModal from "../../components/GeneralModal/GeneralModal";

const RootContainer = ({ children }: any) => {
    const themeState = useSelector((state:RootState) => state.theme.value)
    const modalState = useSelector((state: RootState) => state.generalModal.modalState)
    const modalTitle = useSelector((state: RootState) => state.generalModal.modalTitle)
    const modalContent = useSelector((state: RootState) => state.generalModal.renderContent)
    const modalCallback = useSelector((state: RootState) => state.generalModal.actionCallback)
    const dispatch = useDispatch()

    const handleClick = () => dispatch(setAutoDarkMode())

    return (
        <div id="root-app" className={ themeState ? 'light-mode' : 'dark-mode' }>
            <Switch
                checked={themeState}
                onChange={handleClick}
                checkedChildren="Light"
                unCheckedChildren="Dark"
            />
            { children }
            <DockBar />
            <GeneralModal
                modalState={modalState}
                modalTitle={modalTitle}
                renderContent={modalContent}
                actionCallback={modalCallback}
            />
        </div>
    )
}

export default RootContainer
