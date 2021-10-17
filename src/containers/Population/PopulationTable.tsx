import { Button, Table } from 'antd'
import { Persona } from '../../models/Persona'
import { useHistory } from "react-router-dom"

type PopulationTableProps = {
    tableData: Persona[]
}

const PopulationTable = ({ tableData }: PopulationTableProps) => {
    const columns = [
        {
            title: 'name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'lastName',
            dataIndex: 'lastName',
            key: 'lastName'
        },
        {
            title: 'typeDocument',
            dataIndex: 'typeDocument',
            key: 'typeDocument'
        },
        {
            title: 'number',
            dataIndex: 'number',
            key: 'number'
        },
        {
            title: 'birthDate',
            dataIndex: 'birthDate',
            key: 'birthDate'
        },
        {
            title: 'actions',
            dataIndex: 'actions',
            key: 'actions'
        }
    ]

    const dataSource = tableData.map((item:Persona) => {
        return {
            name: item.nombres,
            lastName: item.apellidos,
            typeDocument: item.documento.name,
            number: item.numero_documento,
            birthDate: item.fecha_nacimiento,
            actions: <ActionButtons id={ item.id } />
        }
    })
    return (
        <div>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    )
}

type ActionButtonsProps = {
    id: number
}

const ActionButtons = ({ id }:ActionButtonsProps) => {
    const history = useHistory();

    const handleClick = (action:string, id:number):void => {
        if (action==='view'){
            history.push(`/population/${id}`)
        }else if(action==='edit'){
            // history.push(`/edit/${id}`)
        }else if(action==='delete') {
            // history.push(`/delete/${id}`)
        }
    }

    return (
        <div className="buttons">
            <Button type="primary" onClick={() => handleClick('view', id)}>
                View
            </Button>
            <Button type="primary"  onClick={() => handleClick('edit', id)}>
                Edit
            </Button>
            <Button type="primary" danger onClick={() => handleClick('delete', id)}>
                Delete
            </Button>
        </div>
    )
}

export default PopulationTable
