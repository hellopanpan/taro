type DelayFn = (time: number) => Promise<undefined>

const delay: DelayFn = time => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

export default {
  delay
}
