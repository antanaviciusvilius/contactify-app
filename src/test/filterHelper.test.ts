import { filterHelper } from '../helpers/filterHelper';
import { Contact } from '../types/Contact';
import { FiltersType } from '../types/FiltersType';

describe('filterHelper', () => {
  const contacts: Contact[] = [
    { city: 'Vilnius', isActive: true, surname: 'Doe', id: '1', email: 'johndoe2@example.com', phone: '1234567890', name: 'John' },
    { city: 'Kaunas', isActive: false, surname: 'Smith', id: '2', email: 'janesmith@example.com', phone: '0987654321', name: 'Jane' },
    { city: 'Vilnius', isActive: true, surname: 'Doe', id: '1', email: 'johndoe2@example.com', phone: '1234567890', name: 'John' },
  ];

  const filters: FiltersType = { name: 'John', city: 'Vilnius', activity: true };

  const result = filterHelper(contacts, filters);

  it('returns correct number of contacts', () => {
    expect(result.length).toBe(2);
  });

  it('returns correct contact', () => {
    expect(result[0]).toEqual(contacts[0]);
  });

  it('returns all contacts when filters are undefined', () => {
    const resultAll = filterHelper(contacts, undefined);
    expect(resultAll.length).toBe(3);
  });


  it('returns no contacts when filters do not match', () => {
    const filters: FiltersType = { name: 'John', city: 'Kaunas', activity: true };
    const result = filterHelper(contacts, filters);
    expect(result.length).toBe(0);
  });

  it('returns correct contacts when multiple contacts match', () => {
    const filters: FiltersType = { name: 'John', city: 'Vilnius', activity: false };
    const result = filterHelper(contacts, filters);
    expect(result.length).toBe(2);
    expect(result[0]).toEqual(contacts[2]);
  });

  it('returns correct contacts when only activity filter is defined', () => {
    const filters: FiltersType = { name: undefined, city: undefined, activity: true };
    const result = filterHelper(contacts, filters);
    expect(result.length).toBe(2);
    expect(result[0]).toEqual(contacts[0]);
  });
});
