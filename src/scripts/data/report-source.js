/* eslint-disable no-param-reassign */
import API_ENDPOINT from '../globals/api-endpoint';

class ReportResource {
  static async getAllUser() {
    const response = await fetch(API_ENDPOINT.GET_ALL_USER);
    const responseJson = await response.json();
    return responseJson;
  }

  static async register(inputData) {
    const response = await fetch(API_ENDPOINT.REGISTER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(inputData),
    });
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson;
  }

  static async login(inputData) {
    const response = await fetch(API_ENDPOINT.LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(inputData),
    });
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson;
  }

  static async getAllReport() {
    const response = await fetch(API_ENDPOINT.GET_ALL_REPORT);
    const responseJson = await response.json();
    return responseJson;
  }

  static async addReport(inputData, id) {
    const formData = new FormData();
    formData.append('subject', inputData.subject);
    formData.append('description', inputData.description);
    formData.append('file', inputData.file);
  
    const response = await fetch(API_ENDPOINT.REPORT(id), {
      method: 'POST',
      body: formData,
    });

    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson;
  }
  

  static async UpdateReport(inputData, id) {
    const response = await fetch(API_ENDPOINT.REPORT(id), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': localStorage.getItem('accessToken')
      },
      body: JSON.stringify(inputData),
    });
    const responseJson = await response.json();
    console.log(responseJson);
  }

  static async getHistory(id, token) {
    const response = await fetch(API_ENDPOINT.REPORT_HISTORY(id),{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer ${token}`
      }
    });
    const responseJson = await response.json();
    return responseJson;
  }

  static async getNews() {
    const response = await fetch(API_ENDPOINT.NEWS);
    const responseJson = await response.json();
    return responseJson;
  }
}

export default ReportResource;
