

async function user() {
    let response = await fetch('https://randomuser.me/api/')
    let mydata = await response.json()
    return mydata;
}


function reload() {
    user().then(mydata => {
        document.getElementById('d1').innerHTML = ''
        mydata.results.map(function (val) {
            let _div = document.createElement('div')
            _div.classList.add('user', 'col-6', 'col-lg-5', 'd-flex', 'flex-wrap', 'justify-content-center', 'align-items-center', 'z-3')

            _div.innerHTML = `
            <figure class="col-4 z-1">
            <img class="col-12 object-fit-cover" src="${val.picture.large}" alt="">
            </figure>
            <section class="col-12 d-flex flex-wrap justify-content-evenly align-items-center">
            <div class="col-12 mt-2 p-2 d-flex justify-content-center">
            <span class="me-3">streetName : <b>${val.location.street.name} ,</b></span>
            <span>streetNumber : ${val.location.street.number}</span>
            </div>
            <div class="col-10 p-2 mt-2 d-flex justify-content-evenly align-items-center">
            <span>firstName : ${val.name.first}</span>
            <span>lastName : ${val.name.last}</span>
            <span>age : ${val.dob.age}</span>
            </div>
            <div class="col-11 mt-2 p-2 d-flex justify-content-evenly align-items-center">
            <span>city : ${val.location.city}</span>
            <span>state: ${val.location.state}</span>
            <span>country : ${val.location.country}</span>
            </div>
            <div class="col-9 mt-3 p-2 d-flex justify-content-between phon">
            <span>
            <i class="bi bi-telephone"></i>
            cell : ${val.cell}</span>
            <span>
            <i class="bi bi-phone"></i>
            phone : ${val.phone}</span>
            </div>
            </section>
        `
            document.getElementById('d1').appendChild(_div)
        })
    })
}










// fetch('https://randomuser.me/api/')
//     .then(res => res.json())
//     .then(mydata => {
//         mydata.results.map(function (val) {

//             let _div = document.createElement('div')
//             _div.classList.add('user', 'col-6', 'col-lg-5', 'd-flex', 'flex-wrap', 'justify-content-center', 'align-items-center', 'z-3')

//             _div.innerHTML = `
//             <figure class="col-4 z-1">
//             <img class="col-12 object-fit-cover" src="${val.picture.large}" alt="">
//             </figure>
//             <section class="col-12 d-flex flex-wrap justify-content-evenly align-items-center">
//             <div class="col-12 mt-2 p-2 d-flex justify-content-center">
//             <span class="me-3">streetName : <b>${val.location.street.name} ,</b></span>
//             <span>streetNumber : ${val.location.street.number}</span>
//             </div>
//             <div class="col-10 p-2 mt-2 d-flex justify-content-evenly align-items-center">
//             <span>firstName : ${val.name.first}</span>
//             <span>lastName : ${val.name.last}</span>
//             <span>age : ${val.dob.age}</span>
//             </div>
//             <div class="col-11 mt-2 p-2 d-flex justify-content-evenly align-items-center">
//             <span>city : ${val.location.city}</span>
//             <span>state: ${val.location.state}</span>
//             <span>country : ${val.location.country}</span>
//             </div>
//             <div class="col-9 mt-3 p-2 d-flex justify-content-between phon">
//             <span>
//             <i class="bi bi-telephone"></i>
//             cell : ${val.cell}</span>
//             <span>
//             <i class="bi bi-phone"></i>
//             phone : ${val.phone}</span>
//             </div>
//             </section>
//         `
//             document.getElementById('d1').appendChild(_div)
//         })
//     })

// function reload() {
//     const btn = document.querySelector('button')
//     btn.addEventListener('click', () => {
//         location.reload()
//     })
//     location.reload()

// }