export class Employees{

    name: string;
    image?: string;
    position: any;
    department: string;
    status: string;
    phone: string;
    email: string;
    notes: string;
    id: string;

    constructor(obj?: any){         

        this.name = obj ? obj.name : '';
        this.image = obj ? obj.image : '';
        this.position = obj ? obj.position : '';
        this.department = obj ? obj.department : '';
        this.status = obj ? obj.status : '';
        this.phone = obj ? obj.phone : '';
        this.email = obj ? obj.email : '';      
        this.notes = obj ? obj.notes : '';
        this.id = obj ? obj.id : '';
    }

    toJSON(){
        return {
            name: this.name,
            image: this.image,
            position: this.position,
            department: this.department,
            status: this.status,
            phone: this.phone,
            email: this.email,
            notes: this.notes,
            id: this.id,
        }
    }


}