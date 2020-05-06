import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.15.130:3333',
    headers: {
        'Content-Type': 'multipart/form-data',
      },
     //IP LOCAL DA SUA MAQUINA PARA O EMULADOR AS
});

export default api;