// requests:
//      xmlhttp
//      fetch
//      axios


// ajax:
//      asynchronous
//      javascript
//      and
//      xml


// api: application programming interface
// web api: http based


// more common:

// ajaj
//      asynchronous
//      javascript
//      and
//      json


// json
//      javascript
//      object
//      notation

// must be double quoted

const data = `{
    "success": true,
    "terms": "https://coinlayer.com/terms",
    "privacy": "https://coinlayer.com/privacy",
    "query": {
      "from": "BTC",
      "to": "ETH",
      "amount": 10
    },
    "info": {
      "timestamp": 1529790006,
      "rate": 12.960872
    },
    "result": 129.60872
}`

console.log(JSON.parse(data))

// opposite of JSON.parse()
JSON.stringify() // useful when sending data to API

const dog = {breed:'kelpie',color:'brown',isAlive:true, owner: undefined};

console.log(JSON.stringify(dog))
// {"breed":"kelpie","color":"brown","isAlive":true}
// removes owner because undefined is not valid JSON

