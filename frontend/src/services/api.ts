import { api } from '../environments';
import { Injectable } from '@angular/core';
import { iTask } from '../types';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  loginUser = (): Promise<iTask[]> => {
    const data = fetch(`${api.baseUrl}/login`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then(res => {
          localStorage.setItem('token',res.token)
          return res})
      .catch((err) => console.log(err));

      return data;
  };

  createUser = (): Promise<iTask[]> => {
    const data = fetch(`${api.baseUrl}/users`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((res) => res.results)
      .catch((err) => console.log(err));

    return data;
  };

  getUser = (userId : number): Promise<iTask[]> => {
    const data = fetch(`${api.baseUrl}/users/${userId}`, {
      method: 'GET',
      headers: { 
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${localStorage.getItem('token')}`
      },
    })
      .then((res) => res.json())
      .then((res) => res.results)
      .catch((err) => console.log(err));

    return data;
  };

  getAllTasks = (): Promise<iTask[]> => {
    const data = fetch(`${api.baseUrl}/tasks`, {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => res.json())
      .then((res) => res.results)
      .catch((err) => console.log(err));

    return data;
  };

  createTask = (task: any): Promise<iTask> => {
    const data = fetch(`${api.baseUrl}/tasks`, {
      body:task,
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));

    return data;
  };

  getTask = (taskId: number): Promise<iTask> => {
    const data = fetch(`${api.baseUrl}/tasks/${taskId}`, {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));

    return data;
  };

  editTask = (taskData:any, taskId: number): Promise<iTask> => {
    const data = fetch(`${api.baseUrl}/tasks/${taskId}`, {
      body:taskData,
      method: 'PATCH',
      headers: { 
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));

    return data;
  };

  deleteTask = (taskId: number): Promise<iTask> => {
    const data = fetch(`${api.baseUrl}/tasks/${taskId}`, {
      method: 'DELETE',
      headers: { 
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));

    return data;
  };

}
