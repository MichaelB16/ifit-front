import { iMenu } from 'src/shared/model/menu.type';

export const useMenu = (): iMenu[] => {
 return personal;
};


const personal : iMenu[] = [
  {
    label: 'Dashboard',
    icon: 'mdi-finance',
    to: '/personal/dashboard',
  },
  {
    label: 'Alunos',
    icon: 'mdi-account-outline',
    to: '/personal/students',
  },
  {
    label: 'Agenda',
    icon: 'mdi-calendar-outline',
    to: '/personal/calendar',
  },
  {
    label: 'Mensagens',
    icon: 'mdi-message-outline',
    to: '/personal/message',
  }
];
