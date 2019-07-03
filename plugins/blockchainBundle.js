import Bitcore from '../src/BlockchainBundle/Providers/Bitcore'
import Example from '../src/BlockchainBundle/Providers/Example'
import BlockchainClient from '../src/BlockchainBundle/BlockchainClient'
import SearchTokenResolver from '../src/BlockchainBundle/SearchTokenResolver'
import TelescopeConfig from '../telescope.config'
import { data as exampleData } from '../src/BlockchainBundle/Providers/ExampleData'

const resolveProvider = (provider, axios) => {
  if (typeof provider === 'object') {
    return provider
  }

  if (typeof provider !== 'string') {
    throw Error('Blockchain provider needs to be a string.')
  }

  switch (provider) {
    case 'bitcore':
      return new Bitcore(axios)
    case 'example':
      return new Example(exampleData)
    default:
      throw Error(`Provider [${provider}] isn't supported.`)
  }
}

/*
 ** Executed by ~/.nuxt/index.js with context given
 ** This method can be asynchronous
 */
export default ({ $axios }, inject) => {
  const provider = TelescopeConfig.blockchainBundle.provider
  const blockchainClient = new BlockchainClient(
    resolveProvider(provider, $axios)
  )

  inject('blockchainClient', blockchainClient)

  const searchTokenResolver = new SearchTokenResolver(blockchainClient)
  inject('searchTokenResolver', searchTokenResolver)
}
