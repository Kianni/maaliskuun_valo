const { response } = require("express");

let counter = 0;
let database = [
  { id: counter++, latitude: 60, longitude: 70 },
  { id: counter++, latitude: 40, longitude: 80 },
];

module.exports = {
  findAll: () => {
    return database;
  },
  findById: (id) => {
    let temp = database.find((temp) => temp.id === id);
    if (temp == undefined) {
      response.statusCode = 404;
      return "no such location";
    } else {
      response.statusCode = 200;
      return temp;
    }
  },
  deleteById: (id) => {
    let newDB = database.filter((temp) => temp.id != id);

    if (newDB.length == database.length) {
      response.statusCode = 404;
      return false;
    } else {
      response.statusCode = 204;
      database = newDB;
      return true;
    }
  },
  postWithId: (body) => {
    let newLocation = body;
    newLocation.id = counter++;
    database.push(newLocation);
    if (database.find((lastLoc) => lastLoc.id === newLocation.id)) {
      response.statusCode = 201;
    } else {
      response.statusCode = 500;
    }
  },
  update: (id, body) => {
    let updatedLocation = body;
    let temp = database.find((item) => item.id === id);
    if (temp) {
      deleteById(id);
      updatedLocation.id = id;
      database.push(updatedLocation);
      response.statusCode = 200;
    } else {
      response.statusCode = 500;
    }
  },
};
