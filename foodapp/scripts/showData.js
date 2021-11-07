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
    function debounce(func,delay){
      if(timerId){
        clearInterval(timerId)
      }
      timerId=setInterval(function(){
        func()
      },delay)
      }
export {getData,append,debounce}