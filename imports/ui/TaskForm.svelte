<script>
  export let user = null;
  let newTask = "";

  //  if new task is not empty, it inserts the task and clears the form
  const handleSubmit = () => {
    if (!newTask) return;

    Meteor.call("tasks.insert", newTask);

    // Clear form
    newTask = "";
  };
</script>

<form class="task-form" on:submit|preventDefault={handleSubmit}>
  <input
    type="text"
    name="text"
    placeholder="Type to add new tasks"
    bind:value={newTask}
  />
  <button type="submit">Add Task</button>
</form>
