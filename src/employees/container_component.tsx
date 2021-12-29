import React from "react";
import { employeeViewStore } from "../store/employee.view.store";
import EmployeeList from "./employee_list";

interface IContainerState {
  empdata: any[];
}

export class MyContainer extends React.Component<{}, IContainerState> {
  constructor(props: any) {
    super(props);
    this.state = {
      empdata: [],
    };
  }

  componentDidMount() {
    employeeViewStore.GetEmployees().then((res) => {
      this.setState({
        empdata: res,
      });
    });
  }

  public render(): React.ReactNode {
    const { empdata } = this.state;
    let content: any = "Loading...";
    if (empdata && Array.isArray(empdata)) {
      content = <EmployeeList data={empdata} />;
    }
    return (
      <>
        <div>{content}</div>
      </>
    );
  }
}
