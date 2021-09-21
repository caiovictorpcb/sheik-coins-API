import axios from "axios"



class MoedaDao{
    top100 = []
    async listarMoedasTop(){
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false')
        const moedas = Array.from(response.data)
        this.top100 = []        
        for(var i =0;i<moedas.length;i++){
            this.top100.push({id:moedas[i].id, nome:moedas[i].name, preco:moedas[i].current_price, symbol:moedas[i].symbol, img:moedas[i].image, mktcap:moedas[i].market_cap}) 
        }
        return this.top100
        
    }
}   

export default new MoedaDao();