/*
Lista de Tarefas
Author: Sérgio Mercês
14 de dezembro de 2023
*/

const form = document.querySelector('#todo-form');
const input = document.querySelector('#task-title-input');
const button = document.querySelector('#add-task-button');
const list = document.querySelector('#todo-list');

//array com todas tarefas
let tasks = []; 

form.addEventListener('submit', (evento) => {
   //função que impede que a página seja recarregada quando o form for submetido
   evento.preventDefault();
   
   const taskTitle = input.value;
   
   //validação para tarefas com ao menos rês caracteres
   if(taskTitle.length < 3) {
      alert('Digite uma tarefa válida!');
      console.error('Digite uma tarefa válida!');
      return;
   }
   
   //adicionar tarefas no HTML
   tasks.push(taskTitle);

   const li = document.createElement('li');
   const checkbox = document.createElement('input');
   const span = document.createElement('span');
   const remover = document.createElement('button');

   checkbox.setAttribute('type', 'checkbox');
   span.textContent = taskTitle;
   remover.textContent = 'Remover';

   li.appendChild(checkbox);
   li.appendChild(span);
   li.appendChild(remover);

   list.appendChild(li);

   input.value = "";
});