export interface Country {
    name: string;
    flags: {
        svg: string;
    };
    idd: {
        root: string;
        suffixes: string[];
    };
}
export async function fetchCountries(): Promise<Country[]> {
    const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,idd');
    if (!response.ok) {
        throw new Error('Failed to fetch countries');
    }
    const data = await response.json();
    return data;
}
