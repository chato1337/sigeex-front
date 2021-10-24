import { Button, Col, Row, Spin } from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./PopulationStyle.scss"
import { useQuery } from 'react-query'
import { PopulationApi } from "../../services/Api";
import PopulationTable from "./PopulationTable";
import { Persona } from "../../models/Persona";
import PopulationForm from "./PopulationForm";
import { setModalTitle, setModalState, setRenderContent, setActionCallback } from "../../redux/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";

const Population = () => {
    const { data, isLoading,isSuccess } = useQuery<any>('populationList', PopulationApi.getPopulationList)

    const dispatch = useDispatch();
    const modalState = useSelector((state: RootState) => state.generalModal.modalState)
    // console.log(JSON.parse(JSON.stringify(data)))

    const doSomething = () => {
        // dispatch(setModalState(!modalState))
        console.log('hhi master')
    }

    const handleShowModal = () => {
        dispatch(setModalTitle('Create new person!'))
        dispatch(setRenderContent(() => <PopulationForm />))
        dispatch(setActionCallback(doSomething))
        dispatch(setModalState(!modalState))
    }

	return (
        <div>
            <Row>
                <Col>
                    <h2>Population List:</h2>
                </Col>
                <Col>
                    <Button onClick={handleShowModal}>Add new</Button>
                </Col>
            </Row>
            <Row className="population-main">
                <Col className="population-main__sidebar">
                    <Sidebar />
                </Col>
                <Col className="population-main__content">
                    {
                        isLoading && (
                            <Spin />
                        )
                    }
                    {
                        isSuccess && (
                            <PopulationTable tableData={ data.personas as Persona[] } />
                        )
                    }
                </Col>
            </Row>
        </div>
	);
};

export default Population;
