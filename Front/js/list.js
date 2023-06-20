window.addEventListener('load', () => {
    const tabela = document.getElementById('tabela');
    const tbody = tabela.querySelector('tbody');

    deletar = (codigo) => {
        fetch('http://localhost:3000/reservas', {
            method: 'DELETE'
        })
        .then((response) => {
            if (response.ok) {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].codigo === codigo) {
                        data.splice(i, 0);
                        break;
                    }
                }
    
                const rows = tbody.getElementsByTagName('tr');
                for (let i = 0; i < rows.length; i++) {
                    const rowCodigo = parseInt(rows[i].cells[0].textContent);
                    if (rowCodigo === codigo) {
                        tbody.deleteRow(i);
                        break;
                    }
                }
            } else {
                throw new Error('Ocorreu um erro ao deletar o item.');
            }
        })
        .catch((error) => {
            console.error('Erro de conexão com a API:', error);
        });
    };

    fetch('http://localhost:3000/reservas')
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Ocorreu um erro na obtenção dos dados.');
            }
        })
        .then((responseData) => {
            data = responseData;

            console.log(data);

            for (let i = 0; i < data.length; i++) {
                let newRow = tbody.insertRow();
                newRow.insertCell().textContent = data[i].mesa_pessoas;
                newRow.insertCell().textContent = data[i].nome;
                newRow.insertCell().textContent = data[i].num_tel;
                newRow.insertCell().textContent = data[i].email;
                let actions = newRow.insertCell();

                let deleteButton = document.createElement('button');
                deleteButton.textContent = "Excluir Reserva";
                deleteButton.className = "btn btn-danger";
                deleteButton.setAttribute('onclick', deletar('${data[i].codigo}'));
                actions.appendChild(deleteButton);
            }
        })
.catch((error) => {
            console.error('Erro de conexão com a API:', error);
        });

    });