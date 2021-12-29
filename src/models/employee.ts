// We can  also create the models like below and serilaize and deserialize the response
// export class Employee {
//     // @serializable
//     public id: number;
//     // @serializable
//     public fName: string;
//     // @serializable
//     public lName: string;
// }

// Just to simply return the type of response
export interface IEmployee {
    id: number;
    fName: string;
    lName: string;
}

export interface IEmployeeList {
    empList: IEmployee[];
}