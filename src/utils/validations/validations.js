export const hasValidateAdd = (tasks, title, description) => {
  if (title.trim() !== "" && description.trim() !== "") {
    const taskExists = tasks.find(
      (task) => task.title.toLowerCase() === title.toLowerCase()
    );
    if (!taskExists) {
      return true;
    } else {
      alert("Task already exist.");
    }
  } else {
    alert("Fill the information.");
  }
};

export const hasValidateEdit = (tasks, title, description, id) => {
  if (title.trim() !== "" && description.trim() !== "") {
    const taskExists = tasks.find(
      (task) =>
        task.title.toLowerCase() === title.toLowerCase() && task.id !== id
    );
    if (!taskExists) {
      return true;
    } else {
      alert("Task already exist.");
    }
  } else {
    alert("Fill the information.");
  }
};
