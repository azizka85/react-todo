import React, { KeyboardEvent, useState } from "react";
import { TodoItem } from './TodoItem';
import { TodosExpander } from './TodosExpander';
import { TodoHeaderInput } from './TodoHeaderInput';
import { TodosContainer } from './TodosContainer';
import { TodosList } from './TodosList';
import { TodoCheckbox } from './TodoCheckbox';
import { TodosListFooter, TodosListRange } from './TodosListFooter';

interface Task {
  id: string,
  completed: boolean,
  text: string
}

function saveTasks(newTasks) {
  localStorage.setItem('data', JSON.stringify(newTasks));
}

function loadTasks(): Task[] {
  try {
    let data = JSON.parse(localStorage.getItem('data'));
    return data || [];
  } catch { }

  return [];
}


export function Todos() {
  const [display, setDisplay] = useState(true);
  const [tasks, setTasks] = useState<Task[]>(loadTasks());
  const [currentRange, setCurrentRange] = useState(TodosListRange.All);

  const itemsLeft = tasks.filter(item => item.completed === false).length;
  const viewTasks = getViewTasks();

  function toggleDisplay() {
    setDisplay(!display);
  }

  function getViewTasks() {
    switch(currentRange) {      
      case TodosListRange.Active:
        return tasks.filter(item => item.completed === false);
      case TodosListRange.Completed:
        return tasks.filter(item => item.completed === true);
      case TodosListRange.All:
      default:
        return tasks;
    }
  }

  function updateTodoCheck(id: string, check: boolean) {
     const task = tasks.find(item => item.id === id);

     if(task !== undefined) {
       task.completed = check;

       const newTasks = [...tasks];

       saveTasks(newTasks);
       setTasks(newTasks);
     }     
  }

  function addTodo(evt: KeyboardEvent) {
    if(evt.key === 'Enter' && evt.target instanceof HTMLInputElement) {
      const target = evt.target as HTMLInputElement;
      const task = target.value.trim();

      if(task !== '') {
        const newTasks = [
          ...tasks,
          {
            id: '' + Date.now(),
            completed: false,
            text: task  
          }
        ];

        saveTasks(newTasks);
        setTasks(newTasks);

        target.value = '';
      }
    }
  }

  function clearCompletedTodos() {
    const newTasks = tasks.filter(item => item.completed === false);

    saveTasks(newTasks);
    setTasks(newTasks);
  }

  function changeTodosListRange(range: TodosListRange) {
    setCurrentRange(range);
  }

  return (
    <TodosContainer>
      <TodosList>
        <TodoItem>
          <TodosExpander display={display} toggleHandler={toggleDisplay} />
          <TodoHeaderInput placeholder="What needs to be done?" type="text" onKeyUp={addTodo} /> 
        </TodoItem>
        {display && viewTasks.map(item => (
          <TodoItem key={item.id}>
            <TodoCheckbox {...item} onChecked={updateTodoCheck} />
          </TodoItem>
        ))}
        <TodosListFooter 
          itemsLeft={itemsLeft} 
          currentRange={currentRange} 
          onClearCompletedTodos={clearCompletedTodos} 
          onSelected={changeTodosListRange}
        />
      </TodosList>
      </TodosContainer>
  );
}


