const Editar = () => {
     
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
   
    let raw = JSON.stringify({
      "firstName": document.querySelector('#Firsted').value,
      "lastName": document.querySelector('#lastNameed').value
     
    });
    
    let requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    let id=document.querySelector('#IdE').value
  
    fetch(`http://localhost:3000/users/${id}`, requestOptions)
      .then(response => response.text())
      .then(result => window.location.reload())
      .catch(error => console.log('error', error));
}
const Borrar = (e) => {

    var requestOptions = {
      method: 'DELETE'
    };
    
    fetch(`http://localhost:3000/users/${e.value}`, requestOptions)
      .then(response => response.text())
      .then(result => window.location.reload())
      .catch(error => console.log('error', error));
}
const Guardar = (e) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let raw = JSON.stringify({
        "firstName": document.querySelector('#First').value,
        "lastName": document.querySelector('#lastName').value
    });

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:3000/users/", requestOptions)
        .then(response => response.text())
        .then(result => window.location.reload())
        .catch(error => console.log('error', error));
}
const Seleccionar=(value)=> {
    let row=value.parentElement.parentElement
    let id=row.children[0].innerHTML
    let firstName=row.children[1].innerHTML
    let lastName=row.children[2].innerHTML
    document.querySelector('#Firsted').value=firstName
    document.querySelector('#lastNameed').value=lastName
    document.querySelector('#IdE').value=id
}
