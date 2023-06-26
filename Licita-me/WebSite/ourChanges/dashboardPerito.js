


$(document).ready(function () {
    getDataPessoal();
    let form = document.getElementById("form123");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        updateDataPessoal(event);
    });
    getPorRever();
    getRevistos();
});


function getRevistos() {
    let countAprovados = 0;
    let countRejeitados = 0;
    let table = document.createElement("table");
    table.classList.add('eg-table', 'order-table', 'table', 'mb-0', 'display');
    table.id = "tabelaRevista";
    let thead = document.createElement('thead');
    thead.id = "theadRev";
    let tr2 = document.createElement('tr');
    let th1 = document.createElement('th');
    th1.textContent = "Imagem";
    let th2 = document.createElement('th');
    th2.textContent = "Título";
    let th3 = document.createElement('th');
    th3.textContent = "Data Prevista Inicio";
    let th4 = document.createElement('th');
    th4.textContent = "Categoria";
    let th5 = document.createElement('th');
    th5.textContent = "Status";
    tr2.appendChild(th1);
    tr2.appendChild(th2);
    tr2.appendChild(th3);
    tr2.appendChild(th4);
    tr2.appendChild(th5);
    thead.appendChild(tr2);
    let tbody = document.createElement('tbody');
    $.ajax({
        url: './ourChanges/getLeiloesPerito.php',
        type: 'POST',
        data: { modalidade: ['Aprovado', 'Rejeitado', 'Ativo', 'Vendido', 'Expirado'] },
        success: function (response) {
            var data = JSON.parse(response);
            data.forEach(element => {
                //Calculo das estatisticas
                if (element["estado"] == 'Aprovado' || element["estado"] == 'Ativo' || element["estado"] == 'Vendido' || element["estado"] == 'Expirado') {
                    countAprovados= countAprovados+1;   
                } else {
                    if (element["estado"] == 'Rejeitado') {
                        countRejeitados= countRejeitados+1;
                    }
                }
                $("#countAprovados").text(formatToFourDigits(countAprovados));
                $("#countRejeitados").text(formatToFourDigits(countRejeitados));
                var taxaAprovacao = countAprovados / (countRejeitados + countAprovados) * 100; //faz o calculo da %
                var taxaAprovacaoFormatada = taxaAprovacao % 1 === 0 ? taxaAprovacao.toFixed(0) : taxaAprovacao.toFixed(2); //verifica se o numero é inteiro ou não
                $("#countTaxaAprov").text(taxaAprovacaoFormatada);
                //Criação de Head da tabela
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
                td3.textContent = element["datainicio"];
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
            document.getElementById("tableRevistos").appendChild(table);

            // Initialize DataTables on the table
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

function getPorRever() {
    let table = document.createElement("table");
    table.classList.add('eg-table', 'order-table', 'table', 'mb-0', 'display');
    table.id = "tabelaPorRever";
    let thead = document.createElement('thead');
    thead.id = "theadRev";
    let tr2 = document.createElement('tr');
    let th1 = document.createElement('th');
    th1.textContent = "Imagem";
    let th2 = document.createElement('th');
    th2.textContent = "Título";
    let th3 = document.createElement('th');
    th3.textContent = "Data Prevista Inicio";
    let th4 = document.createElement('th');
    th4.textContent = "Categoria";
    let th5 = document.createElement('th');
    th5.textContent = "Status";
    tr2.appendChild(th1);
    tr2.appendChild(th2);
    tr2.appendChild(th3);
    tr2.appendChild(th4);
    tr2.appendChild(th5);
    thead.appendChild(tr2);
    let tbody = document.createElement('tbody');
    $.ajax({
        url: './ourChanges/getLeiloesPerito.php',
        type: 'POST',
        data: { modalidade: ['Pendente'] },
        success: function (response) {
            var data = new Array();
            data = JSON.parse(response)
            //console.log(data);
            //console.log(data.length);
            $("#countPendentes").text(formatToFourDigits(data.length));
            data.forEach(element => {
                console.log(element['titulo'] + "");
                let tr = document.createElement('tr');
                tr.id = 'row_' + element['id'];
                tr.onclick = function () {
                    revisarLeilao(element['id']);
                };
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
                td3.textContent = element["datainicio"];
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
            document.getElementById("tablePorRever").appendChild(table);

            // Initialize DataTables on the table
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

function getRowId(event) {
    if (event.target.tagName === 'IMG') {
        event.stopPropagation();
    }

    var row = event.currentTarget;  // Use currentTarget instead of target
    var rowId = row.id;
    window.location.href = `form-perito.php?idLeilao=${rowId.substring(4)}`;
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
                    pass: obj['pass1']
                }
                if (obj['pass1'] != "") {
                    doNewLogin(loginDetails, event);
                } else {
                    alert(JSON.parse(response));
                    window.location.href = "dashboardPerito.php";
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
                event.preventDefault();
                alert(jsonResponse);
            }
        },
        error: function (xhr, status, error) {
            event.preventDefault();
            console.error(error);
        }
    })
}
function formatToFourDigits(number) {
    const numberString = number.toString();
    if (numberString.length === 3) {
        return numberString;
    } else {
        return numberString.padStart(2, '0');
    }
}
function revisarLeilao(id_leilao){
    sessionStorage.setItem('id_leilao', id_leilao);
    window.location.href = './form-perito.php';
    }