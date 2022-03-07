import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from "@nestjs/typeorm";
import { Users } from "../entities/Users";
import { Repository } from "typeorm";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.usersRepository.findOne({
      where: {username},
      select: ['id', 'username', 'password' ]
    });
    console.log(username, password, user);
    if (!user) {
      return null;
    }
    const result = await bcrypt.compare(user.password, password);
    if (result) {
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    }
    return null;
  }
}
