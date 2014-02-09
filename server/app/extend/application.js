module.exports = {
  restData(data) {
    const restData = {};
    restData.code = 200;
    restData.data = data;
    return restData;
  }
};
