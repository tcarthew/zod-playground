import { CompanySchema } from './schema';

const validCompany = {
  name: 'Toy Company',
  contact: 'test@test.com',
  type: 'Toys',
  address: {
    line1: 'Line One',
    city: 'City',
    region: 'Region',
    country: 'Country',
    postalCode: '12345'
  }
}

const validCompanyNoAddress = {
  name: 'Electronics Company',
  type: 'Electronics',
  contact: 'test@test.com',
  address: undefined
}

const invalidCompany = {
  name: undefined,
  type: 'Invalid',
  contact: 'test',
  address: {
    line1: ''
  }
}

const parsedValidCompany = CompanySchema.safeParse(validCompany);

if (parsedValidCompany.success) {
  console.log('Valid company: ', parsedValidCompany.data);
  console.log('---\n');
}

const parsedValidCompanyNoAddress = CompanySchema.safeParse(validCompanyNoAddress);

if (parsedValidCompanyNoAddress.success) {
  console.log('Valid company (No Address): ', parsedValidCompanyNoAddress.data);
  console.log('---\n');
}

const parsedInvalidCompany = CompanySchema.safeParse(invalidCompany);

if (!parsedInvalidCompany.success) {
  console.log('Invalid company:');
  console.log('Errors: ', parsedInvalidCompany.error.issues);
  console.log('---\n');
}