import {
  Component,
  inject,
  input,
  InputSignal,
  OnDestroy,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { GameService } from '../../services/game.service';
import { GameDto } from '../../models/game-dto';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-game-details',
  styleUrl: './game-details.scss',
  templateUrl: './game-details.html',
})
export class GameDetails implements OnInit, OnDestroy {
  private readonly _gameService: GameService = inject(GameService);
  // private readonly _ar: ActivatedRoute = inject(ActivatedRoute);

  game: WritableSignal<GameDto | undefined> = signal(undefined);

  id: InputSignal<number> = input.required<number>();

  constructor() {
    // console.log(this._ar.snapshot.params['id']);
  }
  ngOnInit(): void {
    this._gameService.getById(this.id()).subscribe((g) => {
      this.game.set(g);
    });
  }
  ngOnDestroy(): void {
    console.log(
      'Explosiiiiiiiiiiiiiioooooooooooooooooooooonnnnnnnnnnnnnnnnnn!!!',
    );
  }
}
