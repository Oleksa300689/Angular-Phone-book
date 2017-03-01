angular.module("Controllers", [])

.controller("mainCtrl", mainCtrl)

function mainCtrl(){
    
    this.people = [
        {
            firstName: "Oleksiy",
            lastName: "Nykytenko",
            number: "097 323 29 58"
        },
        {
            firstName: "Petro",
            lastName: "Zhuk",
            number: "063 281 17 18"
        },
        {
            firstName: "Ivan",
            lastName: "Sydorov",
            number: "067 395 29 58"
        },
        {
            firstName: "Vasyl",
            lastName: "Vlasenko",
            number: "067 333 95 67"
        },
        {
            firstName: "Olekasndr",
            lastName: "Petrenko",
            number: "063 566 68 90"
        },
        {
            firstName: "Iryna",
            lastName: "Kovalchuk",
            number: "097 555 62 18"
        },
        {
            firstName: "Petro",
            lastName: "Velzevul",
            number: "067 666 66 66 "
        }
    ]
    
    this.sortType = '';
    this.sortReverse = '';
    this.search = '';
    
    this.addTask = function(task){
        if (!task) {
            return;
        }
        this.people.push({
            firstName: task.firstName,
            lastName: task.lastName,
            number: task.number
        });

    }
    
    this.deleteTask = function(key){
        this.people.splice(key,1);
        console.log(this.people.length);
    }

    this.changeTask = function(key){
        this.Ename = this.people[key].firstName;
        this.Esname = this.people[key].lastName;
        this.Enumber = this.people[key].number;
        
        this.change = function(){
        this.people[key].firstName = this.Ename;
        this.people[key].lastName = this.Esname;
        this.people[key].number = this.Enumber;
    }
    }
    
    
}