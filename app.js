let container = document.querySelector(".container");
let box = document.querySelector(".box");

let input = document.querySelector("input");






window.addEventListener("load", async ()=>{


    async function data(){
        try{
            let response = await fetch("https://fakestoreapi.com/products");
            let getData = await response.json()
           return getData
        }catch(err){
                    console.log(err);
        }
    }
       
 let data2 = await data();
    

    let obj2 = "";

    data2?.forEach(element => {

        obj2 += `
        <div class="box">
        <div class="img">
             <img src=${element.image} alt="">
         </div>
         <div class="text">
             <div class="title">
                 <h2>${element.title.slice(0,19)}</h2>
             </div>
             <div class="description">
                 <p>Lorem ipsum dolor sit amet consectetur adipisicin</p>
             </div>
             <div class="price">
                 <p>${element.price}</p>
             </div>
         </div>
         
     </div>

        `
        
    });

    container.innerHTML = obj2

console.log(data);

    input.addEventListener("input",(e)=>{

        let value = e.target.value;


        let filter = data.filter((item)=>{

           return item.title.toLowerCase().includes(value.toLowerCase());


        })

        console.log(filter);


        let obj = "";

    filter.forEach(element => {

        obj += `
        <div class="box">
        <div class="img">
             <img src=${element.image} alt="">
         </div>
         <div class="text">
             <div class="title">
                 <h2>${element.title.slice(0,10)}</h2>
             </div>
             <div class="description">
                 <p>Lorem ipsum dolor sit amet consectetur adipisicin</p>
             </div>
             <div class="price">
                 <p>${element.price}</p>
             </div>
         </div>
         
     </div>

        `
        
    });

    container.innerHTML = obj




        // console.log(value);

    })


})




