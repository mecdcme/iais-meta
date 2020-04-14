import axios from "axios";

export const statisticalProcessService = {
  getAll,
  getById,
  save
};

function getAll(token) {
  return new Promise((resolve, reject) => {
    axios.get("/statisticalProcesses.json" + "?auth=" + token).then(
      response => {
        var statisticalProcesses = [];
        for (const [key, value] of Object.entries(response.data)) {
          //console.log(key, value);
          statisticalProcesses.push({
            id: key,
            name: value.name,
            acronym: value.acronym,
            responsibleName: value.responsibleName,
            responsibleDivision: value.responsibleDivision
          });
        }
        //console.log(statisticalProcesses);
        resolve(statisticalProcesses);
      },
      error => {
        console.log(error.response.status);
        console.log(error.response.data.error);
        const err = {
          status: error.response.status,
          message: error.response.data.error
        };
        reject(err);
      }
    );
  });
}

function getById(token, id) {
  return new Promise((resolve, reject) => {
    axios
      .get(
        "/statisticalProcesses.json" +
          "?auth=" +
          token +
          '&orderBy="$key"' +
          '&equalTo="' +
          id +
          '"'
      )
      .then(
        response => {
          var statisticalProcess = null;
          for (const [key, value] of Object.entries(response.data)) {
            //console.log(key, value);
            statisticalProcess = {
              id: key,
              name: value.name,
              acronym: value.acronym,
              responsibleName: value.responsibleName,
              responsibleDivision: value.responsibleDivision
            };
          }
          console.log(statisticalProcess);
          resolve(statisticalProcess);
        },
        error => {
          console.log(error.response.status);
          console.log(error.response.data.error);
          const err = {
            status: error.response.status,
            message: error.response.data.error
          };
          reject(err);
        }
      );
  });
}

function save(token, formData) {
  return new Promise((resolve, reject) => {
    axios.post("/statisticalProcesses.json" + "?auth=" + token, formData).then(
      response => {
        //console.log(response.data);
        resolve(response.data);
      },
      error => {
        console.log(error.response.status);
        console.log(error.response.data.error);
        const err = {
          status: error.response.status,
          message: error.response.data.error
        };
        reject(err);
      }
    );
  });
}
