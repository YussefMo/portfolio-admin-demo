type contactReq = {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
};

export const contactRequestArr: contactReq[] = [
  {
    id: 1,
    name: 'youssef',
    email: 'youssef@email.com',
    phoneNumber: '01000000001',
    message: 'i want to hire you'
  },
  {
    id: 2,
    name: 'maged',
    email: 'maged@email.com',
    phoneNumber: '01000000002',
    message: 'i like your job wanna collaborate'
  },
  {
    id: 3,
    name: 'ahmed',
    email: 'ahmed@email.com',
    phoneNumber: '01000000003',
    message: 'keep up the good work'
  },
  {
    id: 4,
    name: 'khalid',
    email: 'khalid@email.com',
    phoneNumber: '01000000004',
    message:
      'i want to make a web for a company and i like your way of making webs'
  }
];
