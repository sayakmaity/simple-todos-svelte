<script>
  export let task;

  // A function that is called when the checkbox is clicked. It calls the `setIsChecked` method on the server, passing the task's ID and the new value of the checkbox.
  const toggleChecked = () =>
    Meteor.call("tasks.setIsChecked", task._id, !task.isChecked);

  // removes tasks
  const deleteThisTask = () => Meteor.call("tasks.remove", task._id);
</script>

<li>
  <!-- Calling the function toggleChecked when the checkbox is clicked. -->
  <input
    type="checkbox"
    readonly
    checked={!!task.isChecked}
    on:click={toggleChecked}
  />
  <span>{task.text}</span>

  <!-- Calling the function deleteThisTask when the button is clicked. -->
  <button class="delete" on:click={deleteThisTask}>&times;</button>
</li>
