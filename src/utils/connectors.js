import { Connect, SimpleSigner } from 'uport-connect'

//export let uport = new Connect('TruffleBox')

export let uport = new Connect('uPortDemo', {
    clientId: 'Client_ID',
    network: 'rinkeby',
    signer: SimpleSigner('SignerKey')
})

export const web3 = uport.getWeb3()
