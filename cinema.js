//Requisição do arquivo JSON
const catalogo = require('./database/catalogo.json')

//Funcão para listar todos os filmes 
const listarTodosOsFilmes = () => {
  for(let i = 0; i < catalogo.length; i++){
    console.log(`
      O filme ${catalogo[i].titulo} 
      estrelado pelos atores ${catalogo[i].atores} 
      foi lançado no ano de ${catalogo[i].anoLancamento}.
      O filme tem aproximadamente ${catalogo[i].duracao} hrs de duração
      e no momento ${catalogo[i].emCartaz ? 'está' : 'não está'} em cartaz.`);

      console.log(`************************************************************`)
  }
}
//listarTodosOsFilmes();

//Função para listar somente filmes em cartaz
const listarFilmesEmCartaz = () => {
  for(let i = 0; i < catalogo.length; i++){
    if(catalogo[i].emCartaz){
      console.log(`
      O filme ${catalogo[i].titulo} 
      estrelado pelos atores ${catalogo[i].atores} 
      foi lançado no ano de ${catalogo[i].anoLancamento}.
      O filme tem aproximadamente ${catalogo[i].duracao} hrs de duração
      e no momento ${catalogo[i].emCartaz ? 'está' : 'não está'} em cartaz.`);
    }
  }
}
listarFilmesEmCartaz();

//Função adicionar filmes
function adicionarFilme(id ,titulo, duracao, atores, anoLancamento, emCartaz){
  catalogo.push({id ,titulo, duracao, atores, anoLancamento, emCartaz}); 
}
// adicionarFilme(25,'djhsjhdsk', 4, 'sharakiva', 2002, false);

//Função para buscar filmes pelo seu identificador codigo
function buscarFilme(id){
  for(let x = 0; x < catalogo.length; x++){
    if(catalogo[x].codigo === id){
      return console.log(`
      O filme ${catalogo[x].titulo} 
      estrelado pelos atores ${catalogo[x].atores} 
      foi lançado no ano de ${catalogo[x].anoLancamento}.
      O filme tem aproximadamente ${catalogo[x].duracao} hrs de duração
      e no momento ${catalogo[x].emCartaz ? 'está' : 'não está'} em cartaz.`)
    }
  }
}
// buscarFilme(625)

// Função alterar o estado do cartaz
function alterarStatusCartaz(id){
  for(let x = 0; x < catalogo.length; x++){
    if(catalogo[x].codigo === id){
     catalogo[x].emCartaz === true ?  catalogo[x].emCartaz = false : catalogo[x].emCartaz = true;
      console.log(catalogo[x].emCartaz)
    }
  }
}
//alterarStatusCartaz(625)