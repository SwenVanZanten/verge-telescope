import ProviderInterface from '../ProviderInterface'
import {NuxtAxiosInstance} from '@nuxtjs/axios'
import Block from '../Models/Block'
import Transaction from '../Models/Transaction'
import AddressTransaction from '../Models/AddressTransaction'

export default class Bitcore implements ProviderInterface {
    protected $axios: NuxtAxiosInstance

    constructor(axios: NuxtAxiosInstance) {
        this.$axios = axios
    }

    public blocks(limit: number): Promise<Block[]> {
        return this.$axios.$get(
            `https://vws.vergecurrency.network/node/api/XVG/mainnet/block?limit=${limit}`
        )
    }

    public blockByHash(hash: string): Promise<Block> {
        return this.$axios.$get(
            `https://vws.vergecurrency.network/node/api/XVG/mainnet/block/${hash}`
        );
    }

    public transactionsByBlock(block: Block): Promise<Transaction[]> {
        return this.$axios.$get(
            `https://vws.vergecurrency.network/node/api/XVG/mainnet/tx?blockHeight=${block.height}`
        )
    }

    public transactionsByAddress(address: string): Promise<AddressTransaction[]> {
        return this.$axios.$get(
            `https://vws.vergecurrency.network/node/api/XVG/mainnet/address/${address}`
        )
    }

    public transactionByTxid(txid: string): Promise<Transaction> {
        return this.$axios.$get(
            `https://vws.vergecurrency.network/node/api/XVG/mainnet/tx/${txid}`
        )
    }
}
