import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://newsfeedapp-ulysses.firebaseio.com/'
});

export default instance;