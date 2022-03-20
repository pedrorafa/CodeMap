import IObserver from '../observer/IObserver'
import Message from './Message'

export default interface ISubject{
    subscribe(observer: IObserver): boolean
    unsubscribe(id: string): boolean
    notify(message: Message): void
    registered: IObserver[]
}