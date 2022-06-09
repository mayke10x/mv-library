import { DataTable as DataTablePrime} from 'primereact/datatable';
import { Column } from 'primereact/column';

import { IDatatableProps } from './datatable.types';

export default function Datatable({ values }: IDatatableProps) {
    return (
        <DataTablePrime
            value={values}
            paginator
            rows={5}
        >
            <Column
                header="iD"
                field="id"
                filter
                filterMatchMode="contains"
            />

            <Column
                header="Nome"
                field="nome"
                filter
                filterMatchMode="contains"
            />

            <Column
                header="Categoria"
                field="categoria"
                filter
                filterMatchMode="contains"
            />

            <Column
                header="Autor"
                field="autor"
                filter
                filterMatchMode="contains"
            />

            <Column
                header="Data Publicação"
                field="data_de_publicacao"
                filter
                filterMatchMode="contains"
            />

            <Column
                header="Ações"
                field="btnActions"
            />
        </DataTablePrime>
    )
}