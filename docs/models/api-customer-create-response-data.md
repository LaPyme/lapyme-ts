# ApiCustomerCreateResponseData

## Example Usage

```typescript
import { ApiCustomerCreateResponseData } from "lapyme/models";

let value: ApiCustomerCreateResponseData = {
  customer: {
    object: "customer",
    id: "124021ad-e99e-4955-978d-e71868e4365e",
    name: "<value>",
    companyName: null,
    description: "whether bump rally imaginary",
    email: null,
    phone: "(266) 691-9840 x965",
    address: "26418 Stephania Crest",
    apartment: "<value>",
    city: null,
    deliveryCarrier: "<value>",
    deliveryAddress: "<value>",
    taxId: "<id>",
    taxIdType: "<value>",
    taxCategory: "<value>",
    contactType: "<value>",
    defaultPriceListId: "f44204a2-a930-46df-aa2c-d2629d9cf9ec",
    paymentTermId: "<id>",
    provinceId: null,
    isActive: true,
    createdAt: new Date("2024-10-18T01:18:23.919Z"),
    updatedAt: new Date("2026-06-05T18:23:40.404Z"),
    country: "Western Sahara",
    postalCode: "95204",
    assignedSalespersonId: "434f2f5f-7e81-43a2-8a45-70acbad72b01",
    defaultGananciasRegimen: "<value>",
    assignedSalesperson: {
      id: "cfb6535c-1fd4-4987-bd78-20878768de14",
      fullName: null,
    },
    defaultPriceList: {
      id: "c8983137-b92c-4076-a15c-862c45dc1c88",
      name: "<value>",
    },
    salesOverview: {
      pendingBalance: 4940.24,
      salesCount: 1600,
      totalSales: 6333.61,
      recentSales: [
        {
          id: "c3b90345-f3e8-4d5b-bea0-ebf7f5291157",
          voucherType: "<value>",
          invoiceStatus: "<value>",
          invoiceDate: "<value>",
          currency: "Malaysian Ringgit",
          total: 4090.17,
          formattedInvoiceNumber: "<value>",
          originalSaleId: null,
          createdAt: new Date("2025-04-09T18:14:55.376Z"),
        },
      ],
    },
  },
  idempotentReplay: true,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `customer`                                                                   | [models.ApiSharedObject9f00666c1c](../models/api-shared-object9f00666c1c.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `idempotentReplay`                                                           | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |