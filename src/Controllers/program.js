import apiRequest from "../API/api";

const BASE_URL = "http://localhost:3000/rtcce/version-1.0";

const createProgram = async (route, userKey, name) => {
  if (!route || !userKey || !name) {
    throw new Error("All parameters (userKey, name) are required.");
  }

  try {
    const response = await apiRequest("post", `${BASE_URL}${route}`, {
      userKey,
      name,
    });
    return response;
  } catch (error) {
    console.error("Error in createProgram:", error.message);
    throw error;
  }
};

const deleteProgram = async (route, userKey, programkey) => {
  if (!route || !userKey || !programkey) {
    throw new Error("All parameters (userKey, programkey) are required.");
  }

  try {
    const response = await apiRequest("delete", `${BASE_URL}${route}`, {
      userKey,
      programkey,
    });
    return response;
  } catch (error) {
    console.error("Error in createProgram:", error.message);
    throw error;
  }
};

const saveProgram = async (route, userKey, programkey, updatingdata) => {
  if (!route || !userKey || !programkey || !updatingdata) {
    throw new Error(
      "All parameters (userKey,programkey, updatingdata) are required."
    );
  }

  try {
    const response = await apiRequest("post", `${BASE_URL}${route}`, {
      userKey,
      programkey,
      updatingdata,
    });
    return response;
  } catch (error) {
    console.error("Error in saveProgram:", error.message);
    throw error;
  }
};

const loadPrograms = async (route, userKey, programkey = null) => {
  if (!route || !userKey) {
    throw new Error("All parameters (userKey,) are required.");
  }

  try {
    const response = await apiRequest("get", `${BASE_URL}${route}`, {
      userKey,
      programkey,
    });
    return response;
  } catch (error) {
    console.error("Error in saveProgram:", error.message);
    throw error;
  }
};

const getoutput = async (route,program,langCode) => {
  if (!route || !program || !langCode) {
    throw new Error("All parameters (userKey,) are required.");
  }

  try {
    const response = await apiRequest("post", `${BASE_URL}${route}`, {program, langCode});
    return response;
  } catch (error) {
    console.error("Error in saveProgram:", error.message);
    throw error;
  }
};


const getlanguages = async (route) => {
  if (!route) {
    throw new Error("All parameters are required.");
  }

  try {
    const response = await apiRequest("get", `${BASE_URL}${route}`);
    return response;
  } catch (error) {
    console.error("Error in saveProgram:", error.message);
    throw error;
  }
};

const programControllers = {
  createProgram,
  deleteProgram,
  saveProgram,
  loadPrograms,
  getoutput,
  getlanguages,
};

export default programControllers;
