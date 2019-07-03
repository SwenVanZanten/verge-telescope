import Block from './Models/Block'
import Transaction from './Models/Transaction'
import AddressTransaction from './Models/AddressTransaction'

export default interface ProviderInterface {
    blocks(limit: number): Promise<Block[]>
    blockByHash(hash: string): Promise<Block>
    transactionsByBlock(block: Block): Promise<Transaction[]>
    transactionsByAddress(address: string): Promise<AddressTransaction[]>
    transactionByTxid(txid: string): Promise<Transaction>
}
