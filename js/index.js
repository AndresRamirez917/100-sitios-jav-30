async function getData() {
    const result = await fetch('https://fakestoreapi.com/products/');
    const products = await result.json();
    console.log(products)
    const jsonArr = products.map(elemento => Object.entries(elemento));
    const jsonSlice = jsonArr.slice(0, 4);
  
    console.log(jsonSlice);
    products.forEach(element => {
        const randomInt = randonData(1, jsonArr.length);
        const randonIndex = randomInt;
        const rate = jsonArr[randonIndex][6][1]["rate"]
        for(i = 0; i < jsonSlice.length; i++){
            if(element.id == i){
                const card = document.createRange().createContextualFragment(`
                    
                <div class="card">
                    <img src="${jsonArr[randonIndex][5][1]}">
                    <h3>${jsonArr[randonIndex][1][1]}</h3>
                    <h4>Price$ ${jsonArr[randonIndex][2][1]}.</h4>
                    <h4>Rate amonunt $ ${rate}.</h4>
                    <h4>Rate ${rate >= 3 ? rate.value = "🌝" : rate.value = "😪"}.</h4>
                    <div class="features-list">
                        <ul>
                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic doloribus iure laboriosam beatae cum sequi?</li>
                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic doloribus iure laboriosam beatae cum sequi?</li>
                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic doloribus iure laboriosam beatae cum sequi?</li>
                        </ul>
                    </div>
                </div>
                    
                    `)
                    const features_row = document.querySelector('.features-row');
                    features_row.append(card)
            }
        }
        function randonData(min, max){
            return Math.floor(Math.random() * (max - min +1) + min)
        }
    });
}

const btn_enviar = document.getElementById('btn-enviar').onclick = (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');
    const arr = [];
    const arrMessages = ["Nombre", "Email", "Mensaje"];
    arr.push(nombre, email, mensaje);
    for(i = 0; i < arr.length; i ++){
        if(arr[i].value == ""){
            swal({
                title: `El campo ${arrMessages[i]} no puede estar vacío`,
                icon: "error",
                 })
                 return false;
        }
    }
    if(!emailValido(email.value)){
        swal({
            title: `El campo ${arrMessages[1]} no tiene el formato correcto`,
            icon: "error",
             })
             return false;
    }
    swal({
        title: `Datos enviados satisfactoriamente`,
        icon: "success",
         })
         nombre.value = "";
         email.value = "";
         mensaje.value = "";
    return true;
} 

const emailValido = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

getData()