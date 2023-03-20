window.onload = () => {
    //Element Path
    const inputText = document.querySelector(`#inputTask`);
    const btnAddTask = document.querySelector(`#addTask`);
    const taskList = document.querySelector(`.taskList`);
    const deleteButton = document.querySelector(`#deleteButton`);
    const upperButton = document.querySelector(`#upperButton`);
    const downButton = document.querySelector(`#downButton`);
    const deleteSelectedButton = document.querySelector(`#deleteSelectedButton`);
    const deletaAllButton = document.querySelector(`#deletaAllButton`);
    const saveButton = document.querySelector(`#saveButton`);


    //Functions
    const highlightTask = (element) => {
        element.addEventListener(`click`, (event) => {
            const isSelected = document.querySelector(`.selected`);
            if (isSelected) {
                isSelected.classList.remove(`selected`);
            } else {
                event.target.classList.add(`selected`)
            };
        })
    }

    const checkTask = (element) => {
        element.addEventListener(`dblclick`, (event) => {
            if (event.target.classList.contains(`concluedTask`)) {
                event.target.classList.remove(`concluedTask`);
            } else {
                event.target.classList.add(`concluedTask`);
            }
        })
    }

    //On Start
    if (localStorage.getItem(`myTaskList`) !== null) {
        document.querySelector(`.taskList`).innerHTML = localStorage.getItem(`myTaskList`);
        const array = document.querySelectorAll(`.taskList li`);

        for (let index = 0; index < array.length; index += 1) {
            highlightTask(array[index]);
            checkTask(array[index]);
        }
    }

    //Buttons
    btnAddTask.addEventListener(`click`, () => {
        const task = inputText.value;
        if (task === ``) {
            alert(`Insert a text before submit your task`);
        } else {
            const newElement = document.createElement(`li`);
            newElement.innerText = task;
            newElement.className = `singleTask`;
            taskList.appendChild(newElement);
            inputText.value = ``;

            highlightTask(newElement);
            checkTask(newElement);
        }
    })

    deleteButton.addEventListener(`click`, () => {
        const isSelected = document.querySelector(`.selected`);
        isSelected.remove();
    })

    upperButton.addEventListener(`click`, () => {
        const selectedTask = document.querySelector(`.selected`);
        if (selectedTask.previousElementSibling === null) {
            alert(`Already on the first position`);
        } else {
            const toChangeElement = selectedTask.previousElementSibling;
            toChangeElement.parentNode.insertBefore(selectedTask, toChangeElement);
        }
    })

    downButton.addEventListener(`click`, () => {
        const selectedTask = document.querySelector(`.selected`);
        if (selectedTask.nextElementSibling === null) {
            alert(`Already on the last position`);
        } else {
            const selectedHtml = selectedTask.nextElementSibling;
            selectedHtml.parentNode.insertBefore(selectedHtml, selectedTask);
        }
    })

    deleteSelectedButton.addEventListener(`click`, () => {
        const array = document.querySelectorAll(`.concluedTask`);
        for (let index = 0; index < array.length; index += 1) {
            array[index].remove();
        }
    })

    deletaAllButton.addEventListener(`click`, () => {
        const array = document.querySelectorAll(`.taskList li`);
        for (let index = 0; index < array.length; index += 1) {
            array[index].remove();
        }
    })

    saveButton.addEventListener(`click`, () => {
        const htmlSave = document.querySelector(`.taskList`).innerHTML;
        localStorage.setItem(`myTaskList`, htmlSave);
        const isSelected = document.querySelector(`.selected`)
        if (isSelected) {
            isSelected.classList.remove(`selected`);
        }
    })

}