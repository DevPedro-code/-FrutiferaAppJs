//calcular a idade
const calcularIdadeMeses = (dataPlantio) => {
  let dataInicial = new Date(dataPlantio);
  let hoje = new Date();

  let anos = hoje.getFullYear() - dataInicial.getFullYear();
  let meses = hoje.getMonth() - dataInicial.getMonth();

  let totalMeses = anos * 12 + meses;

  
  if (hoje.getDate() < dataInicial.getDate()) {
    totalMeses = totalMeses - 1;
  }

  // não retorna níúmeros negativos
  if (totalMeses < 0) {
    return 0;
  }

  return totalMeses;
};

//  Recuperar fruteiras do localStorage
let fruteiras = JSON.parse(localStorage.getItem('fruteiras')) ?? [];

//  Função que cria o card
const createCard = (fruteira) => {

  let idadeMeses = calcularIdadeMeses(fruteira.dataPlantio);

  return `
    <div class="col-md-4 mb-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${fruteira.nomePopular}</h5>

          <p class="card-text">
            <strong>Nome científico:</strong> ${fruteira.nomeCientifico} <br>
            <strong>Produção média:</strong> ${fruteira.producaoMedia} Kg <br>
            <strong>Data do plantio:</strong> ${fruteira.dataPlantio} <br>
            <strong>Idade:</strong> ${idadeMeses} meses
          </p>

        </div>
      </div>
    </div>
  `;
};

//  Inserir cards na tela
for (let fruteira of fruteiras) {
  let card = createCard(fruteira);
  document
    .getElementById('informacoesCardsRow') // usar o memo id do html
    .insertAdjacentHTML('beforeend', card);
}
