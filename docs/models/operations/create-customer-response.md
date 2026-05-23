# CreateCustomerResponse

## Example Usage

```typescript
import { CreateCustomerResponse } from "lapyme/models/operations";

let value: CreateCustomerResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
    success: true,
    data: {
      id: "48e345a8-ae94-44ca-9de4-bb91b18ba246",
      name: "<value>",
      email: "Shanie.Reynolds@gmail.com",
      phone: "(380) 490-4054 x82606",
      taxId: "<id>",
      taxIdType: "<value>",
      taxCategory: null,
      address: "17994 4th Street",
      apartment: "<value>",
      city: "Mabellehaven",
      province: "<value>",
      isActive: false,
      createdAt: new Date("2026-02-21T12:45:37.663Z"),
      updatedAt: new Date("2026-09-17T03:52:35.794Z"),
    },
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `headers`                                                                 | Record<string, *string*[]>                                                | :heavy_check_mark:                                                        | N/A                                                                       |
| `result`                                                                  | [models.CreateCustomerResponse](../../models/create-customer-response.md) | :heavy_check_mark:                                                        | N/A                                                                       |