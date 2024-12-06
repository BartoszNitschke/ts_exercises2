import { WycieczkaSzefaNaKosztFirmy, Wydatek, WydatekSzefa } from "./task5.js";
/**
 * Zadanie 9.
 *
 * Utwórz funkcję `isWydatek`, która sprawdzi, czy przekazany obiekt jest typu `Wydatek`.
 * Utwórz funkcję `isWydatekSzefa`, która sprawdzi, czy przekazany obiekt jest typu `WydatekSzefa`.
 * Utwórz funkcję `isWycieczkaSzefaNaKosztFirmy`, która sprawdzi, czy przekazany obiekt jest typu `WycieczkaSzefaNaKosztFirmy`.
 */

type Wydatki = Wydatek | WydatekSzefa | WycieczkaSzefaNaKosztFirmy;

export const skontrolujWydatki = (wydatek: Wydatki) => {
    const skontrolowanyWydatek = {
        wydatek,
        isKontrola: false
    }
    if (isWydatekSzefa(wydatek)) {
        return skontrolowanyWydatek;
    } else if (isWycieczkaSzefaNaKosztFirmy(wydatek)) {
        return skontrolowanyWydatek;
    } else if (isWydatek(wydatek)) {
        return skontrolowanyWydatek;
    } else {
        return skontrolowanyWydatek;
    }
}

//# ---

export const isWydatek = (wydatek: Wydatki): wydatek is Wydatek => {
    return wydatek && typeof wydatek.kwota === "number" && typeof wydatek.opis === "string";
}

export const isWydatekSzefa = (wydatek: Wydatki): wydatek is WydatekSzefa => {
    return isWydatek(wydatek) && (wydatek as WydatekSzefa).isSzef === true;
}

export const isWycieczkaSzefaNaKosztFirmy = (wydatek: Wydatki): wydatek is WycieczkaSzefaNaKosztFirmy => {
    return isWydatekSzefa(wydatek) && (wydatek as WycieczkaSzefaNaKosztFirmy).cel === "string";
}