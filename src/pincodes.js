// import React from "react";

const Jawali = 176023;
const Bangolore = 560002;
const Waknaghat = 173224;
const Delhi = 110007;
const Kolkata = 700001;
const Chennai = 600023;
const Shimla = 171001;
const Pathankot = 145001;

const cityToPincode = {
  Jawali,
  Bangolore,
  Waknaghat,
  Delhi,
  Kolkata,
  Chennai,
  Shimla,
  Pathankot,
};

const getApiUrl = (pincode) => {
  return `https://api.weatherbit.io/v2.0/current?&postal_code=${pincode}&country=INDIA&key=7fce84853c514e549fdd7decfe6bb3f1`;
};

const fetchWeatherData = async (pincode) => {
  const apiUrl = getApiUrl(pincode);
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export { cityToPincode, fetchWeatherData };
