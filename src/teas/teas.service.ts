import { Injectable } from '@nestjs/common';
import { Tea } from '../graphql';

const MOCKED_TEA_ITEMS = [
  {
    id: 1,
    name: 'Old Lincan',
    type: {
      id: 1,
      name: 'Lincan Fabric',
    },
  },
];

@Injectable()
export class TeasService {
  private teaItems = MOCKED_TEA_ITEMS;

  findOneById(id: number): Tea {
    return this.teaItems.find(({ id: itemId }) => itemId === id);
  }
}
