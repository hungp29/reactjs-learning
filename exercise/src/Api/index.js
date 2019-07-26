class Api {
  static call (url, method, data) {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
    headers['Authorization'] = 'Bearer 0Xh53loUCZRGaT7rLYKhFwDUzTWk7LwUJDwM'

    return fetch(url, {
      headers,
      method,
      body: JSON.stringify(data)
    }).then(response => {
      return response.json()
    }).then(data => data)
  }
}

export default Api
