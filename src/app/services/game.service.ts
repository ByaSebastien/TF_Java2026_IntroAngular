import { inject, Service, Signal, WritableSignal } from '@angular/core';
import { PageableResult } from '../models/pageable';
import { GameDto } from '../models/game-dto';
import { HttpClient, httpResource } from '@angular/common/http';
import { GameForm } from '../models/game-form';

@Service()
export class GameService {
  private readonly _http: HttpClient = inject(HttpClient);

  getGame(pageNumber: Signal<number>) {
    return httpResource<PageableResult<GameDto>>(
      () => `http://localhost:8080/game?page=${pageNumber()}`,
    );
  }

  getById(id: number) {
    return this._http.get<GameDto>(`http://localhost:8080/game/${id}`);
  }

  get(){
    return this._http.get<PageableResult<GameDto>>('http://localhost:8080/game');
  }

  createGame(gameForm: GameForm, image: Blob | undefined = undefined) {
    const formData = new FormData();

    formData.append(
      'gameRequest',
      new Blob([JSON.stringify(gameForm)], { type: 'application/json' }),
    );

    if (image) {
      formData.append('image', image, 'game-image.webp');
    }

    return this._http.post<void>(`http://localhost:8080/game`, formData);
  }
}
