export const logger = (tag, msg) => {
  if (typeof msg === 'object') {
    console.log(tag + ':' + JSON.stringify(msg))
  } else {
    console.log(tag + ':' + JSON.stringify(msg))
  }
}
