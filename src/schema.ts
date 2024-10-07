import { z } from 'zod';

export const AddressSchema = z.object({
  line1: z.string()
    .min(2, 'Line 1 is required'),
  line2: z.string().optional(),
  city: z.string()
    .min(2, 'City is required'),
  region: z.string()
    .min(2, 'Region is required'),
  postalCode: z.string()
    .min(2, 'Postal code is required'),
  country: z.string()
    .min(2, 'Country is required')
});

export const CompanySchema = z.object({
  name: z.string()
    .min(2, 'Company name is required'),
  contact: z.string()
    .email({ message: 'Invalid email' }),
  type: z.enum(['Toys', 'Electronics']),
  address: AddressSchema.optional()
});

export type Address = z.infer<typeof AddressSchema>;

export type Company = z.infer<typeof CompanySchema>;