export interface IMessage {
    id: string;
    text: string;
    user: string;
    isAuthor: boolean;
    isFirstMessage: boolean;
    createdAt: Date;
}

class MessageService {
    constructor() { }
    public async createMessage(message: IMessage) {
        const { isAuthor, isFirstMessage, user, text, createdAt, id } = message;
        if (message.text.length === 0) {
            throw new Error('Message cannot be empty');
        }
        const formattedTime = createdAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        const messageHtml: string = `
                <div class="${isAuthor ? 'message-normal' : 'message-reverse'} ${isFirstMessage ? 'first-message' : ''}">
                  <div class="message-content">
                    <div class="message-text">
                      <p>${text}</p>
                    </div>
                    <div class="message-time">
                      <p>${formattedTime}</p>
                    </div>
                  </div>
                </div>
                `;
        const messageContainer = document.getElementsByClassName('messages-container')[0];
        if(messageContainer) messageContainer.innerHTML += messageHtml;

        console.log(messageHtml, user, id)


        // create message
    }
}

export default MessageService;