import Axios from 'axios'


// Axios.defaults.baseURL = 'http://101.200.214.243:8767';


Axios.defaults.baseURL = 'http://192.168.168.184:8000';

// Axios.defaults.baseURL = 'http://172.16.6.36:8767';

Axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

export default Axios
