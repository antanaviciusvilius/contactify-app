import formatContactName from '../helpers/formatContactName';

describe('filterHelper', () => {
  it('formats contact name correctly', () => {
    const contact = {
      city: 'Vilnius',
      isActive: true,
      surname: 'Doe',
      id: '1',
      email: 'johndoe@example.com',
      phone: '1234567890',
      name: 'John',
    };

    const result = formatContactName(contact);
    expect(result).toBe('John D.');
  });

  it('handles empty surname', () => {
    const contact = {
      city: 'Vilnius',
      isActive: true,
      surname: '',
      id: '2',
      email: 'janedoe@example.com',
      phone: '0987654321',
      name: 'Jane',
    };

    const result = formatContactName(contact);
    expect(result).toBe('Jane ');
  });
});
