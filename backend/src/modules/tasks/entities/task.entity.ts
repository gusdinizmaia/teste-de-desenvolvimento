import { randomUUID } from "node:crypto"
import { User } from "src/modules/users/entities/user.entity";

export class Task {
    readonly id : string;
    title : string;
    description : string;

    userId : string;

    constructor(){
        this.id = randomUUID()
    }
}