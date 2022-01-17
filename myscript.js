let app = new Vue ({
    el : '#todolist',
    data : {
        nuovaTodo : "",
        lista : [
            {
                'testo' : 'Fare la spesa',
                'done' : false
            },
            {
                'testo' : 'Andare dal gommista',
                'done' : true
            },
            {
                'testo' : 'Comprare un pc',
                'done' : false
            },
            {
                'testo' : 'Telefonare al capo',
                'done' : false
            }
        ],

    },
    methods : {
        addTodo : function () {
            let newTask = {
                'testo' : this.nuovaTodo,
                'done' : false
            } 
            if(!this.nuovaTodo == ""){
            this.lista.push(newTask);
            }
            this.nuovaTodo = "";
        },
        completato : function (elem) {
            if(elem.done == false){
                elem.done = true;
            }else{
                elem.done = false;
            }
        },
        barrato : function (elem) {
            if(elem.done == true){
                return 'ms_barrato'
            }
            return ''
        },
        cancella : function (ogg) {
            this.lista.splice(ogg,1)
        }
    },

} 
);