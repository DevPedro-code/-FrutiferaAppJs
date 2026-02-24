//  Função tabela
const insertRowTBody = (fruteira) => {
  let fruteirasTBody = document.getElementById('fruteirasTBody');

  let row = `<tr>
      <td>${fruteira.identificador}</td>
      <td>${fruteira.nomePopular}</td>
      <td>${fruteira.nomeCientifico}</td>
      <td>${fruteira.producaoMedia} Kg</td>
      <td>${fruteira.dataPlantio}</td>
    </tr>`;

  fruteirasTBody.insertAdjacentHTML('beforeend', row);
};

//  dados salvo no local storag
let fruteiras = JSON.parse(localStorage.getItem('fruteiras')) ?? [];

// Carregar dados salvos
for (let fruteira of fruteiras) {
  insertRowTBody(fruteira);
}

// recarrega a tabela
let fruteiraForm = document.getElementById('fruteiraForm');

// Form
fruteiraForm.onsubmit = (event) => {
  event.preventDefault();

  let identificador = Date.now();
  let nomePopular = document.getElementById('nomePopular').value;
  let nomeCientifico = document.getElementById('nomeCientifico').value;
  let producaoMedia = Number(document.getElementById('producaoMedia').value);
  let dataPlantio = document.getElementById('dataPlantio').value;

  let fruteiraJson = {
    identificador,
    nomePopular,
    nomeCientifico,
    producaoMedia,
    dataPlantio,
  };

  fruteiras.push(fruteiraJson);

  localStorage.setItem(
    'fruteiras',
    JSON.stringify(fruteiras)
  );

  insertRowTBody(fruteiraJson);

  let modalElement = document.getElementById('meumodal');
  let modal = bootstrap.Modal.getInstance(modalElement);
  modal.hide();

  Toastify({
    text: "Fruta cadastrada com sucesso! 🍎",
    duration: 3000,
    gravity: "top",
    position: "right",
  }).showToast();
};