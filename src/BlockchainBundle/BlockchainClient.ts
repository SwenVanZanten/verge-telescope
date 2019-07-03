import {NuxtAxiosInstance} from '@nuxtjs/axios'
import ProviderInterface from './ProviderInterface'
import Block from './Models/Block'
import Transaction from './Models/Transaction'
import AddressTransaction from './Models/AddressTransaction'

export default class BlockchainClient {
    protected provider: ProviderInterface

    public constructor(provider: ProviderInterface) {
        this.provider = provider
    }

    public blocks(limit: number = 5): Promise<Block[]> {
        return this.provider.blocks(limit)
    }

    public blockByHash(hash: string): Promise<Block> {
        return this.provider.blockByHash(hash)
    }

    public transactionsByBlock(block: Block): Promise<Transaction[]> {
        return this.provider.transactionsByBlock(block)
    }

    public transactionsByAddress(address: string): Promise<AddressTransaction[]> {
        return this.provider.transactionsByAddress(address)
    }

    public transactionByTxid(txid: string): Promise<Transaction> {
        return this.provider.transactionByTxid(txid)
    }
}

declare module 'vue/types/vue' {
    interface Vue {
        $blockchainClient: BlockchainClient
    }
}
