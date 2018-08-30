/*
* 使用axios封装的promise请求函数模块
* */
import axios from "axios"
export default function ajax(url,data={}, type='GET') {
  return new Promise(function (reslove,reject) {
    let Promise
    if(type === 'GET'){
      let paramStr =''
      Object.keys(data).forEach(key =>{
        paramStr += key + '=' +data[key] +'&'
      })
      if(paramStr){
        paramStr = paramStr.substring(0,paramStr.length-1)
      }
      //使用axios发get请求
     Promise= axios.get(url +'?' + paramStr)
    }else{//发送post请求
      //
      promise = axios.post(url,data)
    }

    Promise.then(response =>{
      reslove(response.data)
    })
      .catch(error=>{
        reject(error)
      })
    //执行异步请求

    //成功，调用reslove(response.data

    //失败，调用reject
  })

}

// ajax().then(response =>{
//   const result = await ajax()
// })

