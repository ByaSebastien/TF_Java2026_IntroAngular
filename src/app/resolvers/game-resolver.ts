import { ResolveFn } from '@angular/router';
import { GameService } from '../services/game.service';
import { inject, signal } from '@angular/core';
import { PageableResult } from '../models/pageable';
import { GameDto } from '../models/game-dto';

export const gameResolver: ResolveFn<PageableResult<GameDto>> = (route, state) => {

  const gameService: GameService = inject(GameService);

  return gameService.get();
};
