$(document).ready(function() {

	//nesse modo de escrita vamos escrever o seguinte comando do JS->document.querySelector('header button').addEventListener('click',function()<- porem com o codigo mais limpo, Utilizamos o modo de escrita do jQuery
	//aqui ele chamou o botao "NOVA IMAGEM+" depois acrescentou a função "click" ISSO É CHAMADO DE CALBACK. 
	$('header button').click(function() {
		//para que toda vez que clicar no botão o formulario "inserir nova imagem" vai abaixar, isso utilizando a função "slideDown"
		$('form').slideDown();
	})
	//quando clicar no botao "cancelar" o formulario ira recolher
	$('#botao-cancelar').click(function() {
		$('form').slideUp();
	})
debugger
	//aqui tiramos a função padrão do botão no modo jQuery
	$('form').on('submit', function(e) {
		e.preventDefault();
		// criou um constante chamou o id do HTML para receber o endereço da nova imagem
		const enderecoDaNovaImagem = $('#endereço-imagem-nova').val();
		//criou outra constante para concatenar um novo item a lista  
		const novoItem = $('<li style="display: none"></li>');
		//chamou o elemento com enderecoDaNovaImagem e adicionou um novo item 
		$(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
		//o mesmo processo da img foi feito porem com o class do HTML no item 
		$(`
			<div class="overlay-imagem-link">
				<a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamnho real">
					Ver imagem em tamanho real 
				</a>
			</div>

		`).appendTo(novoItem);
		//adicionamos uma nova img a Lista de imagens com o link  
		$(novoItem).appendTo('ul');
		//para a imagem aparecer aos poucos usamos essa função (1000 significa 1 segundo)
		$(novoItem).fadeIn(1000);
		$('#endereço-imagem-nova').val('')
		
	})
})

