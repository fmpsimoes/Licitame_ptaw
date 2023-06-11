$(document).ready(function () {
    getDataPessoal();
    let form = document.getElementById("form12");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        updateDataPessoal(event);
    });
    getHistoricoLicitacoes();
    getLeiloesGanhos();
    getMeusLeiloes();
});

//COMENTAR ESTILOS DE TABELAS


function getMeusLeiloes() {
    let table;
    let div;
    div = document.getElementById("tableosmeusleiloes");
    table = document.createElement("table");
    table.classList.add('eg-table', 'order-table', 'table', 'mb-0', 'display');
    table.id = "tabelameusleiloes";
    let thead = document.createElement('thead');
    thead.id = "theadRev";
    let tr2 = document.createElement('tr');
    let th1 = document.createElement('th');
    th1.textContent = "Imagem";
    let th2 = document.createElement('th');
    th2.textContent = "Título";
    let th3 = document.createElement('th');
    th3.textContent = "Data Prevista Fim";
    let th4 = document.createElement('th');
    th4.textContent = "Categoria";
    let th5 = document.createElement('th');
    th5.textContent = "Estado";
    tr2.appendChild(th1);
    tr2.appendChild(th2);
    tr2.appendChild(th3);
    tr2.appendChild(th4);
    tr2.appendChild(th5);
    thead.appendChild(tr2);
    let tbody = document.createElement('tbody');
    $.ajax({
        url: './ourChanges/getMeusLeiloes.php',
        type: 'POST',
        success: function (response) {
            var data = JSON.parse(response);
            data.forEach(element => {
                let tr = document.createElement('tr');
                tr.id = 'row_' + element['id'];
                if (element["estado"] == "Ativo") {
                    tr.onclick = function () {
                        pagLicitar(element['id']);
                    };
                }
                let td1 = document.createElement('td');
                let img = document.createElement('img');
                img.classList.add('img-fluid');
                (async function () {
                    const imagePath = await getFirstImage(element['id']);
                    if (imagePath) {
                        console.log("Imagem: " + imagePath);
                        img.src = imagePath;
                    } else {
                        console.log("No matching image found.");
                        img.src = "imagePath";
                    }
                })();
                img.alt = '#';
                td1.appendChild(img);
                let td2 = document.createElement('td');
                td2.textContent = element["titulo"];
                let td3 = document.createElement('td');
                td3.textContent = element["datafim"];
                let td4 = document.createElement('td');
                td4.textContent = element["categoria"];
                let td5 = document.createElement('td');
                td5.textContent = element["estado"];
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                tr.appendChild(td5);
                tbody.appendChild(tr);
            });

            table.appendChild(thead);
            table.appendChild(tbody);
            div.appendChild(table);

            $(table).DataTable({
                language: {
                    url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/pt-PT.json',
                },
                "lengthChange": false,
            });
        },
        error: function (xhr, status, error) {
            console.error(error);
            table.appendChild(tbody);
            div.appendChild(table);
        }
    });
}

function getHistoricoLicitacoes() {
    let table;
    let div;
    div = document.getElementById("tablelicitacoes");
    table = document.createElement("table");
    table.classList.add('eg-table', 'order-table', 'table', 'mb-0', 'display');
    table.id = "tabelaHistoricoLicitacoes";
    let thead = document.createElement('thead');
    thead.id = "theadRev";
    let tr2 = document.createElement('tr');
    let th1 = document.createElement('th');
    th1.textContent = "Imagem";
    let th2 = document.createElement('th');
    th2.textContent = "Título Leilão";
    let th3 = document.createElement('th');
    th3.textContent = "Sua Licitação";
    let th4 = document.createElement('th');
    th4.textContent = "Valor Atual";
    let th5 = document.createElement('th');
    th5.textContent = "Estado";
    tr2.appendChild(th1);
    tr2.appendChild(th2);
    tr2.appendChild(th3);
    tr2.appendChild(th4);
    tr2.appendChild(th5);
    thead.appendChild(tr2);
    let tbody = document.createElement('tbody');
    $.ajax({
        url: './ourChanges/getMinhasLicitacoes.php',
        type: 'POST',
        success: function (response) {
            var data = JSON.parse(response);
            data.forEach(element => {
                let tr = document.createElement('tr');
                tr.id = 'row_' + element['id'];
                if (element["estado"] == "Ativo") {
                    tr.onclick = function () {
                        pagLicitar(element['id']);
                    };
                }
                let td1 = document.createElement('td');
                let img = document.createElement('img');
                img.classList.add('img-fluid');
                (async function () {
                    const imagePath = await getFirstImage(element['id']);
                    if (imagePath) {
                        console.log("Imagem: " + imagePath);
                        img.src = imagePath;
                    } else {
                        console.log("No matching image found.");
                        img.src = "imagePath";
                    }
                })();
                img.alt = '#';
                td1.appendChild(img);
                let td2 = document.createElement('td');
                td2.textContent = element["titulo"];
                let td3 = document.createElement('td');
                td3.textContent = element["valorlicitacao"];
                let td4 = document.createElement('td');
                td4.textContent = element["valoratualleilao"];
                let td5 = document.createElement('td');
                td5.textContent = element["estado"];
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                tr.appendChild(td5);
                tbody.appendChild(tr)
            });
            table.appendChild(thead);
            table.appendChild(tbody);
            div.appendChild(table);

            $(table).DataTable({
                language: {
                    url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/pt-PT.json',
                },
                "lengthChange": false,
            });
        },
        error: function (xhr, status, error) {
            console.error(error);
            div.appendChild(table);
        }
    });
}
function getLeiloesGanhos() {
    let table;
    let div;
    div = document.getElementById("tableLeiloesGanhos");
    table = document.createElement("table");
    table.classList.add('eg-table', 'order-table', 'table', 'mb-0', 'display');
    table.id = "tabelaLeiloesGanhos";
    let thead = document.createElement('thead');
    thead.id = "theadRev";
    let tr2 = document.createElement('tr');
    let th1 = document.createElement('th');
    th1.textContent = "Imagem";
    let th2 = document.createElement('th');
    th2.textContent = "Título";
    let th3 = document.createElement('th');
    th3.textContent = "Preço";
    let th4 = document.createElement('th');
    th4.textContent = "Estado";
    let th5 = document.createElement('th');
    th5.textContent = "Pagamento";
    tr2.appendChild(th1);
    tr2.appendChild(th2);
    tr2.appendChild(th3);
    tr2.appendChild(th4);
    tr2.appendChild(th5);
    thead.appendChild(tr2);
    let tbody = document.createElement('tbody');
    $.ajax({
        url: './ourChanges/getLeiloesGanhos.php',
        type: 'POST',
        success: function (response) {
            var data = JSON.parse(response);
            data.forEach(element => {
                let tr = document.createElement('tr');
                tr.id = 'row_' + element['id'];
                //tr.onclick = getRowId;
                let td1 = document.createElement('td');
                let img = document.createElement('img');
                img.classList.add('img-fluid');
                (async function () {
                    const imagePath = await getFirstImage(element['id']);
                    if (imagePath) {
                        console.log("Imagem: " + imagePath);
                        img.src = imagePath;
                    } else {
                        console.log("No matching image found.");
                        img.src = "imagePath";
                    }
                })();
                img.alt = '#';
                td1.appendChild(img);
                let td2 = document.createElement('td');
                td2.textContent = element["titulo"];
                let td3 = document.createElement('td');
                td3.textContent = element["precobase"];//Depois trocar pelo valor ao qual foi comprado
                let td4 = document.createElement('td');
                td4.textContent = element["estado"];
                let td5 = document.createElement('td');
                td5.classList.add('pointer', 'mousehover');
                //if (element["estadopagamento"] == "Pendente") {
                td5.innerHTML = "<div class='icon1'>" +
                    "<svg width='36' height='38' viewBox='0 0 46 48' xmlns='http://www.w3.org/2000/svg' id='icon-svg'>" +
                    "<path d='M2.68749 7.59375V14.625H1.75976C0.900385 14.625 0.802729 14.6445 0.587885 14.8691C0.0996037 15.3477 0.167963 15.4648 2.44335 18.209C3.63476 19.6348 4.65038 20.7676 4.7871 20.8164C4.94335 20.875 5.11913 20.875 5.27538 20.8164C5.4121 20.7676 6.42773 19.6348 7.61913 18.209C9.89453 15.4648 9.96288 15.3477 9.4746 14.8691C9.25976 14.6445 9.1621 14.625 8.30273 14.625H7.37499V7.59375V0.562498H6.59374H5.81249V8.13086V15.709L6.05663 15.9434C6.24218 16.1387 6.38867 16.1875 6.78906 16.1875H7.2871L6.20312 17.4766C5.60742 18.1895 5.08007 18.7754 5.03124 18.7754C4.98242 18.7754 4.45507 18.1895 3.85937 17.4766L2.77538 16.1875H3.27343C3.67382 16.1875 3.82031 16.1387 4.00585 15.9434L4.24999 15.709V8.13086V0.562498H3.46874H2.68749V7.59375Z'></path>" +
                    "<path d='M10.5488 0.650391C9.66992 0.865234 8.85937 1.5293 8.44922 2.36914C8.11719 3.04297 8.10742 4.30273 8.42969 4.95703C8.77148 5.65039 9.16211 6.07031 9.83594 6.42188C10.4219 6.73438 10.5098 6.75391 11.6523 6.79297L12.8437 6.83203V10.1914V13.541L10.9785 16.7637C9.06445 20.0742 8.52734 21.2168 8.16602 22.6426C7.61914 24.8398 7.63867 25.6211 8.35156 32.0566C8.73242 35.5137 8.9375 37.7207 8.9375 38.4727V39.625H8.40039C7.95117 39.625 7.81445 39.6641 7.61914 39.8691L7.375 40.1035V43.5312V46.959L7.61914 47.1934L7.85352 47.4375H15.1875H22.5215L22.7559 47.1934L23 46.959V43.5312V40.1035L22.7559 39.8691C22.5801 39.6836 22.4141 39.625 22.0723 39.625C21.8281 39.625 21.6328 39.5957 21.6328 39.5664C21.6328 39.5371 21.916 39.0293 22.2676 38.4434C23.4004 36.5488 23.6836 35.6016 23.752 33.5215C23.8105 31.793 23.7129 30.9727 23.2539 29.6348L22.9316 28.6875H28.5859H34.2402L34.4746 28.4434L34.7187 28.209V17.5254V6.83203L35.9199 6.79297C37.0527 6.75391 37.1406 6.73438 37.7266 6.42188C38.4102 6.06055 38.7031 5.75781 39.0937 5.01562C39.3086 4.5957 39.3477 4.39062 39.3477 3.6875C39.3574 2.92578 39.3281 2.80859 39.0254 2.24219C38.6641 1.56836 38.2539 1.17773 37.5508 0.835938L37.1113 0.611328L23.9766 0.591797C16.75 0.591797 10.7148 0.611328 10.5488 0.650391ZM12.8437 3.6875V5.25H11.916C10.8125 5.25 10.4414 5.12305 10.0508 4.60547C9.81641 4.30273 9.76758 4.14648 9.76758 3.6875C9.76758 3.23828 9.81641 3.07227 10.0312 2.78906C10.4316 2.26172 10.793 2.125 11.8965 2.125H12.8437V3.6875ZM33.1367 11.1289L33.1074 20.1328L32.4727 20.25C29.377 20.8262 26.8574 23.3457 26.2812 26.4414L26.1641 27.0762L24.1914 27.1055L22.2285 27.125L22.1992 23.9805C22.1699 20.8457 22.1699 20.8262 21.9258 " +
                    "20.3379C21.623 19.7129 21.0371 19.127 20.4121 18.8242C20.0117 18.6289 19.7773 18.5801 19.0937 18.5801C18.3711 18.5801 18.1953 18.6191 17.7461 18.8535C17.1602 19.166 16.5352 19.7617 16.3594 20.1914C16.2227 20.5234 16.2031 20.5332 15.4805 20.3379C15.1875 20.2598 14.8262 20.1914 14.6797 20.1914H14.4062V11.1582V2.125H23.7812H33.1562L33.1367 11.1289ZM37.1992 2.45703C37.8926 2.98438 38.0293 3.93164 37.5215 4.60547C37.1309 5.11328 36.7305 5.25 35.6562 5.25H34.7187V3.67773V2.10547L35.7734 2.14453C36.7695 2.17383 36.8574 2.19336 37.1992 2.45703ZM13.127 28.502C13.3223 28.668 13.5176 28.6875 14.6602 28.6875H15.9687V29.0781V29.4688H16.75H17.5312V25.4062C17.5312 20.8848 17.5312 20.9141 18.1953 20.4062C18.4785 20.1914 18.6445 20.1426 19.0937 20.1426C19.543 20.1426 19.709 20.1914 19.9922 20.4062C20.6367 20.9043 20.6562 21.002 20.6562 24.3125V27.2715L21.291 28.8633C21.6328 29.7324 21.9844 30.7773 22.0723 31.1777C22.2578 32.0859 22.2676 33.9121 22.082 34.8594C21.8867 35.875 21.6328 36.4609 20.6953 38.0332C20.2461 38.7949 19.875 39.4688 19.875 39.5176C19.875 39.5957 18.4004 39.625 15.1875 39.625H10.5V38.4238C10.5 37.5938 10.3145 35.5527 9.91406 31.959C9.29883 26.4512 9.24023 25.4551 9.46484 24.0977C9.75781 22.2617 10.0898 21.4707 11.6523 18.7363L12.7949 16.7344L12.8437 22.5254L12.8926 28.3164L13.127 28.502ZM15.5488 21.9785L15.9199 22.0957L15.9492 24.6152L15.9687 27.125H15.1875H14.4062V24.4297V21.7246L14.7871 21.793C15.002 21.8223 15.3437 21.9102 15.5488 21.9785ZM33.1562 24.4395V27.125H30.4707C27.4238 27.125 27.6777 27.2129 27.9316 26.2461C28.3809 24.5664 29.6895 23.0039 31.291 22.2617C31.8672 21.998 32.5898 21.7734 32.9414 21.7637L33.1562 21.7539V24.4395ZM21.4375 43.5312V45.875H15.1875H8.9375V43.5312V41.1875H15.1875H21.4375V43.5312Z'></path>" +
                    "<path d='M22.7559 3.7754C20.7246 4.21485 19.2305 5.58204 18.5469 7.59376C18.4102 7.98439 18.3613 8.41407 18.3613 9.15626C18.3613 10.7383 18.8594 11.9395 19.9531 13.0332C22.0625 15.1426 25.5 15.1328 27.6191 13.0137C29.2988 11.334 29.6992 8.91212 28.6641 6.75392C27.7949 4.94728 26.0566 3.81446 24.0254 3.73634C23.5469 3.71681 22.9707 3.73634 22.7559 3.7754ZM25.3828 5.6211C26.2715 6.03126 26.8379 6.59767 27.2773 7.47657C27.6191 8.1797 27.6387 8.26759 27.6387 9.15626C27.6387 10.0449 27.6191 10.1328 27.2773 10.8359C26.8379 11.7246 26.2715 12.2715 25.3633 12.7012C24.7676 12.9844 24.6211 13.0137 23.7812 13.0137C22.9414 13.0137 22.7949 12.9844 22.1992 12.7012C21.291 12.2715 20.7246 11.7246 20.2852 10.8359C19.9434 10.1328 19.9238 10.0449 19.9238 9.16603C19.9238 8.31642 19.9531 8.16993 20.2363 7.57423C20.627 6.74415 21.1836 6.13868 21.916 5.75782C22.6777 5.34767 23.1074 5.25001 23.9961 5.28907C24.5918 5.31837 24.8945 5.39649 25.3828 5.6211Z'></path>" +
                    "<path d='M38.625 18.5312V25.5625H37.6973C36.8379 25.5625 36.7402 25.582 36.5254 25.8066C36.0371 26.2852 36.1055 26.4023 38.3809 29.1465C39.5723 30.5723 40.5879 31.7051 40.7246 31.7539C40.8809 31.8125 41.0566 31.8125 41.2129 31.7539C41.3496 31.7051 42.3652 30.5723 43.5566 29.1465C45.832 26.4023 45.9004 26.2852 45.4121 25.8066C45.1973 25.582 45.0996 25.5625 44.2402 25.5625H43.3125V18.5312V11.5H42.5312H41.75V19.0684V26.6465L41.9941 26.8809C42.1797 27.0762 42.3262 27.125 42.7266 27.125H43.2246L42.1406 28.4141C41.5449 29.127 41.0176 29.7129 40.9687 29.7129C40.9199 29.7129 40.3926 29.127 39.7969 28.4141L38.7129 27.125H39.2109C39.6113 27.125 39.7578 27.0762 39.9434 26.8809L40.1875 26.6465V19.0684V11.5H39.4062H38.625V18.5312Z'></path>"
                "</svg>" +
                    "</div>";
                /*}else{
                    td5.innerHTML =  "<div class='icon'>"+
                    "<svg width='38' height='38' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg' id='icon-svg1'>"+
                        "<path d='M23.1445 0.0586052C22.959 0.0781364 22.3828 0.146496 21.875 0.195324C18.6523 0.546886 15.0879 1.75782 12.207 3.47657C8.54492 5.66407 5.56641 8.64259 3.37891 12.3047C1.68945 15.1367 0.507813 18.584 0.0976563 21.875C-0.0292969 22.9395 -0.0292969 27.0606 0.0976563 28.125C1.03516 35.7227 5.51758 42.5391 12.207 46.5234C18.75 50.4297 26.9336 51.0645 34.1309 48.2227C35.2246 47.793 37.5684 46.6016 38.0469 46.2402C38.5352 45.8692 38.8086 45.2149 38.7402 44.5606C38.6328 43.5742 37.9688 42.9102 36.9824 42.8027C36.4941 42.7539 36.416 42.7832 35.1563 43.4375C31.8555 45.1563 29.0332 45.9375 25.6348 46.0645C16.3574 46.4258 7.79297 40.4395 4.89258 31.582C3.95508 28.711 3.62305 25.8692 3.90625 23.0371C4.22852 19.8145 5.42969 16.2598 7.03125 13.8281C9.87305 9.48243 13.6816 6.50392 18.3203 4.99025C24.4238 2.99806 30.8496 3.80861 36.2988 7.26564C36.7969 7.57814 37.3633 7.87111 37.5684 7.91993C39.0918 8.2715 40.4102 6.6504 39.7559 5.22462C39.5313 4.73634 39.3359 4.56056 38.1836 3.8379C35.1074 1.89454 31.6602 0.67384 27.9297 0.195324C27.0703 0.0781364 23.7402 -0.00975418 23.1445 0.0586052Z'></path>"+
                        "<path d='M47.2949 4.12109C47.1289 4.17968 46.8554 4.33593 46.6894 4.48242C46.5332 4.61913 41.7968 10.4687 36.1718 17.4805C30.5468 24.4922 25.8593 30.3027 25.7422 30.3906C25.4101 30.6641 24.9511 30.7129 24.5703 30.5078C24.3847 30.4004 21.9433 28.1543 19.1601 25.5078C16.3672 22.8613 13.9843 20.6152 13.8574 20.5176C13.0859 19.9316 12.0508 20.0098 11.3476 20.7031C10.6445 21.416 10.5566 22.4805 11.1621 23.2324C11.4941 23.6523 21.1523 32.8223 21.875 33.4082C23.8769 35.0293 26.6601 34.9219 28.4765 33.1543C29.1211 32.5293 49.4531 7.27538 49.6777 6.8164C50.4492 5.27343 48.9648 3.58398 47.2949 4.12109Z'></path>"+
                        "<path d='M46.4845 17.4414C45.4494 17.8906 45.1174 18.8184 45.4592 20.3027C45.9084 22.207 46.0939 24.8145 45.9084 26.7578C45.5861 30.1367 44.5607 33.1934 42.7736 36.1328C42.0314 37.3633 41.9435 37.8027 42.3146 38.6035C42.5002 39.0137 42.6564 39.1992 42.9787 39.3848C43.5451 39.7168 44.0529 39.7949 44.5705 39.6485C45.2931 39.4531 45.7033 38.9551 46.8361 36.9141C49.7267 31.6797 50.6154 25.332 49.2678 19.4727C49.0724 18.6231 48.9553 18.3203 48.7111 18.0274C48.1545 17.3535 47.2365 17.1094 46.4845 17.4414Z'></path>"+
                    "</svg>"+
                "</div>"
                }*/
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                tr.appendChild(td5);
                tbody.appendChild(tr);
            });

            table.appendChild(thead);
            table.appendChild(tbody);
            div.appendChild(table);

            $(table).DataTable({
                language: {
                    url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/pt-PT.json',
                },
                "lengthChange": false,
            });
        },
        error: function (xhr, status, error) {
            console.error(error);
            table.appendChild(tbody);
            div.appendChild(table);
        }
    });
}



function logout() {
    $.ajax({
        type: "POST",
        url: './ourChanges/logout.php',
        data: { logout: 1 },
        success: function (response) {
            window.location.href = "login.php"; //redirecionar para o login depois de terminar sessão
        }
    });
}
$('table').ready(function () {
    $('table').DataTable();
});




function getDataPessoal() {
    $.ajax({
        type: "POST",
        url: './ourChanges/getUserData.php',
        success: function (response) {
            const data = JSON.parse(response);
            console.log(data);
            $('#firstname').val(data['nome']);
            $('#lastname').val(data['apelido']);
            $("#contact").val(data['contactotelefonico']);
            $('#email').val(data['email']);
            $('#address').val(data['morada']);
            $("#porta").val(data['porta']);
            $('#concelho').val(data['concelho']);
            $('#zipcode').val(data['codigopostal']);
            $("#ttNome").html(data['nome'] + " " + data['apelido']);
            $("#ttEmail").html(data['email']);
        },
        error: function (xhr, status, error) {
            console.error(error);
        }
    });
}

function updateDataPessoal(event) {
    const obj = {
        nome: $('#firstname').val(),
        apelido: $('#lastname').val(),
        contacto: $("#contact").val(),
        email: $('#email').val(),
        morada: $('#address').val(),
        porta: $("#porta").val(),
        concelho: $('#concelho').val(),
        codpostal: $('#zipcode').val(),
        pass1: $('#password').val(),
        pass2: $('#password2').val(),
    }
    if (obj['pass1'] == obj['pass2']) {
        $.ajax({
            type: "POST",
            url: './ourChanges/setUserData.php',
            data: { data: obj },
            success: function (response) {
                const loginDetails = {
                    email: obj['email'],
                    pass: obj['pass1'],
                }
                if (obj['pass1'] != "") {
                    doNewLogin(loginDetails, event);
                } else {
                    alert(JSON.parse(response));
                    window.location.href = "dashboard.php";
                }
            },
            error: function (xhr, status, error) {
                event.preventDefault();
                console.error(error);
            }
        });
    } else {
        event.preventDefault();
        alert("As novas passwords não coincidem");
        $('#password').val("");
        $('#password2').val("");
    }

}

//Add botão anunciar tamanho pequeno janela
function createAnunciarContainer1() {
    // Create the new div element
    var anunciarCont = document.createElement("div");
    anunciarCont.setAttribute("id", "AnunciarContainer");
    anunciarCont.classList.add("eg-btn", "btn--primary", "mobile-visible", "header-btn");
    anunciarCont.style.display = "block";
    anunciarCont.style.visibility = "initial";
    anunciarCont.style.margin = "0px 0px 10px 0px"

    // Create the anchor element
    var anchor = document.createElement("a");
    anchor.setAttribute("href", "form-auction.php");
    anchor.textContent = "Anunciar";

    // Append the anchor to the contaContainer
    anunciarCont.appendChild(anchor);

    return anunciarCont;
}

//Add botão anunciar tamanho grande janela
function createAnunciarContainer2() {
    var anunciarCont1 = document.createElement("div");
    anunciarCont1.classList.add("eg-btn", "btn--primary", "header-btn");
    anunciarCont1.setAttribute("id", "contabtn1");
    anunciarCont1.style.margin = "0px 10px 0px 0px"
    // Create the anchor element
    var anchor = document.createElement("a");
    anchor.setAttribute("href", "form-auction.php");
    anchor.textContent = "Anunciar";

    // Append the anchor to the contaContainer
    anunciarCont1.appendChild(anchor);
    return anunciarCont1;
}

async function getFirstImage(id) {
    const arrayImages = [];

    try {
        const response = await $.ajax({
            type: "POST",
            url: './ourChanges/getImagensLeilao.php',
            data: { data: id }
        });

        const data = JSON.parse(response);
        data.fotos.forEach(element => {
            arrayImages.push(element.dirimagem);
        });

        for (let i = 0; i < arrayImages.length; i++) {
            const imagePath = arrayImages[i];
            const filename = imagePath.split('/').pop();
            if (filename.split('.')[0].slice(-1) === '1') {
                return imagePath.substring(1);
            }
        }

        return null; // If no matching image is found
    } catch (error) {
        console.error(error);
        return "error";
    }
}

function doNewLogin(loginDetails, event) {
    $.ajax({
        url: './ourChanges/loginTry.php',
        type: 'POST',
        data: { data: loginDetails },
        success: function (response) {
            let jsonResponse = JSON.parse(response);
            if (jsonResponse == "dashboard.php" || jsonResponse == "dashboardAdmin.php" || jsonResponse == "dashboardPerito.php") {
                alert("Dados e password alterados com Sucesso!");
                window.location.href = jsonResponse; //redirecionar para o respetivo painel depois de inciar sessão
            }
            else {
                alert(jsonResponse);
            }
        },
        error: function (xhr, status, error) {
            event.preventDefault();
            console.error(error);
        }
    })
}