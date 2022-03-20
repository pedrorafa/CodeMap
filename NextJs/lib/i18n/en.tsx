export const messages = {
  behavioral: {
    observer: {
      Client: {},
      Partner: {
        prefix: "Dear Partner",
      },
    },
    state: {
      waitingPayment: {
        init: "Waiting Payment",
        error: "Order not payed, please pay the order for send",
      },
      cancel: {
        init: "Canceled",
        error: "Order already canceled",
      },
      payed: {
        init: "Payed",
        error: "Order already payed",
      },
      sent: {
        init: "Order sended",
        error: "Order already sended",
      },
    },
  },
  creational: {},
  structural: {},
};
