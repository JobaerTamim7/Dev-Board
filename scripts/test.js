const activityCardContainer = document.getElementById("activity-card-container");

const taskNumInfo = {};
taskNumInfo["assigned"] = parseInt(document.getElementById("assigned-task-num").innerText);
taskNumInfo["completed"] = parseInt(document.getElementById("completed-task").innerText);

activityCardContainer.addEventListener("click",
    function(event){
        event.preventDefault();
        const element = event.target;
        if(element.tagName === "BUTTON"){
            alert("Board updated successfully !")
            console.log(getTitleByElement(element));
            element.disabled = true;
            updateTaskNum(taskNumInfo,"completed")
            if(taskNumInfo.assigned == 0){
                alert("Congrats ! You have completed all the current tasks.")
            }
            activityLogWriter(getTitleByElement(element));
        }
        
    }
)


document.getElementById("clear-btn").addEventListener("click",
    function (event){
        event.preventDefault();
        activityLogDeleter();
    }
)

document.getElementById("theme-btn").addEventListener("click",
    function (event){
        bgColorChange();
    }
)


document.addEventListener("DOMContentLoaded", function() {
    const date = currentDateGenerator();
    document.getElementById("day").innerText = date.day;
    document.getElementById("else-date").innerText = date.month + " " + date.date + " " + date.year;
});


document.getElementById("discover-btn").addEventListener("click",
    function(event){
        event.preventDefault();
        window.location.href = "pages/blog.html";
    }
)