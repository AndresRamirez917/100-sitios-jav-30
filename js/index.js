async function getData() {
    const result = await fetch('https://fakestoreapi.com/products/');
    const products = await result.json();
    console.log(products)
    const jsonArr = products.map(elemento => Object.entries(elemento));
    const jsonSlice = jsonArr.slice(0, 4);
    console.log(jsonSlice)
    products.forEach(element => {
        const randomInt = randonData(1, jsonArr.length);
        const randonIndex = randomInt;
        for(i = 0; i < jsonSlice.length; i++){
            if(element.id == i){
                const card = document.createRange().createContextualFragment(`
                    
                <div class="card">
                    <span class="material-icons md-48">list</span>
                    <h3>This is one of our features</h3>
                    <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h4>
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
            return Math.floor(Math.random() * (min + max -1)+max)
        }
    });
}

getData()