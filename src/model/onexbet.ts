export async function oneXbet(
  number: number,
  amount: number,
  firstMise: number
) {
  let mise = firstMise;

  for (let i = 0; i <= number; i++) {
    if (i !== 0) {
      mise = mise * 2;
    }
    amount -= mise;
  }
  return amount;
}
