export class TableData {
    TableInfo!: TableInfo;
    Items!: any[];
}

export class TableInfo {
    Columns!: ColumnInfo[];
}

export class ColumnInfo {
    Accessor!: string;
    Header!: string;
}