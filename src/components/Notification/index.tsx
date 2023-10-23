import { useEffect } from "react";
import { StyledNotification } from "./style";

type Props = {
  name: string;
  status: "success" | "error";
  id: string;
  onClose: (id: string) => void;
};

export const Notification = ({ name, status, id, onClose }: Props) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose(id);
    }, 4000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {status === "success" ? (
        <StyledNotification className={status}>
          <p>
            <span>{name}</span> agregada exitosamente! ✅
          </p>
          <button onClick={() => onClose(id)}>X</button>
        </StyledNotification>
      ) : (
        <StyledNotification className={status}>
          <p>
            <span>{name}</span> ya se encuentra en el carrito! ❌
          </p>
          <button onClick={() => onClose(id)}>X</button>
        </StyledNotification>
      )}
    </>
  );
};
