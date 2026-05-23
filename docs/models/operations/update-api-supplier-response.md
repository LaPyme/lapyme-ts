# UpdateApiSupplierResponse

## Example Usage

```typescript
import { UpdateApiSupplierResponse } from "lapyme/models/operations";

let value: UpdateApiSupplierResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
    requestId: "<id>",
    data: {
      supplier: {
        object: "supplier",
        id: "598684ef-7199-4331-9bc8-08614bcd189b",
        name: "<value>",
        companyName: "Yost - Prosacco",
        description: null,
        email: null,
        phone: "1-259-825-2158",
        taxId: "<id>",
        taxIdType: "<value>",
        taxCategory: "<value>",
        paymentTermId: "<id>",
        isActive: false,
        country: "Cameroon",
        provinceId: "<id>",
        city: "New Maurice",
        address: "829 Ernser Street",
        apartment: "<value>",
        postalCode: "34318",
        createdAt: new Date("2024-09-21T13:42:49.548Z"),
        updatedAt: new Date("2024-09-06T05:50:24.199Z"),
      },
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
| `result`                                                                         | [models.ApiSupplierUpdateResponse](../../models/api-supplier-update-response.md) | :heavy_check_mark:                                                               | N/A                                                                              |