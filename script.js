var hamburguer = document.querySelector(".hamburguer");
hamburguer.addEventListener("click", function() {
    document.querySelector(".sidebar").classList.toggle("show-menu");
});

/*nesse arquivo java teremos:
Primeiro vai ser criada uma variável chamada hamburguer que vai ser buscada através do document, da função querySelector

Segundo, a partir da variável hamburguer vai ser adicionado addEventListenner que vai ficar escutando um evento de click
Quando ocorrer o evento de click ele irá executar a função.

A função irá pegar o elemento .siderbar através do comando document função querySelector
Depois, a partir da lista de classes vai ser feito uma modificação(toggle) que será de adicionar ou remover uma classe que vai ser chamada de show-menu

esse script irá: 
se tiver a classe show-menu ele tira, senão ele coloca.
Então essa classe show-menu irá informar se o estado do menu é, ser exibido ou ser oculto.*/