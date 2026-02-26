

// APi link ;- 'https://fakestoreapi.com/products/1'

let api = 'https://fakestoreapi.com/products/'

fetch(api)
.then((rawData)=>{
    
    // convert json to js
    
    return rawData.json()
    
})

.then((jsData)=>{
    
    console.log(jsData);
    
    let api = document.querySelector(".api")

    jsData.map((c,i,t)=>{

        let div = document.createElement("div")

        div.innerHTML = `<p> ${c.title.slice(0,50)+"..."}</p>
        <img src="${c.image}"/> <button> price : -${c.price+"$"}</button>`;

        api.append(div)

    })

})