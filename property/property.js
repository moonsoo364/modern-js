const person = {
    firstName: 'Ungmo',
    lastName:'Lee',

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name){
        [this.firstName,this.lastName] = name.split(' ');
    }
};
person.fullName = 'Heegun Lee';
console.log(person.fullName);

let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log(descriptor);
descriptor =Object.getOwnPropertyDescriptor(person, 'fullName');
console.log(descriptor);
 