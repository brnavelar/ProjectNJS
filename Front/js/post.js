document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('formulario').addEventListener('submit', (event) => {
      event.preventDefault();

      const mesa_pessoas = document.getElementById('mesa_pessoas').value;
    const nome = document.getElementById('nome').value;
    const num_tel = document.getElementById('num_tel').value;
    const email = document.getElementById('email').value;
      console.log(mesa_pessoas, nome, num_tel, email);
      alert('Cadastro realizado com sucesso!');
  fetch(`http://localhost:3000/reserva`, {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json',
      },
          body: JSON.stringify({ mesa_pessoas, nome, num_tel, email }),
  })
      .then((response) => response.json())
      .catch((error) => {
          console.error('Erro:', error);
          alert('Erro durante a atualização de cadastro.');
      });
});
    });