export interface StockMapping {
  yahooSymbol: string; // Yahoo Finance symbol (e.g., TCS.NS for NSE stocks, AAPL for US)
  displaySymbol: string; // Display name for UI
  name: string; // Company name
}

export interface IndexMapping {
  yahooSymbol: string; // Yahoo Finance symbol (e.g., ^NSEI for NIFTY)
  displayName: string;
}

// Stock symbol mappings for Yahoo Finance API
// NSE stocks use .NS suffix, BSE stocks use .BO suffix
// US stocks use direct symbols
export const STOCK_MAPPINGS: Record<string, StockMapping> = {
  // --- Indian Stocks (NIFTY 50 & Major) ---
  'TCS': { yahooSymbol: 'TCS.NS', displaySymbol: 'TCS', name: 'Tata Consultancy Services' },
  'INFY': { yahooSymbol: 'INFY.NS', displaySymbol: 'INFY', name: 'Infosys Limited' },
  'RELIANCE': { yahooSymbol: 'RELIANCE.NS', displaySymbol: 'RELIANCE', name: 'Reliance Industries' },
  'HDFCBANK': { yahooSymbol: 'HDFCBANK.NS', displaySymbol: 'HDFCBANK', name: 'HDFC Bank' },
  'ICICIBANK': { yahooSymbol: 'ICICIBANK.NS', displaySymbol: 'ICICIBANK', name: 'ICICI Bank' },
  'SBIN': { yahooSymbol: 'SBIN.NS', displaySymbol: 'SBIN', name: 'State Bank of India' },
  'HDFC': { yahooSymbol: 'HDFC.NS', displaySymbol: 'HDFC', name: 'Housing Development Finance Corp' },
  'KOTAKBANK': { yahooSymbol: 'KOTAKBANK.NS', displaySymbol: 'KOTAKBANK', name: 'Kotak Mahindra Bank' },
  'AXISBANK': { yahooSymbol: 'AXISBANK.NS', displaySymbol: 'AXISBANK', name: 'Axis Bank' },
  'LT': { yahooSymbol: 'LT.NS', displaySymbol: 'LT', name: 'Larsen & Toubro' },
  'ITC': { yahooSymbol: 'ITC.NS', displaySymbol: 'ITC', name: 'ITC Limited' },
  'HINDUNILVR': { yahooSymbol: 'HINDUNILVR.NS', displaySymbol: 'HINDUNILVR', name: 'Hindustan Unilever' },
  'BHARTIARTL': { yahooSymbol: 'BHARTIARTL.NS', displaySymbol: 'BHARTIARTL', name: 'Bharti Airtel' },
  'WIPRO': { yahooSymbol: 'WIPRO.NS', displaySymbol: 'WIPRO', name: 'Wipro Limited' },
  'ASIANPAINT': { yahooSymbol: 'ASIANPAINT.NS', displaySymbol: 'ASIANPAINT', name: 'Asian Paints' },
  'MARUTI': { yahooSymbol: 'MARUTI.NS', displaySymbol: 'MARUTI', name: 'Maruti Suzuki' },
  'TATAMOTORS': { yahooSymbol: 'TATAMOTORS.NS', displaySymbol: 'TATAMOTORS', name: 'Tata Motors' },
  'TATASTEEL': { yahooSymbol: 'TATASTEEL.NS', displaySymbol: 'TATASTEEL', name: 'Tata Steel' },
  'SUNPHARMA': { yahooSymbol: 'SUNPHARMA.NS', displaySymbol: 'SUNPHARMA', name: 'Sun Pharma' },
  'ADANIENT': { yahooSymbol: 'ADANIENT.NS', displaySymbol: 'ADANIENT', name: 'Adani Enterprises' },
  'ADANIPORTS': { yahooSymbol: 'ADANIPORTS.NS', displaySymbol: 'ADANIPORTS', name: 'Adani Ports' },
  'BAJFINANCE': { yahooSymbol: 'BAJFINANCE.NS', displaySymbol: 'BAJFINANCE', name: 'Bajaj Finance' },
  'POWERGRID': { yahooSymbol: 'POWERGRID.NS', displaySymbol: 'POWERGRID', name: 'Power Grid Corp' },
  'NTPC': { yahooSymbol: 'NTPC.NS', displaySymbol: 'NTPC', name: 'NTPC Limited' },
  'ONGC': { yahooSymbol: 'ONGC.NS', displaySymbol: 'ONGC', name: 'ONGC' },
  'TITAN': { yahooSymbol: 'TITAN.NS', displaySymbol: 'TITAN', name: 'Titan Company' },

  // --- US Stocks (Major Tech & Popular) ---
  'AAPL': { yahooSymbol: 'AAPL', displaySymbol: 'AAPL', name: 'Apple Inc.' },
  'MSFT': { yahooSymbol: 'MSFT', displaySymbol: 'MSFT', name: 'Microsoft Corporation' },
  'GOOGL': { yahooSymbol: 'GOOGL', displaySymbol: 'GOOGL', name: 'Alphabet Inc.' },
  'AMZN': { yahooSymbol: 'AMZN', displaySymbol: 'AMZN', name: 'Amazon.com Inc.' },
  'NVDA': { yahooSymbol: 'NVDA', displaySymbol: 'NVDA', name: 'NVIDIA Corporation' },
  'TSLA': { yahooSymbol: 'TSLA', displaySymbol: 'TSLA', name: 'Tesla Inc.' },
  'META': { yahooSymbol: 'META', displaySymbol: 'META', name: 'Meta Platforms Inc.' },
  'NFLX': { yahooSymbol: 'NFLX', displaySymbol: 'NFLX', name: 'Netflix Inc.' },
  'ADBE': { yahooSymbol: 'ADBE', displaySymbol: 'ADBE', name: 'Adobe Inc.' },
  'CRM': { yahooSymbol: 'CRM', displaySymbol: 'CRM', name: 'Salesforce Inc.' },
  'AMD': { yahooSymbol: 'AMD', displaySymbol: 'AMD', name: 'Advanced Micro Devices' },
  'INTC': { yahooSymbol: 'INTC', displaySymbol: 'INTC', name: 'Intel Corporation' },
  'DIS': { yahooSymbol: 'DIS', displaySymbol: 'DIS', name: 'Walt Disney' },
  'COIN': { yahooSymbol: 'COIN', displaySymbol: 'COIN', name: 'Coinbase Global' },
  'PYPL': { yahooSymbol: 'PYPL', displaySymbol: 'PYPL', name: 'PayPal Holdings' },
};

// Market indices mappings for Yahoo Finance
// Indian indices use ^, US indices use ^
export const MARKET_INDICES: Record<string, IndexMapping> = {
  // Indian indices
  'NIFTY 50': { yahooSymbol: '^NSEI', displayName: 'NIFTY 50' },
  'SENSEX': { yahooSymbol: '^BSESN', displayName: 'SENSEX' },
  'BANKNIFTY': { yahooSymbol: '^NSEBANK', displayName: 'BANK NIFTY' },
  'NIFTY IT': { yahooSymbol: '^CNXIT', displayName: 'NIFTY IT' },

  // US indices
  'NASDAQ': { yahooSymbol: '^IXIC', displayName: 'NASDAQ' },
  'S&P 500': { yahooSymbol: '^GSPC', displayName: 'S&P 500' },
  'DOW JONES': { yahooSymbol: '^DJI', displayName: 'DOW JONES' },
};

export function getStockMapping(symbol: string): StockMapping | null {
  return STOCK_MAPPINGS[symbol.toUpperCase()] || null;
}

export function getIndexMapping(name: string): IndexMapping | null {
  return MARKET_INDICES[name] || null;
}

export function getAllStockSymbols(): string[] {
  return Object.keys(STOCK_MAPPINGS);
}
