$(document).ready(function () {
    getDataPessoal();
    let form = document.getElementById("form12");
    form.addEventListener("submit", function (event) {
        updateDataPessoal();
    });
    getPorRever();
    getRevistos();
});


function getRevistos() {
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
                let tr = document.createElement('tr');
                tr.id = 'row_' + element['id'];
                //tr.onclick = getRowId;
                let td1 = document.createElement('td');
                let img = document.createElement('img');
                img.classList.add('img-fluid');
                img.src = '#';
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
            $(table).DataTable();
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
            console.log(data);
            console.log(data.length);
            data.forEach(element => {
                console.log(element['titulo'] + "");
                let tr = document.createElement('tr');
                tr.id = 'row_' + element['id'];
                tr.onclick = getRowId;
                let td1 = document.createElement('td');
                let img = document.createElement('img');
                img.classList.add('img-fluid');
                img.src = '#';
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
            $(table).DataTable();
        },
        error: function (xhr, status, error) {
            console.error(error);
            table.appendChild(tbody);
            div.appendChild(table);
        }
    });
}

function getRowId(event) {
    var row = event.target.parentNode;
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
function updateDataPessoal() {
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
                console.log(response)
                alert(JSON.parse(response));
                const loginDetails = {
                    email: obj['email'],
                    pass: obj['pass1']
                }
                $.ajax({
                    url: './ourChanges/loginTry.php',
                    type: 'POST',
                    data: { data: loginDetails },
                    success: function (response) {
                        let jsonResponse = JSON.parse(response);

                        if (jsonResponse == "dashboard.php" || jsonResponse == "dashboardAdmin.php" || jsonResponse == "dashboardPerito.php") {
                            window.location.href = jsonResponse; //redirecionar para o respetivo painel depois de inciar sessão
                        }
                        else {
                            alert(jsonResponse);
                        }
                    },
                    error: function (xhr, status, error) {
                        console.error(error);
                    }
                });
            },
            error: function (xhr, status, error) {
                console.error(error);
            }
        });
    } else {
        alert("As novas passwords não coincidem");
        $('#password').val("");
        $('#password').val("");
    }
}
