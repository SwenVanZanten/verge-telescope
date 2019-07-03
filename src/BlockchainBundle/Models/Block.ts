export default class Block {
    public chain?: string
    public network?: string
    public hash?: string
    public height?: number
    public version?: number
    public size?: number
    public merkleRoot?: string
    public time?: string
    public timeNormalized?: string
    public nonce?: number
    public bits?: number
    public previousBlockHash?: string
    public nextBlockHash?: string
    public reward?: number
    public transactionCount?: number
}
