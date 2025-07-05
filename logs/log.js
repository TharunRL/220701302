// const axios = require('axios')
export default function logger(stk,lvl,pkg,msg){
    const body = {
        stack : stk,
        level : lvl,
        package : pkg,
        message : msg
    }
    axios.post('http://20.244.56.144/evaluation-service/logs',body,
        {
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMjA3MDEzMDJAcmFqYWxha3NobWkuZWR1LmluIiwiZXhwIjoxNzUxNjkyNjE4LCJpYXQiOjE3NTE2OTE3MTgsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiIzYTZiZGExYy1iZjhjLTRhNDctYThiMi02ZDFjMzFjYTI4ZDQiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJ0aGFydW4gciBsIiwic3ViIjoiOThlZDYyZDItZGE2NC00NTg0LTg2MjItNjg3OTQ5NDQyZDU0In0sImVtYWlsIjoiMjIwNzAxMzAyQHJhamFsYWtzaG1pLmVkdS5pbiIsIm5hbWUiOiJ0aGFydW4gciBsIiwicm9sbE5vIjoiMjIwNzAxMzAyIiwiYWNjZXNzQ29kZSI6ImNXeWFYVyIsImNsaWVudElEIjoiOThlZDYyZDItZGE2NC00NTg0LTg2MjItNjg3OTQ5NDQyZDU0IiwiY2xpZW50U2VjcmV0Ijoid3pLa3RNVXVXVnNoWUt4ZyJ9.gdke82f6Hk6_iEn4OkGugHXONCeFf0vcEg3Bc5dWR-c'
            }
        }
    ).then(response=>{console.log(response.data)})
    .catch(error=>{console.log(error.message)})
}


//debug info warn error fatal
//cache controller cron_job db domain handler repository route service