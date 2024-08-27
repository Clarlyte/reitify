export interface REIT {
    id:number;
    name:string;
    symbol:string;
    marketCap:number;
    dividendYield:number;
    price_to_earnings_ratio:number;
    updated_at:string;
}

export async function fetchREITS(): Promise<REIT[]> {
    const response = await fetch('http://localhost:3000/reits');
    if (!response.ok) {
        throw new Error('Failed to fetch REITS');
    }
    const data = await response.json();
    return data;
}