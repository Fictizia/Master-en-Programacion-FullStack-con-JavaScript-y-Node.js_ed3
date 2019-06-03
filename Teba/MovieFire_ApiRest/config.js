module.exports = {
  port: process.env.PORT || 3000,
  apiKeyOmdb: process.env.OMBD_API || '',
  firebasePath: 'moviefire-apirest',
  firebaseConfig: {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: ''
  }
}
