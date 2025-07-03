// Type for a single header/column
export type TableHeader = {
    key: string;
    label: string;
    className?: string;
};

// Props for the Table component
export interface TableProps {
    headers: TableHeader[];
    data: Record<string, unknown>[];
    showRowNumbers?: boolean;
    customRender?: (key: string, row: Record<string, unknown>) => React.ReactNode | null;
    className?: string;
}

export function Table({
    headers,
    data,
    showRowNumbers = false,
    customRender,
    className = '',
}: TableProps) {
    return (
        <div className={`overflow-x-auto w-full ${className}`}>
            <table className="min-w-full table-fixed border-collapse text-sm">
                <thead>
                    <tr className="border-b-2 border-gray-300 text-left">
                        {showRowNumbers && <th className="px-3 py-2">#</th>}
                        {headers.map((header) => (
                            <th
                                key={header.key}
                                className={`px-3 py-2 whitespace-nowrap ${header.className || ''}`.trim()}
                            >
                                {header.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? (
                        <tr className="h-40 border border-gray-200">
                            <td colSpan={headers.length + (showRowNumbers ? 1 : 0)} className="text-center py-4 text-gray-500">
                                No rows found
                            </td>
                        </tr>
                    ) : (
                        data.map((row, rowIndex) => {
                            return (
                                <tr key={rowIndex} className="border-b border-gray-200">
                                    {showRowNumbers && <td className="px-3 py-2 text-gray-700">{rowIndex + 1}</td>}
                                    {headers.map((header) => {
                                        const value = row[header.key as keyof Record<string, unknown>];
                                        return (
                                            <td key={header.key as string} className={`px-3 py-2 whitespace-nowrap ${header.className ?? ''}`.trim()}>
                                                {customRender && customRender(header.key, row) ? customRender(header.key, row) : String(value ?? '--')}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })
                    )}
                </tbody>
            </table>
        </div>
    );
}