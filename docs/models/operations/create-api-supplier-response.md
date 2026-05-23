# CreateApiSupplierResponse

## Example Usage

```typescript
import { CreateApiSupplierResponse } from "lapyme/models/operations";

let value: CreateApiSupplierResponse = {
  headers: {},
  result: {
    requestId: "<id>",
    data: {
      supplier: {
        object: "supplier",
        id: "fea26d0a-4f2c-43ec-b7c1-14fe91c39c0c",
        name: "<value>",
        companyName: "Wiegand, Nikolaus and Bradtke",
        description: "sightseeing statement waterspout square plumber ah ha",
        email: "Hans79@hotmail.com",
        phone: "(868) 929-4302",
        taxId: "<id>",
        taxIdType: "<value>",
        taxCategory: "<value>",
        paymentTermId: "<id>",
        isActive: true,
        country: "Gibraltar",
        provinceId: "<id>",
        city: "Fort Bernardton",
        address: "38500 E 3rd Street",
        apartment: "<value>",
        postalCode: "53435-1128",
        createdAt: new Date("2025-09-17T03:40:21.450Z"),
        updatedAt: new Date("2026-12-17T07:31:45.520Z"),
      },
      idempotentReplay: false,
    },
    warnings: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `headers`                                                                        | Record<string, *string*[]>                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `result`                                                                         | [models.ApiSupplierCreateResponse](../../models/api-supplier-create-response.md) | :heavy_check_mark:                                                               | N/A                                                                              |