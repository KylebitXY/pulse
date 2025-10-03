from collections import defaultdict
from fastapi import WebSocket


class RoomManager:

    def __init__(self):
        self.rooms = defaultdict(list)

    async def join(self, room: str, websocket: WebSocket):
        self.rooms[room].append(websocket)

    def leave(self, room: str, websocket: WebSocket):
        self.rooms[room].remove(websocket)

    async def broadcast(self, room: str, message: dict):
        for ws in self.rooms[room]:
            await ws.send_json(message)