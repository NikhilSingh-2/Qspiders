let Data="secret information";
class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("website data",Data);
    }
}

class admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        Data='some new value';
        // console.log(Data);
    }
}

let student1=new user('nikhil',"nikhilsigh@gmial.com");
let student2=new user('shradha','shradha@gamil');
let student3=new user('naman','naman@gmail');
let admin1=new admin("admin","admin@college.com");
