import axios from 'axios'
// import cheerio from 'cheerio'

const checkTrack = (code, number) => axios.get(`https://tracker.falsy.me/carriers/${code}/tracks/${number}`).then(({ data }) => data);

// function checkTrack( code, number ) {
//   return axios.get(`https://tracker.falsy.me/carriers/${code}/tracks/${number}`).then(({ data }) => data);
// }

function checkPostTrack( number ) {
  console.log('checkPostTrack in');
  return axios.get(`https://service.epost.go.kr/trace.RetrieveDomRigiTraceList.comm?displayHeader=N&sid1=${number}`, {
    headers: {"Access-Control-Allow-Origin": "*"}
  })
    .then( res => {
    // http://service.epost.go.kr/trace.RetrieveRegiPrclDeliv.postal?sid1=
    // https://service.epost.go.kr/trace.RetrieveDomRigiTraceList.comm?displayHeader=N&sid1=
    // let $ = cheerio.load(data)
    // let $result = $("tCnt").text()
    // return {
      // value : $result 
    // }
      console.log('res :', res); 
    })
    .catch(err => {
      console.log('err :', err); 
    })
}

export { checkTrack ,checkPostTrack }

/*
cj 
550677247211
550677249845
550671420035


우체국 
  6067598053602
6067598052442

*/