import { OrderInterface } from "@/interfaces/Order";

export const mockData = {
  notifications: [
    "Manutenção na garagem às 10h",
    "Reunião do condomínio na sexta",
    "Entrega agendada para 14h",
    "Votação sobre a nova regra de segurança",
    "Aviso sobre elevador em manutenção",
    "Recolhimento de lixo amanhã",
    "Piscina interditada para limpeza",
    "Novo zelador começa segunda",
    "Desligamento programado de energia",
  ]
};

export const mockPools = {
  pools: [
    {
      id: "1",
      title: "Votação sobre a nova regra de segurança?",
    },
    {
      id: "2",
      title: "Manutenção da piscina?",
    },
    {
      id: "3",
      title: "Reforma do salão de festas?",
    },
    {
      id: "4",
      title: "Alteração no horário de silêncio?",
    },
    {
      id: "5",
      title: "Criação de um fundo de emergência?",
    },
    {
      id: "6",
      title: "Mudança na taxa de condomínio?",
    },
    {
      id: "7",
      title: "Implementação de câmeras de segurança?",
    },
    {
      id: "8",
      title: "Alteração no regulamento do uso da churrasqueira?",
    },
    {
      id: "9",
      title: "Proposta de criação de um grupo de WhatsApp do condomínio?",
    },
    {
      id: "10",
      title: "Votação sobre a instalação de placas solares?",
    },
    {
      id: "11",
      title: "Votação sobre a troca de fornecedor de internet?",
    },
  ]
}

export const mockServices = {
  services: [
    {
      id: "1",
      title: "Concierge 24h - Solicite ajuda com reservas, delivery, etc.",
    },
    {
      id: "2",
      title: "Limpeza e Manutenção - Agende serviços de limpeza e reparos.",
    },
    {
      id: "3",
      title: "Transporte - Solicite transporte para eventos ou passeios.",
    },
    {
      id: "4",
      title: "Segurança - Relate problemas de segurança ou solicite patrulhamento.",
    },
    {
      id: "5",
      title: "Eventos - Reserve espaços para festas, reuniões, etc.",
    },
    {
      id: "6",
      title: "Jardinagem - Agende serviços de paisagismo e jardinagem.",
    },
    {
      id: "7",
      title: "Manutenção de Piscina - Agende limpeza e manutenção da piscina.",
    },
    {
      id: "8",
      title: "Serviços de Entrega - Solicite entrega de encomendas ou compras.",
    },
    {
      id: "9",
      title: "Reparos Elétricos - Agende serviços de eletricista.",
    },
    {
      id: "10",
      title: "Reparos Hidráulicos - Agende serviços de encanador.",
    },
  ]
}

export const mockFinances = {
  finances: [
    {
      id: "1",
      title: "Boleto de junho",
      price: 420,
      date: "2025-06-10",
    },
    {
      id: "2",
      title: "Boleto de julho",
      price: 420,
      date: "2025-07-10",
    },
    {
      id: "3",
      title: "Último pagamento: confirmado",
      price: 420,
      date: "2025-06-08",
    },
    {
      id: "4",
      title: "Último pagamento: pendente",
      price: 420,
      date: "2025-07-08",
    },
    {
      id: "5",
      title: "Taxa de manutenção mensal",
      price: 100,
      date: "2025-06-01",
    },
    {
      id: "6",
      title: "Taxa de manutenção mensal",
      price: 100,
      date: "2025-07-01",
    },
    {
      id: "7",
      title: "Fundo de reserva - junho",
      price: 50,
      date: "2025-06-15",
    },
    {
      id: "8",
      title: "Fundo de reserva - julho",
      price: 50,
      date: "2025-07-15",
    },
    {
      id: "9",
      title: "Pagamento de fornecedor - limpeza",
      price: 200,
      date: "2025-06-20",
    },
    {
      id: "10",
      title: "Pagamento de fornecedor - segurança",
      price: 300,
      date: "2025-07-20",
    },
    {
      id: "11",
      title: "Pagamento de fornecedor - jardinagem",
      price: 150,
      date: "2025-06-25",
    },
    {
      id: "12",
      title: "Pagamento de fornecedor - manutenção elétrica",
      price: 250,
      date: "2025-07-25",
    },
    {
      id: "13",
      title: "Pagamento de fornecedor - manutenção hidráulica",
      price: 180,
      date: "2025-06-30",
    },
    {
      id: "14",
      title: "Pagamento de fornecedor - internet",
      price: 120,
      date: "2025-07-30",
    },
  ]
}

export const mockOrders: { orders: OrderInterface[] } = {
  orders: [
    {
      id: "1",
      title: "Pedido de compra - Produto A",
      status: "Entregue",
      receivedAt: "2025-06-10",
    },
    {
      id: "2",
      title: "Nova correspondência do banco",
      status: "Nova correspondência",
      receivedAt: "2025-06-11",
    },
    {
      id: "3",
      title: "Encomenda - Produto B",
      status: "Aguardando retirada",
    },
    {
      id: "4",
      title: "Pedido de compra - Produto C",
      status: "Entregue",
      receivedAt: "2025-06-12",
    },
    {
      id: "5",
      title: "Nova correspondência - Fatura de cartão de crédito",
      status: "Nova correspondência",
      receivedAt: "2025-06-13",
    },
    {
      id: "6",
      title: "Encomenda - Produto D",
      status: "Aguardando retirada",
    },
    {
      id: "7",
      title: "Pedido de compra - Produto E",
      status: "Entregue",
      receivedAt: "2025-06-14",
    },
    {
      id: "8",
      title: "Nova correspondência - Aviso de cobrança",
      status: "Nova correspondência",
      receivedAt: "2025-06-15",
    },
    {
      id: "9",
      title: "Encomenda - Produto F",
      status: "Aguardando retirada",
    },
    {
      id: "10",
      title: "Pedido de compra - Produto G",
      status: "Entregue",
      receivedAt: "2025-06-16",
    },
    {
      id: "11",
      title: "Nova correspondência - Notificação de serviço",
      status: "Nova correspondência",
      receivedAt: "2025-06-17",
    },
    {
      id: "12",
      title: "Encomenda - Produto H",
      status: "Aguardando retirada",
    },
  ]
}