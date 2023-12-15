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
   tasks.push({
      title: taskTitle,
      done: false
   });

   //criar elementos html
   const li = document.createElement('li');
   const checkbox = document.createElement('input');
   const span = document.createElement('span');
   const remover = document.createElement('button');

   //tributos dos elementos html
   checkbox.setAttribute('type', 'checkbox');
   span.textContent = taskTitle;
   remover.textContent = 'Remover';

   //marcar desmarcar checkbox
   checkbox.addEventListener('change', (evento) => {
      const endTask = evento.target.parentElement;
      const strikeTask = endTask.querySelector('span');
      const doneTask = evento.target.checked;

      if(doneTask) {
         strikeTask.style.textDecoration = 'line-through';
      } else {
         strikeTask.style.textDecoration = 'none';
      }

      tasks = tasks.map(t => {
         if(t.title === strikeTask.textContent) {
            return {
               title: t.title,
               done: !t.done
            };
         }

         return t;
      });
   });

   //remove elementos html e do array
   remover.addEventListener('click', (evento) => {
      const removeTask = evento.target.parentElement;
      const titleRemove = removeTask.querySelector('span').textContent;

      tasks = tasks.filter(t => t.title !== titleRemove);

      list.removeChild(removeTask);
   });

   //renderiza elementos html
   li.appendChild(checkbox);
   li.appendChild(span);
   li.appendChild(remover);

   list.appendChild(li);

   input.value = "";

});