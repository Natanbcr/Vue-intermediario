new Vue({
    el: '#desafio',
     data: {
        nome: 'Natan Benites Costa Real',
        idade: 20,
        imagem: 'foto_vue.jpg'
     },
        methods: {
            multiplicarIdade(){
                return this.idade * 3
            },
            random(){
             return Math.random()
         }
        }
    })
