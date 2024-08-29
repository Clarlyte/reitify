export interface REIT {
    id:number;
    name:string;
    ticker:string;
    market_cap:number;
    dividend_yield:number;
    price_to_earnings_ratio:number;
    update_date:string;
}

export async function fetchREITS(): Promise<REIT[]> {
    const response = await fetch('http://127.0.0.1:8000/core/reits/');
    if (!response.ok) {
        throw new Error('Failed to fetch REITS');
    }
    const data = await response.json();
    return data;
}