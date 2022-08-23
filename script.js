const $ = document.querySelector.bind(document),
      $$ = document.querySelectorAll.bind(document),
      name = $$('.name'),
      image = $$('.character-illustration'),
      spinner = $('.spinner'),
      zoom = $('.zoomOn'),
      exit = $('.exit'),
      zname = $('.zoomOn-name'),
      zspecies = $('.zoomOn-species'),
      zgender = $('.zoomOn-gender'),
      zstatus = $('.zoomOn-status'),
      zorigin = $('.zoomOn-origin'),
      zlocation = $('.zoomOn-location'),
      zimg = $('.zoomOn-img'),
      arrowLeft = $('.arrow-left'),
      arrowRight = $('.arrow-right')

let angle = 0

console.log(arrowLeft)

arrowRight.addEventListener("click", () => {rotate(1)})
arrowLeft.addEventListener("click", () => {rotate(-1)})

function rotate(direction){
  angle += 45 * direction
  spinner.style.transform = "rotateY(" + angle + "deg)"
}

// fetch('https://rickandmortyapi.com/api/character')
//   .then( response => {
//   total=
//     response.json().then( data => {
//       for(let i = 0; i < 8; i++){
//         name[i].innerText = data.results[i].name
//         image[i].src=data.results[i].image
//         image[i].alt=data.results[i].name
//         image[i].addEventListener('click', () => {
//           console.log('clic' + i)
//           zoom.style.width='100vw'
//           zname.innerText = data.results[i].name
//           zspecies.innerText = data.results[i].species
//           zgender.innerText = data.results[i].gender
//           zstatus.innerText = data.results[i].status
//           zorigin.innerText = data.results[i].origin.name
//           zlocation.innerText = data.results[i].location.name
//           zimg.src=data.results[i].image
//           zimg.alt=data.results[i].name
//         })
    //   }
//    })
//  })

exit.onclick = () => {zoom.style.width='0'}
