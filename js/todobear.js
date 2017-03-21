var taskid=0

// create new task (list item) when Add button is clicked in modal form
$(document).ready(function() {
    $("#buttonAdd").click(addTask);
});


// function that creates a new task with taskname that the user inputs
function addTask() {
    var tasklist = $('#tasklist'); // the ul
    var task = document.createElement('li'); // create a li for each task

    var text = document.getElementById('taskName');

    var textElement = document.createElement("span");
    var taskText = document.createTextNode(text.value);

    // only allow submission of form (Add button) when text is entered in the task name field
    if (text.value == null || text.value == ""){
        return false;
    }

    // if text is entered in task name field, create new task
    else {
        var checkbox = $('<input>').attr({type: "checkbox", class: "checkboxes", id: taskid});
        $(task).append(checkbox).append(" ").fadeIn();

        textElement.setAttribute("id", "taskText" + taskid);
        // add user text to text element
        textElement.appendChild(taskText);
        // add text element to list item
        task.appendChild(textElement);
        tasklist.append($(task)); 

        var deleteButton = $('<input/>').attr({type: "button", class: "deleteButton"});
        $(task).append(" ").append(deleteButton);

        taskid ++;

        // clear form after submit
        $("form").trigger("reset");
    }
}

// delete task confirmation box
function confirmDelete() {
    return confirm('Are you sure you want to delete this task item?');
} 

// Remove list item when delete button is clicked
$(document).ready(function() {
    $('#tasklist').on('click', '.deleteButton', function() {
        console.log('clicked delete');
        if (confirmDelete()){
            $(this).parent().remove();
        } else {
            return false;
        }
    })
});


// Strikethrough text if checkbox is checked
$(document).ready(function() {
    $('#tasklist').on('click', '.checkboxes', function() {
        console.log(this.id);
        if ($('#' + this.id).is(":checked")){
            $("#taskText" + this.id).wrap("<strike>").fadeTo(250, 0.4);
        }
        else if ($('#' + this.id).is(":not(:checked)")){
            $("#taskText" + this.id).unwrap().fadeTo(250, 1);
        }                              
    })
});


// Set the width of the side navigation to 250px
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

// Set the width of the side navigation to 0
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}