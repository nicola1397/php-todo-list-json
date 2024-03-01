const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      tasks: [],
      newTask: { text: "", done: false },
    };
  },

  methods: {
    createTask() {},

    taskCompleted(task) {
      task.done = true;
    },

    taskReset(task) {
      task.done = false;
    },
  },
});

app.mount("#app");
