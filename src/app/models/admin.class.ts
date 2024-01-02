export class Admin{
    
    email: string;
    nickname: string;
    password: string;
    


    //? --> wenn es ein obj gibt, dann konstruiere daraus, sonst leerer string
    // like obj ? obj.firstname : '';
    constructor(obj?: any){         

        this.email = obj ? obj.email : '';
        this.nickname = obj ? obj.nickname : '';
        this.password = obj ? obj.password : '';
        
    }

    toJSON(){
        return {
            email: this.email,
            nickname: this.nickname,
            password: this.password,
        }
    }

    
}