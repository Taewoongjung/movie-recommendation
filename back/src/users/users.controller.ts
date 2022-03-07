import {
  Body,
  Controller,
  ForbiddenException,
  NotFoundException,
  Post,
  UseGuards,
  UseInterceptors
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { JoinRequestDto } from "./dto/join.request.dto";
import { User } from "../common/decorator/user.decorator";
import { LocalAuthGuard } from "../auth/local-auth.guard";
import { UndefinedToNullInterceptor } from "../interceptors/undefinedToNull.interceptor";

@ApiTags('USERS')
@UseInterceptors(UndefinedToNullInterceptor)
@Controller('api/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: '로그인' })
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@User() user) {
    return user;
  }

  @ApiOperation({ summary: '회원가입' })
  @Post('signup')
  async join(@Body() data: JoinRequestDto) {
    const user = this.usersService.findByUserName(data.username);
    if (!user) {
      throw new NotFoundException();
    }
    const result = await this.usersService.signUp(
      data.username,
      data.password,
    );
    if(result) {
      return 'ok';
    } else {
      throw new ForbiddenException();
    }
  }
}