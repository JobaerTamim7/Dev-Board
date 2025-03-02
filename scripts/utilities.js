function getTitleByElement(element){
    const parentElement = element.parentElement;
    const discriptionElement = parentElement.previousElementSibling;
    const titleElement = discriptionElement.previousElementSibling;

    return titleElement.innerText;
}

function activityLogWriter(title){
    const newLog = document.createElement("div");
    const classStrings = "text-sm rounded-lg bg-bg-primary px-4 pb-4 my-4".split(" ");
    
    for (const classString of classStrings){
        newLog.classList.add(classString);
    }

    const currentTime = currentTimeGenerator();
    
    newLog.innerText = `
    You have completed task ${title} at ${currentTime}
    `

    const activityLog = document.getElementById("activity-log");
    
    activityLog.appendChild(newLog);
    
}

function activityLogDeleter(){
    const activityLog = document.getElementById("activity-log");

    activityLog.innerHTML = "";
}

function bgColorChange(){
    const max = 255;
    const min = 200;
    const red = Math.floor(Math.random()*(max-min)) + min;
    const green = Math.floor(Math.random()*(max-min)) + min;
    const blue = Math.floor(Math.random()*(max-min)) + min;

    const htmlElement = document.getElementsByTagName("html")[0];
    htmlElement.style.backgroundColor = `rgb(${red}, ${green} , ${blue})`
}
function currentTimeGenerator(){
    const date = new Date();
    const time = date.toLocaleTimeString("en-US",{
        hour12 : true,
    })


    return time;
}

function currentDateGenerator(){
    const date = new Date();
    const convertedDate = date.toDateString().split(" ");
    const dateObj = {};
    dateObj.day = convertedDate[0];
    dateObj.month = convertedDate[1];
    dateObj.date = convertedDate[2];
    dateObj.year = convertedDate[3];

    return dateObj;
}

function updateTaskNum(taskObj,type){
    if(type === "completed"){
        taskObj.assigned -= 1;
        taskObj.completed += 1;

        document.getElementById("assigned-task-num").innerText = taskObj.assigned;
        document.getElementById("completed-task").innerText = taskObj.completed;
    }
}