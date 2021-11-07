//getData()
//append()

var timerId;

async function getData(url){
    let res=await fetch(url)
    let data=await res.json()
   // console.log(data.meals)
    return data.meals
}



function append(data,container,container2){
  container.innerHTML=null
    data.forEach((product)=>{
        let div=document.createElement("div")
        let img=document.createElement("img")
        let p=document.createElement("p")
        let p1=document.createElement("p")
        let p2=document.createElement("p")

        p.innerText=product.strArea
        p2.innerText=product.strMeal
       img.src=product.strMealThumb
        div.append(img,p,p2)
        div.style.width="60%"
        div.style.margin="auto"
        container.append(div)
        container.style.width="60%"
       // container2.append(div)
    })
  }

  function append2(data,container2){
    container2.innerHTML=null
      data.forEach((product)=>{
          let div=document.createElement("div")
          let div2=document.createElement("div")
          let img=document.createElement("img")
          let p=document.createElement("p")
          let p1=document.createElement("p")
          let p2=document.createElement("p")
          let ingr=document.createElement("p")
          ingr.innerText="Ingredients"
          ingr.style.fontWeight="700"
          let ingr1=document.createElement("p")
          ingr1.innerText=product.strIngredient1
          let ingr2=document.createElement("p")
          ingr2.innerText=product.strIngredient2
          let ingr3=document.createElement("p")
          ingr3.innerText=product.strIngredient3
          let ingr4=document.createElement("p")
          ingr4.innerText=product.strIngredient4
          let ingr5=document.createElement("p")
          ingr5.innerText=product.strIngredient5
          let ingr6=document.createElement("p")
          ingr6.innerText=product.strIngredient6
          let ingr7=document.createElement("p")
          ingr7.innerText=product.strIngredient7
          div2.append(ingr,ingr1,ingr2,ingr3,ingr4,ingr5,ingr6,ingr7)
  
          p.innerText=product.strArea
          p2.innerText=product.strMeal
         img.src=product.strMealThumb
          div.append(img,p,p2)
          div.style.width="100%"
          div.style.margin="auto"
         // container.append(div)
          container2.style.width="100%"
          container2.append(div,div2)
          container2.style.margin="auto"
      })
    }

    function debounce(func,delay){
      if(timerId){
        clearInterval(timerId)
      }
      timerId=setInterval(function(){
        func()
      },delay)
      }
export {getData,append,append2,debounce}