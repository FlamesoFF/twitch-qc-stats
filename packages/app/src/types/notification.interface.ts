export interface AppNotification {
  variant: 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
  type: 'error' | 'warn';
  text: string;
}
