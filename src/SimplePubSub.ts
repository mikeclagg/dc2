import { EventEmitter } from 'events'

/**
 * class SimplePubSub
 *
 */
export default class SimplePubSub {
  private _eventBus: EventEmitter = new EventEmitter()

  public publish(eventName: string, data: any = {}) {
    this._eventBus.emit(eventName, data)
  }

  get subscribe(): EventEmitter {
    return this._eventBus
  }
}
