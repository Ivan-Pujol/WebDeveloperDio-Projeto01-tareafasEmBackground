import Mail from '../lib/Mail';

export default {
  key: 'RegristrationMail',
  options: {
    delay: 5000,
    priority: 3
  },
  async handle({ data }) {
    const { user } = data;

    await Mail.sendMail({
      from: 'ProjetoDio <projeto01@dio.com.br>',
      to: `${user.name} <${user.email}>`,
      subject: 'Sign Up Process',
      html: `Hi, ${user.name}. Welcome to DIO Project 01 of background tasks.`
    });
  }
}