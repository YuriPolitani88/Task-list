$(document).ready(function () {
    const $form = $("#task-list");
    const $taskNameInput = $("#task-name");
    const $tbody = $("tbody");

    $form.on("submit", function (event) {
        event.preventDefault();

        const taskName = $taskNameInput.val().trim();

        if (taskName !== "") {
            adicionaTarefa(taskName);
            $taskNameInput.val("");
        }
    });

    $tbody.on("click", "tr", function () {
        $(this).toggleClass("task-done");
    });

    function adicionaTarefa(taskName) {
        const $newRow = $("<tr>");
        const $newCell = $("<td>").text(taskName);
        const $deleteButton = $("<button>").text("Delete").addClass("delete-button");

        $deleteButton.on("click", function () {
            $newRow.remove();
        });

        $newRow.append($newCell, $deleteButton);
        $tbody.append($newRow);
    }
});
