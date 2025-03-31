import { BadRequestException, Controller, Get, Req, UseGuards } from '@nestjs/common';
import { UsersService } from '../services/user.service';
import { JwtAuthGuard } from 'src/guard/jwt-auth.guard';

@Controller('dashboard')
export class DashboardController {
  constructor() { }

  @Get()
  @UseGuards(JwtAuthGuard)  
  getDashboard(@Req() req: RequestWithUser) {

    const messages = [
      "The treasure is hidden where the sun sets.",
      "Follow the map, the journey is half the fun.",
      "Unlock the door, but remember the key.",
      "In the silence, the answers are found.",
      "The path less traveled may lead to great discoveries.",
      "Seek the unknown, and you may find treasure.",
      "The code is in the stars, if you know where to look.",
      "A hidden message waits in every corner of the world.",
      "Every puzzle has a solution, just keep searching."
    ];
  
    const randomIndex = Math.floor(Math.random() * messages.length);

    const secretMessage = messages[randomIndex]; 
 
    return {
      message: 'Fetched secret message successfully',
      data: { secretMessage } 
    };
  }
}
