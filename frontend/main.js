const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      tasks: [],
      newTask: "",
    };
  },

  methods: {
    fetchTasks() {
      axios.get("../backend/api/retrieve-data.php").then((response) => {
        this.tasks = response.data;
      });
    },

    createTask() {
      console.log("this.newTask" + this.newTask);
      const title = this.newTask;
      this.newTask = "";

      const data = { title };
      console.log("data" + data);
      const params = {
        headers: { "Content-Type": "multipart/form-data" },
      };

      axios.post("../backend/api/send.php", data, params).then((response) => {
        console.log(response.data);
        this.tasks = response.data;
      });
    },

    taskCompleted(task, index) {
      task;
    },
  },
  mounted() {
    this.fetchTasks();
  },
});

app.mount("#app");
