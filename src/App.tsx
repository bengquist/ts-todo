import * as React from "react";
import "./AaReset.css";
import "./App.css";

import Button from "./components/Button";
import Input from "./components/Input";
import InputWrapper from "./components/InputWrapper";
import TaskWrapper from "./components/TaskWrapper";

export interface ITask {
  task: string;
  id: number;
}

let id: number = 1;

class App extends React.Component {
  public state = {
    input: "",
    list: [{ task: "Walk Dog", id: 0 }]
  };

  public inputHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ input: e.currentTarget.value });
  };

  public addTask = (task: ITask): any => {
    this.setState({ list: [...this.state.list, task], input: "" });
    id += 1;
  };

  public removeTask = (taskId: number): void => {
    const listCopy: Array<{ task: string; id: number }> = Array.from(
      this.state.list
    );

    listCopy.forEach((task, index) => {
      if (task.id === taskId) {
        listCopy.splice(index, 1);
      }
    });

    this.setState({ list: listCopy });
  };

  public displayList = (): JSX.Element[] => {
    return this.state.list.map(task => (
      <InputWrapper>
        <p key={task.id}>{task.task}</p>
        <button onClick={this.removeTask.bind(this, task.id)}>Completed</button>
      </InputWrapper>
    ));
  };

  public render() {
    return (
      <div className="App">
        <InputWrapper>
          <Input value={this.state.input} onChange={this.inputHandler} />
          <Button
            onClick={this.addTask.bind(this, { task: this.state.input, id })}
            primary={true}
          >
            Add Task
          </Button>
        </InputWrapper>
        <TaskWrapper>{this.displayList()}</TaskWrapper>
      </div>
    );
  }
}

export default App;
