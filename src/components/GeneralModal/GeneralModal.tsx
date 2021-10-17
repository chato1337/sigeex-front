import { Modal } from "antd";

type GeneralModalProps = {
    modalTitle: string,
    modalState: boolean,
    renderContent: any,
    actionCallback: () => void,
}

const GeneralModal = ({ modalTitle, modalState, renderContent, actionCallback }:GeneralModalProps) => {
	return (
		<div>
			<Modal
				title={modalTitle}
				centered
				visible={modalState}
				onOk={() => actionCallback()}
				onCancel={() => actionCallback()}
			>
				{
                    renderContent()
                }
			</Modal>
		</div>
	);
};

export default GeneralModal;
