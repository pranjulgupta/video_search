import axios from 'axios';

const KEY = 'AIzaSyC2HCuxItiICNBx1iF5SnFFZedckvFdiWE';
export default axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',  
  params:{
       part:'snippet',
       maxResults:5,
       key:KEY,
       

  }
});