import { Button, Col, PageHeader, Row, Spin } from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./PopulationStyle.scss"
import { useQuery } from 'react-query'
import { PopulationApi } from "../../services/Api";
import PopulationTable from "./PopulationTable";
import { Persona } from "../../models/Persona";
import PopulationForm from "./PopulationForm";

const Population = () => {
    const { data, isLoading,isSuccess } = useQuery<any>('populationList', PopulationApi.getPopulationList)

    // console.log(JSON.parse(JSON.stringify(data)))

	return (
        <div>
            <Row>
                <Col>
                    <h2>Population List:</h2>
                </Col>
                <Col>
                    <Button>Add new</Button>
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
            <PopulationForm />
        </div>
	);
};

export default Population;
