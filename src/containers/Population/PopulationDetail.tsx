import AntDesignOutlined from '@ant-design/icons/lib/icons/AntDesignOutlined';
import { Avatar, Col, Row, Switch } from 'antd';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Persona } from '../../models/Persona';
import { PopulationApi } from '../../services/Api';

type ParamTypes = {
    id: any
}

type PersonTypes = {
    data: Persona
}

const PopulationDetail = () => {
    let { id } = useParams<ParamTypes>();
    const { data, isSuccess } = useQuery<any>(['Person', id ], () => PopulationApi.getSinglePerson(id))
    const [mode, setMode] = useState(false)

    const handleClick = () => setMode(!mode)

    return (
        <div>
            <Switch onChange={handleClick} />
            { isSuccess && (
                <div>
                    { mode ? <EditPerson data={data.personas as Persona} /> : <ShowPerson data={data.personas as Persona} /> }
                </div>
            )}
        </div>
    )
}

export default PopulationDetail


const EditPerson = ({ data }:PersonTypes) => {
    // console.log(data)
    return (
        <div className="edit-container">
            edit mode
        </div>
    )
}

const ShowPerson = ({ data }:PersonTypes) => {
    // console.log(data)
    return (
        <div className="edit-container">
            <Row>
                <Col>
                <Avatar
                    size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                    icon={<AntDesignOutlined />}
                />
                </Col>
                <Col>
                    <h2>Nombre Completo: { `${data.nombres} ${data.apellidos}` }</h2>
                    <span>Fecha de Nacimiento: { data.fecha_nacimiento }</span>
                </Col>
            </Row>
        </div>
    )
}