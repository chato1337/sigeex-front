import {
	Form,
	Input,
	Button,
	// Radio,
	Select,
	DatePicker,
	InputNumber,
	Alert,
	message,
} from "antd";
import { useMutation, useQuery } from "react-query";
import { DocumentsApi, PopulationApi } from "../../services/Api";
import { Documento, Documents } from "../../models/documento";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { cleanModalReducer, setModalState } from "../../redux/modalSlice";

const PopulationForm = () => {

	const { data, isSuccess } = useQuery<Documents>('documentList', DocumentsApi.getDocuments)
	const { isLoading, isError, mutate } = useMutation(PopulationApi.createPerson, {
		onMutate: () => {
			showMsj()
		},
		onSuccess: (data, variables, context) => {
			showMsj()
			console.log(data)
			console.log(variables)
			console.log(context)
			dispatch(cleanModalReducer())
		}
	})

	const dispatch = useDispatch();
	const modalState = useSelector((state: RootState) => state.generalModal.modalState)

	const handleSubmit = (val: any) => {
		mutate(val)
		dispatch(setModalState(!modalState))
	}

	const showMsj = () => 
		isLoading 
			? message.loading({ content: 'Loading...', key: 'key' })
			: message.success({ content: 'Loaded!', key: 'key', duration: 2 })

	return (
		<>
			{
				isError && (
					<Alert
						message="Warning"
						description="This is a warning notice about copywriting."
						type="warning"
						showIcon
						closable
					/>
				)
			}
			<Form
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 14 }}
				layout="horizontal"
				onFinish={handleSubmit}
			>
				<Form.Item name="nombres" label="Nombres">
					<Input />
				</Form.Item>
				<Form.Item name="apellidos" label="Apellidos">
					<Input />
				</Form.Item>
				<Form.Item name="documento_id" label="Documento">
					<Select>
						{
							isSuccess && data?.documentos.map((document: Documento) => (
								<Select.Option
									key={document.id}
									value={document.id}
								>
									{ document.name }
								</Select.Option> 
							))
						}
					</Select>
				</Form.Item>
				<Form.Item name="numero_documento" label="Numero">
					<InputNumber />
				</Form.Item>
				<Form.Item name="fecha_nacimiento" label="Fecha de nacimiento">
					<DatePicker />
				</Form.Item>
				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Button type="primary" htmlType="submit">Crear comunero</Button>
				</Form.Item>
			</Form>
		</>
	);
};

export default PopulationForm;
