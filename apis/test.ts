import fetcher from '@lib/reuqest';


// export const apiTest = () => {
//   return fetcher(process.env.HOST_API_URL + '/route/list')
// }


export const apiSelf = () => {
  return fetcher('/api/hello')
}

export const apiList = () => {
  return fetcher('/api/openai')
}
