import {
  Component,
  computed,
  inject,
  input,
  InputSignal,
  signal,
  WritableSignal,
} from '@angular/core';
import { PageableResult } from '../../models/pageable';
import { GameDto } from '../../models/game-dto';
import { GameService } from '../../services/game.service';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-game-index',
  styleUrl: './game-index.scss',
  templateUrl: './game-index.html',
})
export class GameIndex {
  private readonly _gameService: GameService = inject(GameService);

  pageNumber = signal(0);

  result = this._gameService.getGame(this.pageNumber);

  // page = computed(() => {
  //   return this.result.value();
  // });

  page: InputSignal<PageableResult<GameDto>> = input.required<PageableResult<GameDto>>();

  prev() {
    if (this.page()?.first) {
      return;
    }

    this.pageNumber.set(this.pageNumber() - 1);
  }

  next() {
    if (this.page()?.last) {
      return;
    }

    this.pageNumber.set(this.pageNumber() + 1);
  }
}
