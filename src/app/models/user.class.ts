export class User{
    firstname: string;
    lastname: string;
    birthday: number;
    city: string;
    zipCode: number;
    street: string;
    no: string;


    //? --> wenn es ein obj gibt, dann konstruiere daraus, sonst leerer string
    // like obj ? obj.firstname : '';
    constructor(obj?: any){         

        this.firstname = obj ? obj.firstname : '';
        this.lastname = obj ? obj.lastname : '';
        this.birthday = obj ? obj.birthday : null;
        this.city = obj ? obj.city : '';
        this.zipCode = obj ? obj.zipCode : null;
        this.street = obj ? obj.street : '';      
        this.no = obj ? obj.no : '';
    }

    toJSON(){
        return {
            firstname: this.firstname,
            lastname: this.lastname,
            birthday: this.birthday,
            city: this.city,
            zipCode: this.zipCode,
            street: this.street,
            no: this.no,
        }
    }
}




