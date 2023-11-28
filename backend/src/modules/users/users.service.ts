import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from './repositories/users.repository';

@Injectable()
export class UsersService{

  constructor(private usersRepository: UsersRepository){}

  async create(createUserDto: CreateUserDto) {
    const findUser = await this.usersRepository.findByEmail(createUserDto.email);

    if(findUser){
      throw new ConflictException('User already exist');
    }

    return await this.usersRepository.create(createUserDto)
  }

  async findByEmail(email: string) {
    const user = await this.usersRepository.findByEmail(email);
    console.log(email, user)
    return user;
  }

  async findById(userId: string) {
    const user = await this.usersRepository.findById(userId);
    return user;
  }
}
