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
            
            newToDo: ""
        },

        methods: {
            removeTodo: function (index) {
                this.todos.splice(index, 1)
            },

            addToList: function (currentToDoEl) {
                if (currentToDoEl == ""){
                    console.warn('Attenzione, stai inserendo un elemento vuoto');
                } else {
                    this.todos.push(
                        {
                            text: currentToDoEl,
                            done: false,
                        }
                    );
                    this.newToDo = '';
                }
            }
        },

        created(){
            
        },
    }
);