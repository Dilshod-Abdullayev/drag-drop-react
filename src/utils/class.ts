import { Student as student } from "./students";

export interface Classes {
    id: number;
    name: string;
    color: string;
    size: number
    students: student[]
}
export interface ClassList {
    classes: Classes[]
}