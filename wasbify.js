#! /Users/erick/.nvm/versions/node/v8.1.3/bin/node
// https://pumasantiago.blob.core.windows.net/pumasantiago/process/pumasantiago/v3/zorzal/output/tenant%3Dpumasantiago/prefix%3Dentropia030905/year%3D2016/month%3D07/day%3D02/2016-07-02_entropia030905_activities9_matrix.csv.gz

const { compose } = require('ramda')

if ( process.argv.length < 3 ) throw Error("You must provide a url")

function deSafeUrl(s) {
  return s.replace(/%3D/g, "=")
}

function changeProtocol(s) {
  return s.replace(/https/, "wasb")
}

function moveContainer(s) {
  let r = new RegExp(/(\w*\.blob\.core\.windows.net)\/([\w-_]*)/)
  return s.replace(r, "$2@$1")
}

let url = process.argv[2]

compose(console.log.bind(console), deSafeUrl, changeProtocol, moveContainer)(url)




