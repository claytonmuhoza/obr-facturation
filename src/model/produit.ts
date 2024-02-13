export class ProduitStockable {
  constructor(
    public prixUnitaire: number,
    public prixRevien: number,
    public quantite: NumberConstructor
  ) {}
}
export class Service {
  constructor(public name: string, public prixUnitaire: number) {}
}
export class Produit {
  constructor(public name: string, public nature: ProduitStockable | Service) {}
}
