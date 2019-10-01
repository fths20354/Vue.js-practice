var toki = new Vue({
    el : "#time",
    data : {
        year : "",
        month : "",
        date : "",
        hour : "",
        minute : "",
        second : ""
    },
    methods: {
        setClock(){
            var date = new Date();
            this.year = date.getFullYear();
            this.month = date.getMonth();
            this.date = date.getDate();
            this.hour = date.getHours();
            this.minute = date.getMinutes();
            this.second = date.getSeconds();
        },
    },
    mounted(){
        setInterval(this.setClock,1000);
    }
})