export interface OrderInterface {
    id: string;
    title: string;
    status: 'Entregue' | 'Aguardando retirada' | 'Nova correspondência';
    receivedAt?: string;
}