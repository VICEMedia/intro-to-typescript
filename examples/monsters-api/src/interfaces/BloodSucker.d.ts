export default interface BloodSucker {
  pintsConsumed: number;
  drinkBlood: (pints: number) => void;
}
