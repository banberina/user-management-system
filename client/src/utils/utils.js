const getBaseUrl = () => {
    let baseUrl;
    if (process.env.NODE_ENV === "development") {
      baseUrl = "http://localhost:5000";
    } else {
      baseUrl = "https://usermansys.herokuapp.com";
    }
    return baseUrl;
  };

export const BASE_URL = getBaseUrl();
