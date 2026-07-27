export type Operator =
  | "="
  | "!="
  | ">"
  | "<"
  | ">="
  | "<="
  | "contains";

export interface Filter {
  field: string;
  operator: Operator;
  value: string | number;
}

export interface QueryIR {
  entity: string;
  metric: string;
  filters: Filter[];
  groupBy?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}