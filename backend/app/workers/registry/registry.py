class WorkerRegistry:

    def __init__(self):
        self.handlers = {}

    def register(
        self,
        task_type: str,
        handler
    ):
        self.handlers[task_type] = handler

    def get(self, task_type: str):
        return self.handlers.get(task_type)