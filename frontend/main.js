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

    taskStatus(task, index) {
      console.log("task: " + task.done);
      let newStatus;

      if (task.done == true) {
        console.log("condition 1");
        newStatus = false;
      } else if (task.done == false) {
        console.log("condition 2");
        newStatus = true;
      }

      console.log("status: " + newStatus);

      const data = { newStatus, index };
      const params = {
        headers: { "Content-Type": "multipart/form-data" },
      };

      axios
        .post("../backend/api/change-status.php", data, params)
        .then((response) => {
          this.tasks = response.data;
        });
    },

    deleteTask(index) {
      const data = { index };
      const params = {
        headers: { "Content-Type": "multipart/form-data" },
      };

      axios.post("../backend/api/delete.php", data, params).then((response) => {
        this.tasks = response.data;
      });
    },
  },
  mounted() {
    this.fetchTasks();
  },
});

app.mount("#app");
