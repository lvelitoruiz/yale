import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class GetInfoService {

  constructor() { }

  async getCharacters() {
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    return response.data.results.slice(0, 3);
  }

}
