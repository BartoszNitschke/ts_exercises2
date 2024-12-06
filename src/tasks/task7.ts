/**
 * Zadanie 7.
 *
 * Dodaj typ do obiektu `wynikiAleZTypem` tak, aby spełniał następujące wymagania:
 * - obiekt może zawierać dowolną liczby kluczy
 * - klucze muszą być liczbami
 * - wartości muszą być typu `string`
 */

export const wyniki: unknown = {
    1: ""
}

//# ---

export type wynikiAleZTypem = {
    [key: number]: string;
}

export const wynikiAleZTypem: wynikiAleZTypem = wyniki as wynikiAleZTypem;