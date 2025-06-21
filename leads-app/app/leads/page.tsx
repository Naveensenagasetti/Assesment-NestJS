
import Link from "next/link";
import Grid from "./grid/page";

const LeadsPage = () => {
    const rowData = [
        { id: 1, name: 'Alice', age: 30 },
        { id: 2, name: 'Bob', age: 24 },
        { id: 3, name: 'Charlie', age: 35 },
    ];

    const columnDefs = [
        {
            field: 'id', headerName: 'ID'
        },
        { field: 'name', headerName: 'Name' },
        { field: 'age', headerName: 'Age' },
    ];
    return (
        <div className="p-4">
            <h2 className="text-2xl my-2">Welcome to Marketing page</h2>
            <Link className="underline" href="/">Go to Home</Link>
            <Link className="underline" href="/leads/create">Create Lead</Link>
            
            <div className="my-4">
                <h3 className="text-xl">Leads List</h3>

                <Grid
                    rowData={rowData}
                    columnDefs={columnDefs}
                />
            </div>
        </div>
    )
}
export default LeadsPage;