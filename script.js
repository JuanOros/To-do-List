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

    //On Start


    //Buttons
    btnAddTask.addEventListener(`click`, () => {
        const task = inputText.value;
        if (task === ``){
            alert(`Insert a text before submit your task`);
        }else {
        const newElement = document.createElement(`li`);
        newElement.innerText = task;
        newElement.className = `singleTask`;
        taskList.appendChild(newElement);
        inputText.value = ``;

        newElement.addEventListener(`click`, (event) => {
            const isSelected = document.querySelector(`.selected`);
            if (isSelected){
                isSelected.classList.remove(`selected`);
            }
            event.target.classList.add(`selected`);
        })

        newElement.addEventListener(`dblclick`, (event) => {
            if (event.target.classList.contains(`concluedTask`)) {
                event.target.classList.remove(`concluedTask`);
            }
            event.target.classList.add(`concluedTask`);
        })
    }
    })

    deleteButton.addEventListener(`click`, () => {
        const isSelected = document.querySelector(`.selected`);
        isSelected.remove();
    })

}