# GetApiCustomerByIdResponse

## Example Usage

```typescript
import { GetApiCustomerByIdResponse } from "lapyme/models/operations";

let value: GetApiCustomerByIdResponse = {
  headers: {},
  result: {
    requestId: "<id>",
    data: {
      object: "customer",
      id: "85a88c06-fbe6-4640-9ea2-feabe949abcd",
      name: "<value>",
      companyName: null,
      description: null,
      email: "Holly.Jast@gmail.com",
      phone: "722.317.2868 x702",
      address: null,
      apartment: "<value>",
      city: "Russelfort",
      deliveryCarrier: "<value>",
      deliveryAddress: "<value>",
      taxId: "<id>",
      taxIdType: "<value>",
      taxCategory: "<value>",
      contactType: "<value>",
      defaultPriceListId: "5d8f5f99-75f9-4d4b-b559-f89bf3a605d8",
      paymentTermId: "<id>",
      provinceId: "<id>",
      isActive: true,
      createdAt: new Date("2026-06-15T05:41:05.729Z"),
      updatedAt: new Date("2024-12-19T23:43:33.485Z"),
      country: "Anguilla",
      postalCode: "45342",
      assignedSalespersonId: "4130bc71-1a30-4193-bccf-06dda228184f",
      defaultGananciasRegimen: "<value>",
      assignedSalesperson: {
        id: "cfb6535c-1fd4-4987-bd78-20878768de14",
        fullName: null,
      },
      defaultPriceList: null,
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
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `headers`                                                                        | Record<string, *string*[]>                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `result`                                                                         | [models.ApiCustomerDetailResponse](../../models/api-customer-detail-response.md) | :heavy_check_mark:                                                               | N/A                                                                              |