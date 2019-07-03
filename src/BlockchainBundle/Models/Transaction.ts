export default class Transaction {
    public txid?: string
    public network?: string
    public chain?: string
    public blockHeight?: number
    public blockHash?: string
    public blockTime?: string
    public blockTimeNormalized?: string
    public coinbase?: boolean = false
    public locktime?: number
    public inputCount?: number
    public outputCount?: number
    public size?: number
    public fee?: number
    public value?: number
    public confirmations?: number
}
