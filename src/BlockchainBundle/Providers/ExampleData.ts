import Block from '../Models/Block'
import Transaction from '../Models/Transaction'
import AddressTransaction from '../Models/AddressTransaction'

export default class ExampleData {
    public blocks: Block[]
    public transactions: Transaction[]
    public addresses: AddressTransaction[]
}

export const data = {
    blocks: [{
        '_id': '5cfcd669f92052270415790e',
        'chain': 'XVG',
        'network': 'mainnet',
        'hash': 'eb63f669a121727738ce5ec6983b92108337552349c8da0217f4a7a5bb8e80dc',
        'height': 3194444,
        'version': 6148,
        'size': 235,
        'merkleRoot': 'eb2c1709a0e6570360da1ff43bd3a0ca6100adece5c43927fe4744ff990e91f1',
        'time': '2019-06-09T09:49:47.000Z',
        'timeNormalized': '2019-06-09T09:49:47.000Z',
        'nonce': 4150279795,
        'bits': 453097470,
        'previousBlockHash': '09012ec6c75df76a9ea84c5cd516ce0c6fc2d354fbafc9ed9ee107bd3ad9040e',
        'nextBlockHash': '',
        'reward': 730000000,
        'transactionCount': 1
    }, {
        '_id': '5cfcd668f9205227041578f7',
        'chain': 'XVG',
        'network': 'mainnet',
        'hash': '09012ec6c75df76a9ea84c5cd516ce0c6fc2d354fbafc9ed9ee107bd3ad9040e',
        'height': 3194443,
        'version': 6148,
        'size': 235,
        'merkleRoot': '8de2448607418793f19c1e0bc68f6cd3acf0c4f03b4dd49ccc083d18e65d80f1',
        'time': '2019-06-09T09:49:02.000Z',
        'timeNormalized': '2019-06-09T09:49:02.000Z',
        'nonce': 4133838440,
        'bits': 453086167,
        'previousBlockHash': '44707542bd3565cb69ea08a80bf35050d98781318b052b902f8d4593d8a9c1cb',
        'nextBlockHash': 'eb63f669a121727738ce5ec6983b92108337552349c8da0217f4a7a5bb8e80dc',
        'reward': 730000000,
        'transactionCount': 1
    }, {
        '_id': '5cfcd668f9205227041578de',
        'chain': 'XVG',
        'network': 'mainnet',
        'hash': '44707542bd3565cb69ea08a80bf35050d98781318b052b902f8d4593d8a9c1cb',
        'height': 3194442,
        'version': 6148,
        'size': 235,
        'merkleRoot': 'b484922e02fc074e3b7cdfba19707f72f44b12d351f06a0f79f3224a3a15a0e2',
        'time': '2019-06-09T09:47:02.000Z',
        'timeNormalized': '2019-06-09T09:47:02.000Z',
        'nonce': 3936365502,
        'bits': 453086193,
        'previousBlockHash': '5ad46f387d1485e6b716e1f2b436dc7698d48f64476c5b259ad5cdc0386672e6',
        'nextBlockHash': '09012ec6c75df76a9ea84c5cd516ce0c6fc2d354fbafc9ed9ee107bd3ad9040e',
        'reward': 730000000,
        'transactionCount': 1
    }, {
        '_id': '5cfcd598f92052270415287d',
        'chain': 'XVG',
        'network': 'mainnet',
        'hash': '5ad46f387d1485e6b716e1f2b436dc7698d48f64476c5b259ad5cdc0386672e6',
        'height': 3194441,
        'version': 6148,
        'size': 1843,
        'merkleRoot': 'e6b8b0512e95377734ceb7f12199a2a57bc35539a8015b7c7e1536eaedffe39a',
        'time': '2019-06-09T09:46:47.000Z',
        'timeNormalized': '2019-06-09T09:46:47.000Z',
        'nonce': 1727235143,
        'bits': 453067578,
        'previousBlockHash': '91e27a53d7206cfcefb5d4e137178a83c2a26ffb1a2d866ade8eb4e67c0ad8a8',
        'nextBlockHash': '44707542bd3565cb69ea08a80bf35050d98781318b052b902f8d4593d8a9c1cb',
        'reward': 731000040,
        'transactionCount': 3
    }, {
        '_id': '5cfcd533f9205227041501d3',
        'chain': 'XVG',
        'network': 'mainnet',
        'hash': '91e27a53d7206cfcefb5d4e137178a83c2a26ffb1a2d866ade8eb4e67c0ad8a8',
        'height': 3194440,
        'version': 20484,
        'size': 940,
        'merkleRoot': '5218d6b0ae3fe0ac63ef425fcea4f67ebfe80a706dee44846185919f7ec34877',
        'time': '2019-06-09T09:45:05.000Z',
        'timeNormalized': '2019-06-09T09:45:05.000Z',
        'nonce': 3237247072,
        'bits': 453026420,
        'previousBlockHash': '8b473decdf551e763f629b666461c4ec4e1eab898d1fbb6ca3859f510666d6b9',
        'nextBlockHash': '5ad46f387d1485e6b716e1f2b436dc7698d48f64476c5b259ad5cdc0386672e6',
        'reward': 730200000,
        'transactionCount': 3
    }],
    transactions: [{
        '_id': '5cfcd669f920522704157917',
        'txid': 'eb2c1709a0e6570360da1ff43bd3a0ca6100adece5c43927fe4744ff990e91f1',
        'network': 'mainnet',
        'chain': 'XVG',
        'blockHeight': 3194444,
        'blockHash': 'eb63f669a121727738ce5ec6983b92108337552349c8da0217f4a7a5bb8e80dc',
        'blockTime': '2019-06-09T09:49:47.000Z',
        'blockTimeNormalized': '2019-06-09T09:49:47.000Z',
        'coinbase': true,
        'locktime': -1,
        'inputCount': 1,
        'outputCount': 2,
        'size': 154,
        'fee': -1,
        'value': 730000000,
        'confirmations': -114557
    }, {
        '_id': '5cfcd668f920522704157900',
        'txid': '8de2448607418793f19c1e0bc68f6cd3acf0c4f03b4dd49ccc083d18e65d80f1',
        'network': 'mainnet',
        'chain': 'XVG',
        'blockHeight': 3194443,
        'blockHash': '09012ec6c75df76a9ea84c5cd516ce0c6fc2d354fbafc9ed9ee107bd3ad9040e',
        'blockTime': '2019-06-09T09:49:02.000Z',
        'blockTimeNormalized': '2019-06-09T09:49:02.000Z',
        'coinbase': true,
        'locktime': -1,
        'inputCount': 1,
        'outputCount': 2,
        'size': 154,
        'fee': -1,
        'value': 730000000,
        'confirmations': -114556
    }, {
        '_id': '5cfcd668f9205227041578ed',
        'txid': 'b484922e02fc074e3b7cdfba19707f72f44b12d351f06a0f79f3224a3a15a0e2',
        'network': 'mainnet',
        'chain': 'XVG',
        'blockHeight': 3194442,
        'blockHash': '44707542bd3565cb69ea08a80bf35050d98781318b052b902f8d4593d8a9c1cb',
        'blockTime': '2019-06-09T09:47:02.000Z',
        'blockTimeNormalized': '2019-06-09T09:47:02.000Z',
        'coinbase': true,
        'locktime': -1,
        'inputCount': 1,
        'outputCount': 2,
        'size': 154,
        'fee': -1,
        'value': 730000000,
        'confirmations': -114555
    }, {
        '_id': '5cfcd528f92052270414fde4',
        'txid': 'a5a3193a270897b02093fc787990e35dd8fb8b4023985f0bb769bc1725d8e42b',
        'network': 'mainnet',
        'chain': 'XVG',
        'blockHeight': 3194441,
        'blockHash': '5ad46f387d1485e6b716e1f2b436dc7698d48f64476c5b259ad5cdc0386672e6',
        'blockTime': '2019-06-09T09:46:47.000Z',
        'blockTimeNormalized': '2019-06-09T09:46:47.000Z',
        'coinbase': false,
        'locktime': -1,
        'inputCount': 2,
        'outputCount': 2,
        'size': 378,
        'fee': 100000,
        'value': 1387290580,
        'confirmations': -114554
    }, {
        '_id': '5cfcd549f920522704150a6e',
        'txid': '335de366c930a387c901a9b64704a2a4c3afc8ca4cd05fea62e3907e4b868b22',
        'network': 'mainnet',
        'chain': 'XVG',
        'blockHeight': 3194441,
        'blockHash': '5ad46f387d1485e6b716e1f2b436dc7698d48f64476c5b259ad5cdc0386672e6',
        'blockTime': '2019-06-09T09:46:47.000Z',
        'blockTimeNormalized': '2019-06-09T09:46:47.000Z',
        'coinbase': false,
        'locktime': 3194439,
        'inputCount': 8,
        'outputCount': 1,
        'size': 1230,
        'fee': 900040,
        'value': 15000000000,
        'confirmations': -114554
    }, {
        '_id': '5cfcd598f9205227041528a1',
        'txid': '2bc32196560595a2f0f91529fc60b94bcf6037d9a591d82cda3181e0fb4378ea',
        'network': 'mainnet',
        'chain': 'XVG',
        'blockHeight': 3194441,
        'blockHash': '5ad46f387d1485e6b716e1f2b436dc7698d48f64476c5b259ad5cdc0386672e6',
        'blockTime': '2019-06-09T09:46:47.000Z',
        'blockTimeNormalized': '2019-06-09T09:46:47.000Z',
        'coinbase': true,
        'locktime': -1,
        'inputCount': 1,
        'outputCount': 2,
        'size': 154,
        'fee': -1,
        'value': 731000040,
        'confirmations': -114554
    }, {
        '_id': '5cfcd505f92052270414f086',
        'txid': 'af78a396b75e7de4660996b91d723324aa9728358d62ab331982f92c04fdb1ce',
        'network': 'mainnet',
        'chain': 'XVG',
        'blockHeight': 3194440,
        'blockHash': '91e27a53d7206cfcefb5d4e137178a83c2a26ffb1a2d866ade8eb4e67c0ad8a8',
        'blockTime': '2019-06-09T09:45:05.000Z',
        'blockTimeNormalized': '2019-06-09T09:45:05.000Z',
        'coinbase': false,
        'locktime': -1,
        'inputCount': 2,
        'outputCount': 2,
        'size': 342,
        'fee': 100000,
        'value': 943910952,
        'confirmations': -114553
    }, {
        '_id': '5cfcd533f9205227041501ea',
        'txid': '22d69c52cf17b696886bc461470805b24212ed7f185512fb0d307461565ce5c8',
        'network': 'mainnet',
        'chain': 'XVG',
        'blockHeight': 3194440,
        'blockHash': '91e27a53d7206cfcefb5d4e137178a83c2a26ffb1a2d866ade8eb4e67c0ad8a8',
        'blockTime': '2019-06-09T09:45:05.000Z',
        'blockTimeNormalized': '2019-06-09T09:45:05.000Z',
        'coinbase': true,
        'locktime': -1,
        'inputCount': 1,
        'outputCount': 1,
        'size': 138,
        'fee': -1,
        'value': 730200000,
        'confirmations': -114553
    }, {
        '_id': '5cfcd533f9205227041501eb',
        'txid': '289a58dd7a1cb652a0738f53e918dfcb27784f60ca86b84b1ea815df7d2f487f',
        'network': 'mainnet',
        'chain': 'XVG',
        'blockHeight': 3194440,
        'blockHash': '91e27a53d7206cfcefb5d4e137178a83c2a26ffb1a2d866ade8eb4e67c0ad8a8',
        'blockTime': '2019-06-09T09:45:05.000Z',
        'blockTimeNormalized': '2019-06-09T09:45:05.000Z',
        'coinbase': false,
        'locktime': -1,
        'inputCount': 2,
        'outputCount': 2,
        'size': 379,
        'fee': 100000,
        'value': 128245509,
        'confirmations': -114553
    }],
    addresses: [{
        '_id': '5cfc4d75f920522704e09623',
        'chain': 'XVG',
        'network': 'mainnet',
        'coinbase': false,
        'mintIndex': 1,
        'spentTxid': 'd15689871773247d9c1b2516a0cee51fb9e3845594c680b43a04bca71e12ccfc',
        'mintTxid': '11a8200114bfbc4f25b5679a77da852416e4dc19cfbc13b6081cced3022c0e95',
        'mintHeight': 3193400,
        'spentHeight': 3194083,
        'address': 'DLoPoTE5G9AUwSzE1D5ocarfhATMVwsfu7',
        'script': '76a914abc81a560db274ad9985357af8a285f058ca330288ac',
        'value': 332809675046,
        'confirmations': -1
    }, {
        '_id': '5c2a034ba55546be36ac77a5',
        'chain': 'XVG',
        'network': 'mainnet',
        'coinbase': false,
        'mintIndex': 0,
        'spentTxid': '7960250549bd79d7e10525460753119fb4f58b97a09e24a37d97e88390a93e2a',
        'mintTxid': '5653dd15e4d4953e4a700e58623af9c362c8defb2eb20d9117de43fc3a346591',
        'mintHeight': 1744021,
        'spentHeight': 1744031,
        'address': 'DHgCPaJUeT651YC9JCWByRqCSHHLj4Jr1p',
        'script': '76a914898349accb9320188c06ce0a3f0bc89c20a67f1488ac',
        'value': 173496057,
        'confirmations': -1
    }, {
        '_id': '5c2b69d4a55546be36c29c59',
        'chain': 'XVG',
        'network': 'mainnet',
        'coinbase': false,
        'mintIndex': 1,
        'spentTxid': 'ffb3f693ca069d9216082c31bc473f11042ca1d9de5e31d2e0a4ee573217f0a0',
        'mintTxid': '864e5216e1abf84721a2f4bde728b5c8ae7bb163df3acd28d5896bd22d21d8f1',
        'mintHeight': 2370978,
        'spentHeight': 2371576,
        'address': 'DHgCPaJUeT651YC9JCWByRqCSHHLj4Jr1p',
        'script': '76a914898349accb9320188c06ce0a3f0bc89c20a67f1488ac',
        'value': 2199900000,
        'confirmations': -1
    }, {
        '_id': '5c2b70dea55546be36cb4d05',
        'chain': 'XVG',
        'network': 'mainnet',
        'coinbase': false,
        'mintIndex': 0,
        'spentTxid': '5fc0c52e69abed56129d12bb5a9e0c0d7cc7d01b9c1c8fce0c0717c59ddae0b5',
        'mintTxid': '6d442015a7fe01aa733bda6c0355449fcd9881833481b6f4c0208567c83d43f4',
        'mintHeight': 2384251,
        'spentHeight': 2385409,
        'address': 'DHgCPaJUeT651YC9JCWByRqCSHHLj4Jr1p',
        'script': '76a914898349accb9320188c06ce0a3f0bc89c20a67f1488ac',
        'value': 3752900000,
        'confirmations': -1
    }, {
        '_id': '5c2ba937a55546be3611fb56',
        'chain': 'XVG',
        'network': 'mainnet',
        'coinbase': false,
        'mintIndex': 2,
        'spentTxid': '6445b0bc4bc99ff5d21c3214926c2a6b2c31efd6877218cd1aaf119adbffd3a6',
        'mintTxid': 'd7676744ff654a869101c92275be99380eaf53d7e46bd3362784b4e8318b5dd8',
        'mintHeight': 2490491,
        'spentHeight': 2492683,
        'address': 'DHgCPaJUeT651YC9JCWByRqCSHHLj4Jr1p',
        'script': '76a914898349accb9320188c06ce0a3f0bc89c20a67f1488ac',
        'value': 1449900000,
        'confirmations': -1
    }, {
        '_id': '5c2bb405a55546be361f961f',
        'chain': 'XVG',
        'network': 'mainnet',
        'coinbase': false,
        'mintIndex': 0,
        'spentTxid': '2b427d313f9fa0f4b109d2dce48303a535dd83cfdaa6eeb51af70f93d608c760',
        'mintTxid': '24a4a426e2d62bd793827a07ce520ee4478aa778bac895edb233ac971ef558ef',
        'mintHeight': 2510782,
        'spentHeight': 2511128,
        'address': 'DHgCPaJUeT651YC9JCWByRqCSHHLj4Jr1p',
        'script': '76a914898349accb9320188c06ce0a3f0bc89c20a67f1488ac',
        'value': 626900000,
        'confirmations': -1
    }, {
        '_id': '5c2bbca7a55546be362a3da3',
        'chain': 'XVG',
        'network': 'mainnet',
        'coinbase': false,
        'mintIndex': 1,
        'spentTxid': '4fdaa8472ae92866dbee0d1b2fa4a6a9077e9b4db5c51d7e3ee95697a7e79518',
        'mintTxid': '840f21e71f1fc0e9d39a2d17bbe75f8e7b803c7c6df665cdb0e281eb02b48be7',
        'mintHeight': 2526777,
        'spentHeight': 2526812,
        'address': 'DHgCPaJUeT651YC9JCWByRqCSHHLj4Jr1p',
        'script': '76a914898349accb9320188c06ce0a3f0bc89c20a67f1488ac',
        'value': 699900000,
        'confirmations': -1
    }, {
        '_id': '5c2be644a55546be365ab079',
        'chain': 'XVG',
        'network': 'mainnet',
        'coinbase': false,
        'mintIndex': 1,
        'spentTxid': 'f779ed734a1edb6e93099c621781bd19450e96329c0402e4ca02ab33339f81e8',
        'mintTxid': 'c8f2f8a798cfffc85db903a3b6d26696d58dc510d5faf64eb455b972c0a4c746',
        'mintHeight': 2611524,
        'spentHeight': 2611631,
        'address': 'DHgCPaJUeT651YC9JCWByRqCSHHLj4Jr1p',
        'script': '76a914898349accb9320188c06ce0a3f0bc89c20a67f1488ac',
        'value': 3813900000,
        'confirmations': -1
    }, {
        '_id': '5c2c0a85a55546be3683130c',
        'chain': 'XVG',
        'network': 'mainnet',
        'coinbase': false,
        'mintIndex': 1,
        'spentTxid': '20fc1e361f18546347fb4e0c57858cf21f746ee1fa31bceff750a7bacf7174d7',
        'mintTxid': 'f99f772f4d018618e1bf72628660e894eaccf97ab6bdea433b88f01443b91c2e',
        'mintHeight': 2691686,
        'spentHeight': 2691827,
        'address': 'DHgCPaJUeT651YC9JCWByRqCSHHLj4Jr1p',
        'script': '76a914898349accb9320188c06ce0a3f0bc89c20a67f1488ac',
        'value': 7329563000,
        'confirmations': -1
    }, {
        '_id': '5cddc440f920522704f71bbd',
        'chain': 'XVG',
        'network': 'mainnet',
        'coinbase': false,
        'mintIndex': 1,
        'spentTxid': 'b114bb6af3b016d0630c7e8f8d1b396d7f196463a4e7441fa899941fe0247a9b',
        'mintTxid': '0ea6163a68391919a31c03af0b3907f4761302a36c0f349946ba98a519e6e8c5',
        'mintHeight': 3133774,
        'spentHeight': 3159783,
        'address': 'DHgCPaJUeT651YC9JCWByRqCSHHLj4Jr1p',
        'script': '76a914898349accb9320188c06ce0a3f0bc89c20a67f1488ac',
        'value': 5824900000,
        'confirmations': -1
    }, {
        '_id': '5cfcd2c3f920522704141102',
        'chain': 'XVG',
        'network': 'mainnet',
        'coinbase': false,
        'mintIndex': 2,
        'spentTxid': '',
        'mintTxid': '8098dffbda8c39c34f2c8fbadc6f48c3435eea4ce2a9dd2dd3481479ff7b5cce',
        'mintHeight': 3194420,
        'spentHeight': -2,
        'address': 'DHgCPaJUeT651YC9JCWByRqCSHHLj4Jr1p',
        'script': '76a914898349accb9320188c06ce0a3f0bc89c20a67f1488ac',
        'value': 3070826000,
        'confirmations': -1
    }, {
        '_id': '5cfccf2ff92052270412aedd',
        'chain': 'XVG',
        'network': 'mainnet',
        'coinbase': false,
        'mintIndex': 0,
        'spentTxid': '',
        'mintTxid': 'c3e57c6a806fc2498dbf0407a5d33530f658846934548db3ce56ede057c10691',
        'mintHeight': 3194370,
        'spentHeight': -2,
        'address': 'DAHZiMDRFqXYH1A8f9EknhZamEHN14iL8s',
        'script': '76a9143872a3eb5e15ee7117f7ee87fe5fc6145717efa388ac',
        'value': 1264900000,
        'confirmations': -1
    }]
}
