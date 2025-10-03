from fastapi import WebSocket, WebSocketDisconnect
from app.websocket.manager.connection_manager import ConnectionManager
from app.websocket.presence.presence import PresenceService


manager = ConnectionManager()
presence = PresenceService()

from app.observability.metrics.metrics import (
    ACTIVE_WEBSOCKETS
)
async def websocket_endpoint(websocket: WebSocket, user_id: str):

    await manager.connect(user_id, websocket)
    await presence.set_online(user_id)

    try:
        while True:

            data = await websocket.receive_json()

            # echo / routing layer
            await manager.send_personal(user_id, {
                "event": "message",
                "data": data
            })

    except WebSocketDisconnect:

        manager.disconnect(user_id, websocket)
        await presence.set_offline(user_id)