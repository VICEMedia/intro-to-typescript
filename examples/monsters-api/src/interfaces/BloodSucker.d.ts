export default interface BloodSucker {
  hunger: number;
  pintsConsumed: number;
  drinkBlood: (pints: number) => void;
}
