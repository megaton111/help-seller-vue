import axios from 'axios'
import cheerio from 'cheerio'

function checkPass(name, number) {
  return axios.get( '/ext/rest/persEcmQry/retrievePersEcm?crkyCn=o220p260j056x276q000c050u0&persEcm='+number+'&pltxNm='+name ).then( ({data}) => {
    let $ = cheerio.load(data)
    let $result = $("tCnt").text()
    return {
      value : $result 
    }
  })
}
 
export { checkPass }