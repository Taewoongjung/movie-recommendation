import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Users } from "../entities/Users";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
  ) { }

  async findByUserName(username: string) {
    return this.usersRepository.findOne({
      where: { username },
      select: ["id", 'username', 'password'],
    });
  }

  async signUp(username: string, password: string) {
    console.log("@@ = ", password);
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await this.usersRepository.findOne({ where: { username } });
    if(user) {
      throw new Error('이미 존재하는 사용자입니다');
    }
    const returned = await this.usersRepository.save({
      username,
      password: hashedPassword,
    }); 
    console.log("successed = ", returned);
    return true;
  }
}
