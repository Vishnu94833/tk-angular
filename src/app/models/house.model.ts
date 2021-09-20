

export class HouseModel {
  members: Array<HouseMembers> = new Array<HouseMembers>();
  slug: string = '';
  name: string = '';
}

class HouseMembers{
  slug: string = '';
  name: string = '';
}
