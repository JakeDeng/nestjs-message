import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {

    constructor(public messagesService: MessagesService){
        
    } 
    
    @Get()
    listMessages() {
        return this.messagesService.findAll();
    }

    @Post()
    createMessage(@Body() body: CreateMessageDto) {
        console.log(body)
        return this.messagesService.create(body.content);
    }

    @Get('/:id')
    async getMessage(@Param('id') id:string) {
        return this.messagesService.findOne(id);
        
    }
}
