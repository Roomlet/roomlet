export const renderIf = (test, component) => (test ? component : undefined)

export const classToggler = options =>
  Object.keys(options).filter(key => !!options[key]).join(' ')

export const log = (...args) => (__DEBUG__ ? console.log(...args) : undefined)

export const logError = (...args) =>
  (__DEBUG__ ? console.error(...args) : undefined)
