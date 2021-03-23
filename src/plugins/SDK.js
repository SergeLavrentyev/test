import axios from 'axios';
const REST = 'https://api.binance.com/api/v3';
const WS = 'wss://stream.binance.com:9443/ws';

export const SDK = {
  get: async symbol => {
    const info = await axios.get(`${REST}/depth?symbol=${symbol}&limit=500`);
    return info.data;
  },
  watcher: symbol => {
    const socket = new WebSocket(`${WS}/${symbol.toLowerCase()}@depth`);
    return socket;
  }
};
