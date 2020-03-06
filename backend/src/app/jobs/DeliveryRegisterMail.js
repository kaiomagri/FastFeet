import Mail from '../../lib/Mail';

class DeliveryRegisterMail {
  get key() {
    return 'DeliveryRegisterMail';
  }

  async handle({ data }) {
    const { deliveryman, recipient, product } = data;

    await Mail.sendMail({
      to: `${deliveryman.name} <${deliveryman.email}>`,
      subject: 'Ordem de Entrega criada para você!',
      template: 'delivery',
      context: {
        deliveryman: {
          name: deliveryman.name,
        },
        recipient: {
          name: recipient.name,
          street: recipient.street,
          number: recipient.number,
          complement: recipient.complement,
          state: recipient.state,
          city: recipient.city,
          zip: recipient.zip,
        },
        product,
      },
    });
  }
}

export default new DeliveryRegisterMail();
