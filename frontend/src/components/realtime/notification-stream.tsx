"use client";

type Notification = {
  id: number;
  message: string;
};

const notifications: Notification[] = [
  {
    id: 1,
    message: "Worker connected",
  },
  {
    id: 2,
    message: "Queue threshold exceeded",
  },
  {
    id: 3,
    message: "Retry job executed",
  },
];

export function NotificationStream() {

  return (

    <div
      data-testid="notification-stream"
      className="border border-zinc-800 rounded-xl p-4 space-y-2"
    >

      <h2 className="text-lg font-bold">
        Notifications
      </h2>

      {notifications.map((item) => (

        <div
          key={item.id}
          className="bg-zinc-900 p-2 rounded-md"
        >
          {item.message}
        </div>

      ))}

    </div>
  );
}