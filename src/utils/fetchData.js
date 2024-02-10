export const excersiseOptions=  {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises',
  qs: {limit: '1300'},
  headers: {
    'X-RapidAPI-Key': '5dc4379b64msh935c2e8c9fa4072p145927jsn4e7aceb35b90',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};
export const YouTubeV3options= {
  method: 'GET',
  headers: {


    'X-RapidAPI-Key': '5dc4379b64msh935c2e8c9fa4072p145927jsn4e7aceb35b90',
    'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
  }
};
export const YoutubeOptions= {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '5dc4379b64msh935c2e8c9fa4072p145927jsn4e7aceb35b90',
    'X-RapidAPI-Host': 'youtube-search6.p.rapidapi.com'
  }
};


 export const fetchData = async(url, options) => { 
    const response= await fetch(url, options);
    const data= await response.json();
    
    return data;
 }