export class User{
    firstname: string;
    lastname: string;
    email: string;
    birthday: number;
    city: string;
    zipCode: number;
    street: string;
    no: string;
    id: string;


    //? --> wenn es ein obj gibt, dann konstruiere daraus, sonst leerer string
    // like obj ? obj.firstname : '';
    constructor(obj?: any){         

        this.firstname = obj ? obj.firstname : '';
        this.lastname = obj ? obj.lastname : '';
        this.email = obj ? obj.email : '';
        this.birthday = obj ? obj.birthday : null;
        this.city = obj ? obj.city : '';
        this.zipCode = obj ? obj.zipCode : null;
        this.street = obj ? obj.street : '';      
        this.no = obj ? obj.no : '';
        this.id = obj ? obj.id : '';
    }

    toJSON(){
        return {
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            birthday: this.birthday,
            city: this.city,
            zipCode: this.zipCode,
            street: this.street,
            no: this.no,
            id: this.id
        }
    }

    
}




