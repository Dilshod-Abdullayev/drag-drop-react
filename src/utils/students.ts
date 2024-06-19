export interface Student {
    id: string;
    name: string;
    lastname: string;
    age: number;
    male: string;
    course: string;
}
export interface StudentsList {
    students: Student[];
}