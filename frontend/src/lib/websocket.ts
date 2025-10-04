class SocketClient {

  socket: WebSocket | null = null;

  connect(userId: string) {

    this.socket = new WebSocket(
      `ws://localhost:8000/ws/${userId}`
    );

    this.socket.onopen = () => {
      console.log("connected");
    };

    this.socket.onmessage = (e) => {
      console.log(e.data);
    };

    this.socket.onclose = () => {
      console.log("closed");
    };
  }

  send(data: any) {

    this.socket?.send(
      JSON.stringify(data)
    );
  }
}

export const socketClient =
  new SocketClient();