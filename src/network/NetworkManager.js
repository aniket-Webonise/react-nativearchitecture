export default class NetworkManager {
  static requestGET(url) {
    return fetch(url);
  }

  static requestPOST(url, body) {
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
    });
  }

  static requestHEAD(url) {
    return fetch(url, {
      method: 'HEAD',
    });
  }
}
