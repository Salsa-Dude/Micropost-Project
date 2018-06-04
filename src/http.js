

class EasyHTTP {
  // Make an HTTP GET REQUEST
  async get(url) {
    const response = await fetch(url);

    const responseData = await response.json();
    return responseData;
  }

  // Make an HTTP POST REQUEST
  async post(url,data) {
    const response  = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    const responseData = await response.json();
    return responseData;
  }

  // Make an HTTP PUT REQUEST
  async put(url,data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    const responseData = await response.json();
    return responseData;
  }

  // Make an HTTP DELETE REQUEST
  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
    })
     
    const responseData = await 'Resource Deleted...';
    return responseData;
   
  }
}

export const http = new EasyHTTP(); 