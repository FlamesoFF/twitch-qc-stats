import { AppNotification } from "../notification.interface";

export interface NotificationState extends AppNotification {
  visible: boolean;
}
