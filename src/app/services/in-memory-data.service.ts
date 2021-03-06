import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Livro } from '../livros/livro/livro';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    let livros: Livro[] = [
      { 
        id: 1,
        titulo: "Acessibilidade na Web",
        autor: "Reinaldo Ferraz", 
        capa: "https://cdn.shopify.com/s/files/1/0155/7645/products/p_4d506af1-e87c-499b-b80e-b4d8da6df641_large.jpg?v=1588281150"
      },
      { id: 2, titulo: "React Native", autor: "Diego Martins de Pinho, Bruna Escudelario", capa: "https://cdn.shopify.com/s/files/1/0155/7645/products/cover_3a3f6c84-715f-4214-b5bc-6873470a63cc_large.jpg?v=1587088942"},
      { id: 3, titulo: "Manual de sobrevivência do novo programador", autor: "Josh Carter", capa: "https://cdn.shopify.com/s/files/1/0155/7645/products/p_00446448-9b65-4982-9777-536c48d4f24f_large.jpg?v=1585345103"},
      { id: 4, titulo: "Mezzio e PHP 7", autor: "Jhones S. Clementino", capa: "https://cdn.shopify.com/s/files/1/0155/7645/products/p_018db80c-4ec4-47ea-90ea-18708563f0e2_large.jpg?v=1585682912"},
      { id: 5, titulo: "Criatividade e inovação", autor: "Ivam Galvão Filho", capa: "https://cdn.shopify.com/s/files/1/0155/7645/products/Amazon-Criatividade-e-inovacao_large.jpg?v=1584125470"},
      { id: 6 ,titulo: "Google App Engine", autor: "Paulo Siécola", capa: "https://cdn.shopify.com/s/files/1/0155/7645/products/wcDpyDSPxRrpeqG0itn55xvz_sD_BZ_LdhTtnEDtTlM_large.jpg?v=1519321935"}
    ];

    return{livros};
  }

  genId(livros: Livro[]): number {
    return livros.length > 0 ? Math.max(...livros.map(livro => livro.id)) + 1 : 7;
  }
}