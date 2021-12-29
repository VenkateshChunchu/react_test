import { Component, ReactNode } from "react";
import { IEmployee } from "../models/employee";

interface IProps {
  data: IEmployee[];
}

export default class EmployeeList extends Component<IProps, {}> {
  public render(): ReactNode {
    return (
      <>
        <ul>
          {this.props.data &&
            this.props.data.map((x) => {
              return <li key={x.id}>{`${x.fName} ${x.lName}`}</li>;
            })}
        </ul>
      </>
    );
  }
}
