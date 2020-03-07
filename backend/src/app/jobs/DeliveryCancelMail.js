import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class DeliveryCancelMail {
  get key() {
    return 'DeliveryCancelMail';
  }

  async handle({ data }) {
    const { name, email, id, cancel_date } = data;

    await Mail.sendMail({
      to: `${name} <${email}>`,
      subject: 'Ordem de Entrega cancelada!',
      template: 'delivery-cancel',
      context: {
        name,
        id,
        cancel_date: format(
          parseISO(cancel_date),
          "dd 'de' MMMM', às' H:mm'h'",
          {
            locale: pt,
          }
        ),
      },
    });
  }
}

export default new DeliveryCancelMail();
