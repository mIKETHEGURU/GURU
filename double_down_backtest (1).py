import pandas as pd
import numpy as np
import talib

# Example: Load your historical OHLCV data
# data = pd.read_csv("your_data.csv")
# Simulated data for structure
np.random.seed(42)
data = pd.DataFrame({
    'close': np.random.normal(100, 2, 200),
    'high': np.random.normal(101, 2, 200),
    'low': np.random.normal(99, 2, 200),
    'open': np.random.normal(100, 2, 200),
    'volume': np.random.randint(1000, 5000, 200)
})

# Calculate indicators
data['ema200'] = talib.EMA(data['close'], timeperiod=200)
data['macd'], data['macdsignal'], _ = talib.MACD(data['close'])
data['rsi'] = talib.RSI(data['close'])
data['adx'] = talib.ADX(data['high'], data['low'], data['close'])
data['atr'] = talib.ATR(data['high'], data['low'], data['close'])

# Initialize strategy variables
capital = 10000
position = 0
entry_price = 0
daily_returns = []
double_down_trades = []

for i in range(200):
    score = 0
    row = data.iloc[i]

    # Trend Confluence
    if row['macd'] > row['macdsignal'] and row['close'] > row['ema200']:
        score += 25

    # Momentum Strength
    if 50 <= row['rsi'] <= 70 and row['adx'] > 20:
        score += 20

    # Volatility Favorability
    if row['atr'] < np.percentile(data['atr'].dropna(), 30):
        score += 15

    # Historical Pattern Proxy
    if i > 10 and np.mean(daily_returns[-10:]) > 0:
        score += 15

    # Time/Liquidity (simulated)
    if np.random.rand() > 0.2:  # 80% chance of "good conditions"
        score += 10

    if 60 <= score < 85:
        size = 500  # Normal position
    elif score >= 85:
        size = 1000  # Double-down position
        double_down_trades.append(i)
    else:
        size = 0

    # Simulate outcome (randomized for structure)
    if size > 0:
        trade_return = np.random.normal(0.01, 0.01) * size
        capital += trade_return
        daily_returns.append(trade_return / capital)
    else:
        daily_returns.append(0)

# Summary
results = {
    "Final Capital": round(capital, 2),
    "Total Trades": len([x for x in daily_returns if x != 0]),
    "Double Down Trades": len(double_down_trades),
    "Avg Daily Return": round(np.mean(daily_returns)*100, 2),
    "Max Daily Drawdown": round(min(daily_returns)*100, 2)
}

print(results)
