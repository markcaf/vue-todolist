const app = new Vue(
    {
        el: '#app',

        data: {
            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                },
                {
                    text: 'Preparare il pranzo',
                    done: true
                },
                {
                    text: 'Preparare la cena',
                    done: false
                },
                {
                    text: 'Vedere l\'ultimo episodio di Stranger Things',
                    done: true
                },   
            ],
              
        },

        methods: {
            removeTodo: function (index) {
                this.todos.splice(index, 1)
              }
        },

        created(){
            
        },
    }
);