'use client';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import Link from "next/link";
import { useRouter } from 'next/navigation';


ModuleRegistry.registerModules([AllCommunityModule]);
const Grid = ({ rowData, columnDefs }) => {
    const defaultColDef = {
        flex: 1,
        minWidth: 100,
        sortable: true,
        filter: true,
        resizable: true,
    };
    const router = useRouter();
    return (
        <div style={{ height: 300, width: '100%' }}>
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                pagination={true} // Example feature
                paginationPageSize={2}
                onRowClicked={(event) => {

                    // Navigate to the lead details page when a row is clicked
                    const leadId = event.data.id; // Assuming 'id' is the unique identifier for leads
                    router.push(`/leads/get/${leadId}`);
                }
                }
            />
        </div>
    );
}
export default Grid;