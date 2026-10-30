import { Component, inject } from '@angular/core';
import { GameService } from '../../services/game.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-game-create',
  styleUrl: './game-create.scss',
  templateUrl: './game-create.html',
})
export class GameCreate {
  private readonly _gameService: GameService = inject(GameService);
  private readonly _fb: FormBuilder = inject(FormBuilder);
  private readonly _router: Router = inject(Router);

  gameForm = this._fb.group({
    name: [null, [Validators.required]],
    releaseYear: [null, [Validators.required]],
    price: [null, [Validators.required]],
  });

  onSubmit() {
    this.gameForm.markAllAsTouched();

    if (this.gameForm.invalid) {
      return;
    }

    this._gameService.createGame(this.gameForm.value as any).subscribe({
      next: () => {
        console.log('Ok');
        this._router.navigate(['/game']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
