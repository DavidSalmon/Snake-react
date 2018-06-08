import queryString from 'query-string'
const API_KEY = '8m6G7AwqqD6VFnw8BNV9EzlTQITd9CEF'

export function generateMapArray(nbLines,nbColumns){
    var cases = []
    for(var i=0;i<nbColumns;i++){
        cases.push([])
        for(var j=0;j<nbLines;j++){
            cases[cases.length-1].push('')
        }
            
    }
    return cases
}

export function updateStatusInGame(headPosition,map,status){
    if(map[headPosition.x] === undefined || map[headPosition.x][headPosition.y]===undefined){
        return 'GAME_OVER'
    }
    return status
}

const search = (payload) => ({
  url: `https://api.giphy.com/v1/gifs/search?${queryString.stringify({ ...payload, api_key: API_KEY })}`,
  method: 'GET',
  crossDomain: true,
  headers: {
    Accept: 'application/json',
  },
})

export function searchIcon(searchValue){
    const request = search({ q: searchValue })
    var res = Promise.resolve(fetch(request.url, request)
        .then(res => res.json())
    )

    res.then((v)=>{
        console.log(v)
        return v.data[0].url
    })

}