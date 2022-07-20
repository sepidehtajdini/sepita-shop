const distilled = document.querySelector(".add-distilled");
const apex = document.querySelector(".add-apex");
const cavitron = document.querySelector(".add-cavitron");
const loop = document.querySelector(".add-loop");
const pack = document.querySelector(".add-pack");
const unit = document.querySelector(".add-unit");
const camera = document.querySelector(".add-camera");
const radiography = document.querySelector(".add-radiography");
const autoclave = document.querySelector(".add-autoclave");
const badge = document.querySelector(".badge");
let counter = 0;
let number = document.querySelector(".number");
let productname = document.querySelector(".product-name");
let price = document.querySelector(".price");
const tbody = document.querySelector("tbody");

distilled.addEventListener("click", function () {
    iziToast.settings({
        timeout: 2000,
        titleLineHeight: '30',
        position: 'center',
    });
    iziToast.success({
        title: "محصول مورد نظر به سبد خرید اضافه شد"
    });
    const distilledPrice = document.querySelector(".distilled-price");
    const distilledProduct = document.querySelector(".distilled-product");
    let tr = document.createElement("tr");
    tbody.append(tr);
    let td = document.createElement("td");
    td.innerText = counter+1;
    tr.append(td);
    td = document.createElement("td");
    td.innerText = distilledProduct.innerText;
    tr.append(td);
    td = document.createElement("td");
    td.innerText = distilledPrice.innerText;
    tr.append(td);
    td = document.createElement("td");
    const deletebtn = document.createElement("button");
    deletebtn.setAttribute("class","delete btn-close");
    deletebtn.addEventListener("click", function(){
        tr.remove();
        counter--;
        badge.innerText = counter;
    });
    td.append(deletebtn);
    tr.append(td);
    counter++;
    badge.innerText = counter;
});
apex.addEventListener("click", function () {
    iziToast.settings({
        timeout: 2000,
        titleLineHeight: '30',
        position: 'center',
    });
    iziToast.success({
        title: "محصول مورد نظر به سبد خرید اضافه شد"
    });
    const apexPrice = document.querySelector(".apex-price");
    const apexProduct = document.querySelector(".apex-product");
    let tr = document.createElement("tr");
    tbody.append(tr);
    let td = document.createElement("td");
    td.innerText = counter+1;
    tr.append(td);
    td = document.createElement("td");
    td.innerText = apexProduct.innerText;
    tr.append(td);
    td = document.createElement("td");
    td.innerText = apexPrice.innerText;
    tr.append(td);
    td = document.createElement("td");
    const deletebtn = document.createElement("button");
    deletebtn.setAttribute("class","delete btn-close");
    deletebtn.addEventListener("click", function(){
        tr.remove();
        counter--;
        badge.innerText = counter;
    });
    td.append(deletebtn);
    tr.append(td);
    counter++;
    badge.innerText = counter;
});
cavitron.addEventListener("click", function () {
    iziToast.settings({
        timeout: 2000,
        titleLineHeight: '30',
        position: 'center',
    });
    iziToast.success({
        title: "محصول مورد نظر به سبد خرید اضافه شد"
    });
    const cavitronPrice = document.querySelector(".cavitron-price");
    const cavitronProduct = document.querySelector(".cavitron-product");
    let tr = document.createElement("tr");
    tbody.append(tr);
    let td = document.createElement("td");
    td.innerText = counter+1;
    tr.append(td);
    td = document.createElement("td");
    td.innerText = cavitronProduct.innerText;
    tr.append(td);
    td = document.createElement("td");
    td.innerText = cavitronPrice.innerText;
    tr.append(td);
    td = document.createElement("td");
    const deletebtn = document.createElement("button");
    deletebtn.setAttribute("class","delete btn-close");
    deletebtn.addEventListener("click", function(){
        tr.remove();
        counter--;
        badge.innerText = counter;
    });
    td.append(deletebtn);
    tr.append(td);
    counter++;
    badge.innerText = counter;
});
loop.addEventListener("click", function () {
    iziToast.settings({
        timeout: 2000,
        titleLineHeight: '30',
        position: 'center',
    });
    iziToast.success({
        title: "محصول مورد نظر به سبد خرید اضافه شد"
    });
    const loopPrice = document.querySelector(".loop-price");
    const loopProduct = document.querySelector(".loop-product");
    let tr = document.createElement("tr");
    tbody.append(tr);
    let td = document.createElement("td");
    td.innerText = counter+1;
    tr.append(td);
    td = document.createElement("td");
    td.innerText = loopProduct.innerText;
    tr.append(td);
    td = document.createElement("td");
    td.innerText = loopPrice.innerText;
    tr.append(td);
    td = document.createElement("td");
    const deletebtn = document.createElement("button");
    deletebtn.setAttribute("class","delete btn-close");
    deletebtn.addEventListener("click", function(){
        tr.remove();
        counter--;
        badge.innerText = counter;
    });
    td.append(deletebtn);
    tr.append(td);
    counter++;
    badge.innerText = counter;
});
pack.addEventListener("click", function () {
    iziToast.settings({
        timeout: 2000,
        titleLineHeight: '30',
        position: 'center',
    });
    iziToast.success({
        title: "محصول مورد نظر به سبد خرید اضافه شد"
    });
    const packPrice = document.querySelector(".pack-price");
    const packProduct = document.querySelector(".pack-product");
    let tr = document.createElement("tr");
    tbody.append(tr);
    let td = document.createElement("td");
    td.innerText = counter+1;
    tr.append(td);
    td = document.createElement("td");
    td.innerText = packProduct.innerText;
    tr.append(td);
    td = document.createElement("td");
    td.innerText = packPrice.innerText;
    tr.append(td);
    td = document.createElement("td");
    const deletebtn = document.createElement("button");
    deletebtn.setAttribute("class","delete btn-close");
    deletebtn.addEventListener("click", function(){
        tr.remove();
        counter--;
        badge.innerText = counter;
    });
    td.append(deletebtn);
    tr.append(td);
    counter++;
    badge.innerText = counter;
});
unit.addEventListener("click", function () {
    iziToast.settings({
        timeout: 2000,
        titleLineHeight: '30',
        position: 'center',
    });
    iziToast.success({
        title: "محصول مورد نظر به سبد خرید اضافه شد"
    });
    const unitPrice = document.querySelector(".unit-price");
    const unitProduct = document.querySelector(".unit-product");
    let tr = document.createElement("tr");
    tbody.append(tr);
    let td = document.createElement("td");
    td.innerText = counter+1;
    tr.append(td);
    td = document.createElement("td");
    td.innerText = unitProduct.innerText;
    tr.append(td);
    td = document.createElement("td");
    td.innerText = unitPrice.innerText;
    tr.append(td);
    td = document.createElement("td");
    const deletebtn = document.createElement("button");
    deletebtn.setAttribute("class","delete btn-close");
    deletebtn.addEventListener("click", function(){
        tr.remove();
        counter--;
        badge.innerText = counter;
    });
    td.append(deletebtn);
    tr.append(td);
    counter++;
    badge.innerText = counter;
});
camera.addEventListener("click", function () {
    iziToast.settings({
        timeout: 2000,
        titleLineHeight: '30',
        position: 'center',
    });
    iziToast.success({
        title: "محصول مورد نظر به سبد خرید اضافه شد"
    });
    const cameraPrice = document.querySelector(".camera-price");
    const cameraProduct = document.querySelector(".camera-product");
    let tr = document.createElement("tr");
    tbody.append(tr);
    let td = document.createElement("td");
    td.innerText = counter+1;
    tr.append(td);
    td = document.createElement("td");
    td.innerText = cameraProduct.innerText;
    tr.append(td);
    td = document.createElement("td");
    td.innerText = cameraPrice.innerText;
    tr.append(td);
    td = document.createElement("td");
    const deletebtn = document.createElement("button");
    deletebtn.setAttribute("class","delete btn-close");
    deletebtn.addEventListener("click", function(){
        tr.remove();
        counter--;
        badge.innerText = counter;
    });
    td.append(deletebtn);
    tr.append(td);
    counter++;
    badge.innerText = counter;
});
radiography.addEventListener("click", function () {
    iziToast.settings({
        timeout: 2000,
        titleLineHeight: '30',
        position: 'center',
    });
    iziToast.success({
        title: "محصول مورد نظر به سبد خرید اضافه شد"
    });
    const radiographyPrice = document.querySelector(".radiography-price");
    const radiographyProduct = document.querySelector(".radiography-product");
    let tr = document.createElement("tr");
    tbody.append(tr);
    let td = document.createElement("td");
    td.innerText = counter+1;
    tr.append(td);
    td = document.createElement("td");
    td.innerText = radiographyProduct.innerText;
    tr.append(td);
    td = document.createElement("td");
    td.innerText = radiographyPrice.innerText;
    tr.append(td);
    td = document.createElement("td");
    const deletebtn = document.createElement("button");
    deletebtn.setAttribute("class","delete btn-close");
    deletebtn.addEventListener("click", function(){
        tr.remove();
        counter--;
        badge.innerText = counter;
    });
    td.append(deletebtn);
    tr.append(td);
    counter++;
    badge.innerText = counter;
});
autoclave.addEventListener("click", function () {
    iziToast.settings({
        timeout: 2000,
        titleLineHeight: '30',
        position: 'center',
    });
    iziToast.success({
        title: "محصول مورد نظر به سبد خرید اضافه شد"
    });
    const autoclavePrice = document.querySelector(".autoclave-price");
    const autoclaveProduct = document.querySelector(".autoclave-product");
    let tr = document.createElement("tr");
    tbody.append(tr);
    let td = document.createElement("td");
    td.innerText = counter+1;
    tr.append(td);
    td = document.createElement("td");
    td.innerText = autoclaveProduct.innerText;
    tr.append(td);
    td = document.createElement("td");
    td.innerText = autoclavePrice.innerText;
    tr.append(td);
    td = document.createElement("td");
    const deletebtn = document.createElement("button");
    deletebtn.setAttribute("class","delete btn-close");
    deletebtn.addEventListener("click", function(){
        tr.remove();
        counter--;
        badge.innerText = counter;
    });
    td.append(deletebtn);
    tr.append(td);
    counter++;
    badge.innerText = counter;
});
