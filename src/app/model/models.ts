export interface CellModel {
  key: string;
  value: string | number | boolean;
}

export interface ColumnModel {
  key: string;
  width: string;
  label: string;
}

export interface RowModel {
  cells: CellModel[];
}

export interface TableModel {
  columns: ColumnModel[]
  rows: RowModel[]
  footerRows: RowModel[]
}
