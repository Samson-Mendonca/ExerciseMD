export const excersiseOptions=  {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises',
  qs: {limit: '1300'},
  headers: {
    'X-RapidAPI-Key': '97e48d3bfbmshb36c5b1d61a8c47p149cf2jsn3a4fe1ce8b5b',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};
export const YouTubeV3options= {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '97e48d3bfbmshb36c5b1d61a8c47p149cf2jsn3a4fe1ce8b5b',
    'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
  }
};
export const YoutubeOptions= {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '97e48d3bfbmshb36c5b1d61a8c47p149cf2jsn3a4fe1ce8b5b',
    'X-RapidAPI-Host': 'youtube-search6.p.rapidapi.com'
  }
};


 export const fetchData = async(url, options) => { 
    const response= await fetch(url, options);
    const data= await response.json();
    
    return data;
 }