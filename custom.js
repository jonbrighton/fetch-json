const btn = document.querySelector('.button')

btn.addEventListener('click', loadContent)

function loadContent() {

fetch('data.json')
.then(
  function (response) {
    //200 means that the response is good
    if (response.status !== 200) {
      console.log('looks like there was a problem: ' + response.status)
      return
    }
    response.json()
    .then(function (data){
      var newContent = ''
      for (var i = 0; i < data.guitars.length; i++){
        newContent += '<div>'
        newContent += '<img src="' + data.guitars[i].work + '"'
        newContent += 'alt="' + data.guitars[i].title + '">'
        newContent += '<p><strong>' + data.guitars[i].name + '</strong><br>'
        newContent += data.guitars[i].title + '<br>'
        newContent += '<span>' + data.guitars[i].medium + '</span></p>'
        newContent += '</div>'
      }
      document.querySelector('#content').innerHTML = newContent
    })
  }
)
.catch( function (err) {
  console.log('fetch Error: ' + err)
})
}
