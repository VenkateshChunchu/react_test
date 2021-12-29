import { IEmployee } from "../models/employee";
import { getData } from "../services/employeeservice";

class EmployeeViewStore {
    public GetEmployees():Promise<IEmployee[]> {
        return getData().then((resposnse: any) => resposnse);
    }
}

export const employeeViewStore = new EmployeeViewStore();