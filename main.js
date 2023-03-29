let sorts = document.querySelectorAll(".sort");
let ProductContainer = document.querySelector(".prods")
let req = new XMLHttpRequest();

req.onreadystatechange = function() {
    if(this.status === 200 && this.readyState === 4) {
        let product = JSON.parse(this.responseText)
        let productLength = product.length
        createProduct(product , productLength)
    }
}

req.open("GET" , "products.json" , true)
req.send()

function createProduct(item , itemLength ) {
    for(let i = 0; i <= itemLength ; i++) {
        // create product structure
        let productItem = document.createElement("div")
        productItem.className = `prod p-3 ${item[i]["product-type"]}`
        // productItem.dataset.type = item[i]["product-type"]
        // productItem.dataset.all = item[i]["product-all"]
        // create image
        let imageContent = document.createElement("div")
        imageContent.className = "image w-100 d-flex justify-content-center pt-1 pb-3"
        let image = document.createElement("img")
        image.src = item[i]["product-image"]
        image.style.width = `${item[i]["product-width"]}`
        // create description
        let description = document.createElement("div")
        description.className = "descrip mt-2";
        let info = document.createElement("div")
        info.className = "info d-flex align-items-center justify-content-between"
        let proName = document.createElement("p")
        proName.className = "h5 m-0 text-capitalize"
        proName.innerText = item[i]["product-name"]
        let proPrice = document.createElement("p")
        proPrice.className = "h5 text-primary text-capitalize"
        proPrice.innerText = item[i]["product-price"]
        let prodes = document.createElement("div")
        prodes.className = "text-capitalize des-text"
        prodes.innerText = item[i]["product-description"]
        let sizes = document.createElement("div")
        sizes.className = "sizes w-50 mt-2 d-flex flex-column"
        let sizeTitle = document.createElement("p")
        sizeTitle.className = "m-0"
        sizeTitle.innerText = "size :"
        let faSize = document.createElement("div")
        faSize.className = "gr d-flex ml-2 mb-3 justify-content-between"
        faSize.style.cssText = "margin-top: -15px"
        let br = document.createElement("br");
        let size1 = document.createElement("div")
        size1.className = "size text-uppercase"
        size1.innerText = "xs"
        let size2 = document.createElement("div")
        size2.className = "size text-uppercase"
        size2.innerText = "s"
        let size3 = document.createElement("div")
        size3.className = "size text-uppercase"
        size3.innerText = "m"
        let size4 = document.createElement("div")
        size4.className = "size text-uppercase"
        size4.innerText = "l"
        let size5 = document.createElement("div")
        size5.className = "size text-uppercase"
        size5.innerText = "xl"
        let btns = document.createElement("div")
        btns.className = "btns d-flex flex-row"
        let btn1 = document.createElement("div")
        btn1.className = "btn btn-primary mr-2 w-100 text-uppercase"
        btn1.innerText = "puy now"
        btn1.style.cssText = "border-radius:0"
        let btn2 = document.createElement("div")
        btn2.className = "btn btn-primary mr-2 w-100 text-uppercase"
        btn2.innerText = "add to cart"
        btn2.style.cssText = "border-radius:0"
        ProductContainer.appendChild(productItem)
        productItem.appendChild(imageContent)
        productItem.appendChild(description)
        imageContent.appendChild(image)
        description.appendChild(info)
        info.appendChild(proName)
        info.appendChild(proPrice)
        description.appendChild(prodes)
        productItem.appendChild(sizes)
        sizes.appendChild(sizeTitle)
        sizes.appendChild(br)
        sizes.appendChild(faSize)
        faSize.appendChild(size1)
        faSize.appendChild(size2)
        faSize.appendChild(size3)
        faSize.appendChild(size4)
        faSize.appendChild(size5)
        productItem.appendChild(btns)
        btns.appendChild(btn1)
        btns.appendChild(btn2)
        console.log(productItem.dataset.type)
    }
}
sorts.forEach((e)=>{
    for (let i = 0 ; i <= 3 ; i++) {
        let b1 = sorts[0];
        let b2 = sorts[1];
        let b3 = sorts[2];
        let b4 = sorts[3];
    
        b1.onclick = function() {
            let pros = document.querySelectorAll(".prods .prod");
            pros.forEach((ele)=>{
                ele.style.cssText = "display:block"
            })
        }
        b2.onclick = function() {
            let pros = document.querySelectorAll(".prods .prod");
            pros.forEach((ele)=>{
                ele.style.cssText = "display:none"
                document.querySelectorAll(".clothes").forEach((cloth)=>{
                    cloth.style.cssText = "display:block"
                })
            })
        }
        b3.onclick = function() {
            let pros = document.querySelectorAll(".prods .prod");
            pros.forEach((ele)=>{
                ele.style.cssText = "display:none"
                document.querySelectorAll(".electronics").forEach((cloth)=>{
                    cloth.style.cssText = "display:block"
                })
            })
        }
        b4.onclick = function() {
            let pros = document.querySelectorAll(".prods .prod");
            pros.forEach((ele)=>{
                ele.style.cssText = "display:none"
                document.querySelectorAll(".accessories").forEach((cloth)=>{
                    cloth.style.cssText = "display:block"
                })
            })
        }
    }
    e.addEventListener("click", function() {
        for (let i = 0 ; i <= 3 ; i++) {
            let thing = sorts[i]
            thing.className = "sort border border-primary pl-4 pr-4 pt-2 pb-2"
        }
        e.className = "sort border border-primary pl-4 pr-4 pt-2 pb-2 active-sort"
    })
})
let date = new Date().getFullYear();
document.querySelector(".foot span").innerHTML = date