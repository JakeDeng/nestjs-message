import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "./messages.repository";

@Injectable()//register in DI container
export class MessagesService {
    
    //dependency passed in through DI container
    constructor(public messagesRepo: MessagesRepository) {
    }
    
    findOne(id: string) {
        console.log("find message");
        return this.messagesRepo.findOne(id);
    }

    findAll() {
        console.log("find all messages");
        return this.messagesRepo.findAll();
    }

    create(content: string) {
        console.log("create message");
        return this.messagesRepo.create(content);
    }
    
}