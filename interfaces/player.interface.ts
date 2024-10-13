export interface Balance {
    amount: number;
    type: 'gain' | 'loss';
    date: Date;
}
export interface Player {
    uid: string;
    name: string;
    totalBalance: number;
    gamesPlayed: number;
    gamesWon: number;
    lastTransaction: Balance | null;
    //lastGame: Match;
}