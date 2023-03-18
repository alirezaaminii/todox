
export const getAPIBaseURL = function () {
  return process.env.API_BASE_URL;
};

export const getMongoURI = function () {
  return process.env.MONGO_URI || '';
};

export const getMongoDB = function () {
  return process.env.MONGO_DB || '';
};