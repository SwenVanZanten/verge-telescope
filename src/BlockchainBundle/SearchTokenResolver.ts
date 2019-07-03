import BlockchainClient from './BlockchainClient'
import AddressTransaction from './Models/AddressTransaction'
import ProviderInterface from './ProviderInterface'
import Transaction from './Models/Transaction'
import Block from './Models/Block'

class SearchTokenResolver {
    protected blockchainClient: BlockchainClient

    public constructor(blockchainClient: BlockchainClient) {
        this.blockchainClient = blockchainClient
    }

    public resolve(token: string): Promise<AddressTransaction[]|Block|Transaction> {
        return this.blockchainClient
            .transactionByTxid(token)
            .catch(error => {
                return this.blockchainClient.blockByHash(token)
            })
            .catch(error => {
                return this.blockchainClient.transactionsByAddress(token)
            })
    }
}

declare module 'vue/types/vue' {
    interface Vue {
        $searchTokenResolver: SearchTokenResolver
    }
}

export default SearchTokenResolver
