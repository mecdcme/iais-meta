import axios from "axios";

export const statisticalProcessService = {
  getAll,
  getById,
  save
};

function getAll(token) {
  return axios.get("/statisticalProcesses.json" + "?auth=" + token).then(
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
      return statisticalProcesses;
    },
    error => {
      //console.log(error.response.data.error.code);
      //console.log(error.response.data.error.message);
      const err = {
        code: error.response.data.error.code,
        message: error.response.data.error.message
      };
      return Promise.reject(err);
    }
  );
}

function getById(token, id) {
  return axios
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
        return statisticalProcess;
      },
      error => {
        //console.log(error.response.data.error.code);
        //console.log(error.response.data.error.message);
        const err = {
          code: error.response.data.error.code,
          message: error.response.data.error.message
        };
        return Promise.reject(err);
      }
    );
}

function save(token, formData) {
  return axios
    .post("/statisticalProcesses.json" + "?auth=" + token, formData)
    .then(
      response => {
        //console.log(response.data);
        return response.data;
      },
      error => {
        //console.log(error.response.data.error.code);
        //console.log(error.response.data.error.message);
        const err = {
          code: error.response.data.error.code,
          message: error.response.data.error.message
        };
        return Promise.reject(err);
      }
    );
}
