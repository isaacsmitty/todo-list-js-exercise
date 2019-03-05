
// Create a new task object
function newTask(title, description) {
  const task = {
    title:       title,
    description: description,
    complete:    false,
// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
    completeTask: function() {
      this.complete = true;
// Print the state of a task to the console in a nice readable way
    },
    logTaskState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }
  };
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Scoop out the poop from the litter box."); // task 0
const task2 = newTask("Do Laundry", "Wash the clothes. Dry the clothes. Fold the clothes."); // task 1
// const tasks = [task1, task2];

task1.logTaskState(); // Clean Cat Litter has not been completed
task1.completeTask();
task1.logTaskState(); // Clean Cat Litter has been completed
// console.log(tasks);
