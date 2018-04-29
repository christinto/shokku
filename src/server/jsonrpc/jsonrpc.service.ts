import { NetworkChainRequestEntity } from '@/core/entities'
import { NetworksRepository } from '@/networks/networks'
import JsonRpcEntity from '@/server/jsonrpc/jsonrpc.entity'
import { Component } from '@nestjs/common'

@Component()
export default class JsonRpcService {
  constructor(private readonly repository: NetworksRepository) { }

  networks(): object {
    const networks = this.repository.getAllNetworkProviders().map(p => p.id)
    return { networks }
  }

  chains(entity: NetworkChainRequestEntity<any>): object {
    // const n = this.repository.get(network)
    // const chains = Array.from(n.networks.keys())
    // return { chains }
    return {}
  }

  methods(entity: NetworkChainRequestEntity<any>): object {
    // const n = this.repository.get(network)
    return {}
  }

  rpcMethod(entity: NetworkChainRequestEntity<JsonRpcEntity>): object {
    throw new Error('Method not implemented.')
  }

  private randomId(): number {
    // 13 time related digits
    const dateId = new Date().getTime() * (10 ** 3)
    // 3 random digits
    const extraId = Math.floor(Math.random() * (10 ** 3))
    // 16 digits
    return dateId + extraId
  }
}
