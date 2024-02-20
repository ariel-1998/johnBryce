const listContainer = document.querySelector(`.note-list`);

const localStorageListKey = `task.list`;

const task = document.getElementById(`taskBody`);
const date = document.getElementById(`date`);
const time = document.getElementById(`time`);


let list = JSON.parse(window.localStorage.getItem(localStorageListKey)) || []

function printTask(e){           /* on submit*/

    e.preventDefault();
    clearelement(listContainer);
    creatNote();
    let last = list.length - 1
    list[last].class = `new-note`
    loadNote();
    list[last].class = `new`
    saveToLocalStorage();
    task.value = null;
    date.value = null;
    time.value = null;

}



function creatNote(){

    const taskValue = task.value
    const dateValue = date.value
    const timeValue = time.value
    if(dateValue || taskValue || timeValue){
    let newNote = {
        id: Date.now().toString(),
        task: taskValue,
        date: dateValue,
        time: timeValue,
        class: `new`
    }

    list.push(newNote);

    }


}
function loadNote(){


    list.forEach(li => {
    const note = document.createElement(`div`)
        note.classList.add(`note`)
        note.classList.add(li.class)
        note.id = li.id
        
        const delet = document.createElement(`button`)
        delet.classList.add(`btn-close`)
        delet.id = li.id

        delet.addEventListener(`click`, () =>{
            list = list.filter((l) => l.id !== delet.id)
            saveToLocalStorage();
            clearelement(listContainer)
            loadNote()
    })
        
        const task = document.createElement(`p`)
        task.classList.add(`note-content`)
        task.innerText = li.task

        const date = document.createElement(`p`)
        date.classList.add(`note-date`)
        date.innerText = li.date

        const time = document.createElement(`p`)
        time.classList.add(`note-time`)
        time.innerText = li.time

        note.append(delet ,task, date, time)
        


        listContainer.appendChild(note)

    });
    
}



function clearelement(element){
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
}

function saveToLocalStorage(){
    window.localStorage.setItem(localStorageListKey, JSON.stringify(list))
}

loadNote()
