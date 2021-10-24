import { Modal } from "antd";
import { useDispatch } from "react-redux";
import { setModalState } from "../../redux/modalSlice";

type GeneralModalProps = {
    modalTitle: string,
    modalState: boolean,
    renderContent: any,
    actionCallback: () => void,
}

const GeneralModal = ({ modalTitle, modalState, renderContent, actionCallback }:GeneralModalProps) => {
	const dispatch = useDispatch();
	
	const handleShowModal = () => dispatch(setModalState(!modalState))

	return (
		<div>
			<Modal
				title={modalTitle}
				centered
				visible={modalState}
				onCancel={() => handleShowModal()}
				footer={false}
			>
				{
                    renderContent && renderContent()
                }
				{/* <Button onClick={actionCallback}>do something</Button> */}
			</Modal>
		</div>
	);
};

export default GeneralModal;
