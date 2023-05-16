const input = document.querySelector('#input-value');
const button = document.querySelector('#search-button');
const info = document.querySelector('#info');

const fetchApi = async (cep) => {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    return data;
};

const mainContent = async () => {
    try {
        const cep = input.value;
        const result = await fetchApi(cep);
        info.innerText = 
        `CEP: ${result.cep},
        Logradouro: ${result.logradouro},
        Bairro: ${result.bairro},
        Localidade: ${result.localidade} - ${result.uf},
        DDD: ${result.ddd}`;
    } catch (error) {
        info.innerText = 'CEP INVÁLIDO!!';
    }
    
};

button.addEventListener('click', () => {
    mainContent();
});