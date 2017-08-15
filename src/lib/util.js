export const renderIf = (test, component) => (test ? component : undefined)

export const classToggler = options =>
  Object.keys(options).filter(key => !!options[key]).join(' ')

export const log = (...args) => (__DEBUG__ ? console.log(...args) : undefined)

export const logError = (...args) =>
  __DEBUG__ ? console.error(...args) : undefined

export const photoToDataURL = file => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader()
    reader.addEventListener('load', () => {
      resolve(reader.result)
    })
    reader.addEventListener('error', () => {
      reject(reader.error)
    })
    if (file) return reader.readAsDataURL(file)
    return reject(new Error('USAGE ERROR: requires file'))
  })
}
