import { Connect, SimpleSigner } from 'uport-connect'

//export let uport = new Connect('TruffleBox')

export let uport = new Connect('uPortDemo', {
    clientId: '2ouCTqTTGNme4cV8M3ZRKU35HVWX6JmqZ3k',
    network: 'rinkeby',
    signer: SimpleSigner('1be064ef3d21c517c9ac9eb379d70c2d6ebd6af13ca6fe72a17cd55eb1763b68')
})

export const web3 = uport.getWeb3()
