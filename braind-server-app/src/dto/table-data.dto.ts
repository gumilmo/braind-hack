export class TableDataDto {
    TableInfo: TableInfo;
    Items: unknown[];
}

export class TableInfo {
    Columns: ColumnInfo[];
}

export class ColumnInfo {
    Accessor: string;
    Header: string;
}