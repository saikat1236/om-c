import { createContext, ReactNode, useContext, useMemo } from "react";
import { io, Socket } from "socket.io-client";

interface ISocketContext {
  socket: Socket | null;
}

const SocketContext = createContext<ISocketContext | null>(null);

// Custom hook for accessing the socket
export const useSocket = () => useContext(SocketContext)!;

export const SocketProvider = ({ children }: { children: ReactNode }) => {
  const socket = useMemo(() => io("https://om-c.onrender.com"), []); // Persist socket connection

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};
