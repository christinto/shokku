import { HttpStatus, HttpException } from '@nestjs/common'
import { NetworkProviderNotFound, NetworkChainNotFound, TickerExchangeNotAvailable } from '@/networks'

// HttpExceptions

// - Networks
export const HttpNetworkNotFoundException = new HttpException('Invalid network requested', HttpStatus.NOT_FOUND)
export const HttpNetworkChainNotFoundException = new HttpException('Invalid chain requested', HttpStatus.NOT_FOUND)

// - Tickers
export const HttpTickerExchangeNotAvailableException = new HttpException(
  'Exchange is not available now. Please, try again later.',
  HttpStatus.INTERNAL_SERVER_ERROR
)
export const HttpTickerInvalidExchangeSymbolException = new HttpException(
  'Invalid exchange ticker symbol requested',
  HttpStatus.NOT_FOUND
)

// - General
export const HttpInternalServerException = new HttpException(
  'The server can\'t process this request. Please, try again later.',
  HttpStatus.INTERNAL_SERVER_ERROR
)

export class HttpExceptionAdapter {
  static toHttpException(error: Error): Error {
    if (error instanceof NetworkProviderNotFound) {
      return HttpNetworkNotFoundException
    }

    if (error instanceof NetworkChainNotFound) {
      return HttpNetworkChainNotFoundException
    }

    if (error instanceof TickerExchangeNotAvailable) {
      return HttpTickerExchangeNotAvailableException
    }

    return HttpInternalServerException
  }
}
