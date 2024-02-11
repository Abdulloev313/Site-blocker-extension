import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { PatchAccountDto } from './dto/patchAccount.dto';
import { AccountService } from './account.service';
import { GetAccountDto } from './dto/getAccount.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { SessionInfo } from 'src/auth/session-info.decorator';
import { GetSessionInfoDto } from 'src/auth/dto/getSessionInfo.dto';

@Controller('account')
@UseGuards(AuthGuard)
export class AccountController {
  constructor(private accountService: AccountService) {}
  @Get()
  getAccount(
    @SessionInfo() session: GetSessionInfoDto,
  ): Promise<GetAccountDto> {
    return this.accountService.getAccount(session.id);
  }

  @Patch()
  patchAccount(
    @Body() body: PatchAccountDto,
    @SessionInfo() session: GetSessionInfoDto,
  ): Promise<GetAccountDto> {
    return this.accountService.patchAccount(session.id, body);
  }
}
