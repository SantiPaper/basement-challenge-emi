import { StyledProducts } from "./style";
import { useEffect, useState } from "react";
import { getRopa } from "../../api";
import { type Ropa } from "../../api/types";
import { Container } from "../Container";
import { Product } from "../Product";
import {
  ContainerNotification,
  type Notification,
} from "../ContainerNotifications";

type Props = {
  addCart: (value: Ropa) => void;
};

export const Products = ({ addCart }: Props) => {
  const [clothes, setClothes] = useState<Array<Ropa>>([]);
  const [notifications, setNotifications] = useState<Array<Notification>>([]);

  const addNotification = (notification: Omit<Notification, "id">) => {
    if (notifications.find((e) => e.name === notification.name)) {
      return;
    }
    setNotifications((prev) => [
      ...prev,
      {
        ...notification,
        id: crypto.randomUUID(),
      },
    ]);
  };

  const deleteNotification = (id: string) => {
    setNotifications((prev) => prev.filter((noti) => noti.id !== id));
  };

  useEffect(() => {
    getRopa().then((data) => setClothes(data));
  }, []);

  return (
    <Container>
      <StyledProducts>
        {clothes.map((product) => (
          <Product
            key={product.id}
            addNotification={addNotification}
            addCart={addCart}
            product={product}
            notifications={notifications}
          />
        ))}
      </StyledProducts>
      {notifications.length > 0 && (
        <ContainerNotification
          onClose={deleteNotification}
          notifications={notifications}
        />
      )}
    </Container>
  );
};
