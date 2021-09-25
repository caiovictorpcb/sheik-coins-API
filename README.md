# <img align="center" height="40" width="40" src="https://images.vexels.com/media/users/3/130123/isolated/preview/451253d81a55a06cc55363c70acf09b3-circulo-amarelo-do-cifrao.png"> SheikCoins

# O que é

SheikCoins é um website inspirado em sites de compra e venda de cryptomoedas, e seu objetivo é monitorar as principais moedas do mercado.

# O que faz

SheikCoins conta com um sistema de monitoramento de cryptomoedas, com uma api própria, e um sistema de login/cadastro para qualquer usuário adicionar suas moedas ao portfólio, facilitando muito o uso.

# Como funciona 

Ao acessar o site, o front-end faz a requisição via HTTP <a href="https://github.com/caiovictorpcb/sheik-coins-API">`para a própria API do SheikCoins`</a>, que faz outra requisição à API do <a href="https://www.coingecko.com/pt/api/documentation?">CoinGecko</a>, trata os dados, e devolve para <a href="https://github.com/caiovictorpcb/sheik-coins-API">`front-end feito com Reactjs + AntDesign`</a>.

# Uso 

## Home

Primeira "página" do site, com botões que o redirecionam para a área de Login e Cadastro. 

![image](https://user-images.githubusercontent.com/77304049/134780892-d7515da1-cfae-4299-89f3-80d87ce3391b.png)

## SignUp

Página com formuário de cadastro, que valida todos os campos, e cadastra um novo usuário no Banco de Dados.

![image](https://user-images.githubusercontent.com/77304049/134781008-6f7ffb3a-714a-4e50-b750-296c5ac93d9b.png)


## Login

Página com formulário de login, que valida todos os campos e em seguida consulta o Banco de Dados, autenticando e autorizando o usuário.

![image](https://user-images.githubusercontent.com/77304049/134781142-98a89e40-9c1e-4ee3-a5e8-d0fe7511b495.png)

Após o usuário ser autorizado, ele é redirecionado para a homepage, podendo agora adicionar moedas ao seu portfólio e vê-lo.

![image](https://user-images.githubusercontent.com/77304049/134781249-b4a4fb93-6dd5-4918-a1cc-64c2ac603bc1.png)
