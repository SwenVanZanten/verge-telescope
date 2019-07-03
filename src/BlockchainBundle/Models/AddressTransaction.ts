export default class AddressTransaction {
    public chain?: string
    public network?: string
    public coinbase?: boolean
    public mintIndex?: number
    public spentTxid?: string
    public mintTxid?: string
    public mintHeight?: number
    public spentHeight?: number
    public address?: string
    public script?: number
    public value?: number
    public confirmations?: number
}