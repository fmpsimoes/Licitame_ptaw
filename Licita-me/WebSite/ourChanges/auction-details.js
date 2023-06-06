let cur_bid = 465.0;
let base_bid = 400.0;
let avaliacao_perito = 600.0;
let preco_imediato_vendedor = 500.0;
$(document).ready(function(){
    async function getData(option) {
        let url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/${option}.json?api-key=VQBjarV4jyFHNZLWxAyuYXM9w10RACG4`
        let response = await fetch(url);
        if (response.ok) { // if HTTP-status is 200-299
            // get the response body (the method explained below)
            return await response.json();
        } else {
            alert("HTTP-Error: " + response.status);
        }
    }
    $("#licitar_form").append(gerform());

});

function gerform() {
    let form = document.createElement("div");
    form.setAttribute("class", "bid-form");
    form.append(gerformtitle());
    form.append(gerformbody());
    return form;
  }
  
  function gerformtitle() {
    let formtitle = document.createElement("div");
    formtitle.setAttribute("class", "form-title");
    let lich5 = document.createElement("h5");
    lich5.innerHTML = "Licite agora";
    let licp = document.createElement("p");
    lich5.innerHTML = "Montante : Mínimo " + minbid() + "€";
    formtitle.append(lich5);
    formtitle.append(licp);
    return formtitle;
  }
  
  function gerformbody() {
    let forminput = document.createElement("input");
    forminput.setAttribute("type", "text");
    forminput.setAttribute("value", minbid());
    let formbut = document.createElement("button");
    formbut.setAttribute("type", "submit");
    formbut.setAttribute("class", "eg-btn btn--primary3 btn--sm");
    formbut.setAttribute("value", "licitar");
    formbut.innerHTML = "Licitar";
    let forminner = document.createElement("div");
    forminner.setAttribute("class", "form-inner gap-2");
    forminner.append(forminput);
    forminner.append(formbut);
    let coldiv = document.createElement("div");
    coldiv.setAttribute("class", "col-xl-12 col-lg-12 col-md-12");
    coldiv.append(forminner);
    let rowdiv = document.createElement("div");
    rowdiv.setAttribute("class", "row");
    rowdiv.append(coldiv);
    let forminputcj = document.createElement("input");
    forminputcj.setAttribute("type", "text");
    forminputcj.setAttribute("disabled", "disabled");
    forminputcj.setAttribute("value", precocomprarja() + "€");
    let formbutcj = document.createElement("button");
    formbutcj.setAttribute("type", "submit");
    formbutcj.setAttribute("class", "eg-btn btn--primary2 btn--sm");
    formbutcj.setAttribute("value", precocomprarja());
    formbutcj.innerHTML = "Comprar já";
    let forminnercj = document.createElement("div");
    forminnercj.setAttribute("class", "form-inner gap-2");
    forminnercj.append(forminputcj);
    forminnercj.append(formbutcj);
    let coldiv2 = document.createElement("div");
    coldiv2.setAttribute("class", "col-xl-12 col-lg-12 col-md-12");
    coldiv2.append(forminnercj);
    let rowdiv2 = document.createElement("div");
    rowdiv2.setAttribute("class", "row");
    rowdiv2.append(coldiv2);
    let formbody = document.createElement("form");
    formbody.append(rowdiv);
    formbody.append(document.createElement("br"));
    //accordion
    let accordion = document.createElement("div");
    accordion.setAttribute("id", "accordionExample");
    accordion.setAttribute("class", "accordion");
    let accordionitem = document.createElement("div");
    accordionitem.setAttribute("class", "accordion-item");
    let accordionheader = document.createElement("h2");
    accordionheader.setAttribute("class", "accordion-header");
    accordionheader.setAttribute("id", "headingOne");
    let accordionbut = document.createElement("button");
    accordionbut.innerHTML = "Opções alternativas de licitar";
    //accordionbut.setAttribute("id","collapse")
    //accordionbut.setAttribute("href","#collapseExample")
    accordionbut.setAttribute("class", "accordion-button collapsed");
    accordionbut.setAttribute("type", "button");
    accordionbut.setAttribute("data-bs-toggle", "collapse");
    accordionbut.setAttribute("data-bs-target", "#collapseOne");
    accordionbut.setAttribute("aria-expanded", "true");
    accordionbut.setAttribute("aria-controls", "collapseOne");
    accordionheader.append(accordionbut);
    accordionitem.append(accordionheader);
    let accordioncollapse = document.createElement("div");
    accordioncollapse.setAttribute("id", "collapseOne");
    accordioncollapse.setAttribute("class", "accordion-collapse collapse");
    accordioncollapse.setAttribute("aria-labelledby", "headingOne");
    accordioncollapse.setAttribute("data-bs-parent", "#accordionExample");
    let accordionbody = document.createElement("div");
    accordionbody.setAttribute("class", "accordion-body");
    let p = document.createElement("p");
    p.setAttribute("id", "p2");
    p.innerHTML = "";
    let rowdiv4 = document.createElement("div");
    rowdiv4.setAttribute("class", "row");
    rowdiv4.append(p);
    let titlenow = document.createElement("h5");
    titlenow.innerHTML = "Compra imediata ";
    let infoicon2 = document.createElement("i");
    infoicon2.setAttribute("class", "bi-info-circle-fill");
    infoicon2.setAttribute("data-bs-toggle", "tooltip");
    infoicon2.setAttribute("data-bs-placement", "bottom");
    infoicon2.setAttribute("title", "descricao funcionalidade");
    titlenow.append(infoicon2);
    accordionbody.append(titlenow);
    accordionbody.append(rowdiv4);
    accordionbody.append(rowdiv2);
    let br = document.createElement("br");
    let titleauto = document.createElement("h5");
    titleauto.innerHTML = "Licitação automática ";
    let infoicon = document.createElement("i");
    infoicon.setAttribute("class", "bi-info-circle-fill");
    infoicon.setAttribute("data-bs-toggle", "tooltip");
    infoicon.setAttribute("data-bs-placement", "bottom");
    infoicon.setAttribute("title", "descricao funcionalidade");
    titleauto.append(infoicon);
    let p2 = document.createElement("p");
    p2.setAttribute("id", "p3");
    p2.innerHTML = "";
    let rowdiv5 = document.createElement("div");
    rowdiv5.setAttribute("class", "row");
    rowdiv5.append(p2);
    accordionbody.append(br);
    accordionbody.append(titleauto);
    accordionbody.append(rowdiv5);
    let forminputcj2 = document.createElement("input");
    forminputcj2.setAttribute("type", "text");
    forminputcj2.setAttribute(
      "placeholder",
      "Valor limite (min.:" + minbid() + "€)"
    );
    let divswit = document.createElement("div");
    divswit.setAttribute("class", "form-check form-switch switchToggle");
    let formswitcj = document.createElement("input");
    formswitcj.setAttribute("id", "switch");
    formswitcj.setAttribute("type", "checkbox");
    formswitcj.setAttribute("role", "switch");
    formswitcj.setAttribute("class", "form-check-input");
    divswit.append(formswitcj);
    let labelswit = document.createElement("label");
    labelswit.setAttribute("for", "switch");
    labelswit.innerHTML = "Toggle";
    divswit.append(labelswit);
    //formswitcj.setAttribute("value", precocomprarja())
    //formswitcj.innerHTML = "Licitar"
    let forminnercj2 = document.createElement("div");
    forminnercj2.setAttribute("class", "form-inner gap-2");
    forminnercj2.append(forminputcj2);
    forminnercj2.append(divswit);
    let coldiv3 = document.createElement("div");
    coldiv3.setAttribute("class", "col-xl-12 col-lg-12 col-md-12");
    coldiv3.append(forminnercj2);
    let rowdiv3 = document.createElement("div");
    rowdiv3.setAttribute("class", "row");
    rowdiv3.append(coldiv3);
    accordionbody.append(rowdiv3);
    accordioncollapse.append(accordionbody);
    accordionitem.append(accordioncollapse);
    accordion.append(accordionitem);
    formbody.append(accordion);
    return formbody;
  }
  
  function minbid() {
    return cur_bid + base_bid * 0.05;
  }
  
  function precocomprarja() {
    return Math.max(avaliacao_perito, preco_imediato_vendedor, cur_bid * 1.5);
  }
  