import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Gif, GifsResponse} from "../interfaces/gif.interface";

@Injectable({
  providedIn: 'root'
})
export class GifService {

  public resultados: Gif[] = [];
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private apiKey: string = 'XlTQBo9rY76gKvlWKHK3pigigaZFDGED';

  constructor(private http: HttpClient) {
    // if (localStorage.getItem('historial')) {
    //   this._historial = JSON.parse(localStorage.getItem('historial')!);
    // }
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  private _historial: string[] = [];

  get historial() {
    return [...this._historial];
  }

  buscarGifs(query: string) {
    query = query.trim().toLocaleLowerCase();

    if( !this._historial.includes( query ) ) {
      this._historial.unshift( query );
      this._historial = this._historial.splice(0,70);

      localStorage.setItem('historial', JSON.stringify( this._historial )  );
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', 10)
      .set('q', query);


    this.http.get<GifsResponse>(`${this.servicioUrl}/search`, {params})
      .subscribe((resp) => {
        console.log(resp.data);
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      })


  }
}
