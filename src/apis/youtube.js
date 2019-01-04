import axios from 'axios';

const KEY = 'AIzaSyADcvV2Tz1aiJ1fsDM0_0CoEPIGv1vMCH4';


export default axios.create ( {
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResult: 5,
    key: KEY
  }
})
