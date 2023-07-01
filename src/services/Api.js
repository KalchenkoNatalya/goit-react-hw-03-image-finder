import axios from "axios";

// const URL = 'https://pixabay.com/api/';
const key = '36426467-984cafa91003baeedab01e504';

export const fetchImage = async () => {
    const response = await axios.get(`https://pixabay.com/api/?q=cat&page=1&key=${key}&image_type=photo&orientation=horizontal&per_page=12&page=1`);
    return response.data.hits;
}