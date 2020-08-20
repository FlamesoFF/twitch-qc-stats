// TODO
new class WebsocketWorker{
    private socket = new WebSocket('ws://localhost:57174');

    constructor(){
        const localConnection = new RTCPeerConnection();
        const sendChannel = localConnection.createDataChannel("sendChannel");


        this.socket.onopen = () => {
        };
        
        this.socket.onmessage = () => {

        };
    
        this.socket.onclose = () => {

        };
    }
}