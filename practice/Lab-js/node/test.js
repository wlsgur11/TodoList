function getTimeXHR() {
    let xhr = new XMLHttpRequest()
    xhr.open('get', 'http://localhost/time?msg=time')
    xhr.onload = function() {
        let result = xhr.responseText
        document.getElementById('result').innerHTML = result
    }
    xhr.send()
}

function getTimeXHRJSON() {
    let xhr = new XMLHttpRequest()
    xhr.open('post', 'http://localhost/timejson')
    xhr.onload = function() {
        let result = xhr.responseText
        result = JSON.parse(result)
        document.getElementById('result').innerHTML = `json data: ${result.msg} ${result.time}`
    }
    xhr.send("msg=timejson")
}

function getTimeAxios() {
    const url = "http://localhost/time?msg=time"
    axios.get(url).then((response) =>{
        document.getElementById('result').innerHTML = response.data
    })
}