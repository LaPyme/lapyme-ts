# GetCustomerByIdResponse

## Example Usage

```typescript
import { GetCustomerByIdResponse } from "lapyme/models/operations";

let value: GetCustomerByIdResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
    ],
  },
  result: {
    success: true,
    data: {
      id: "b90f98ac-4eca-4c8d-a325-2830a29189fb",
      name: "<value>",
      email: "Tanya.Howell35@gmail.com",
      phone: "(532) 694-5346",
      taxId: "<id>",
      taxIdType: "<value>",
      taxCategory: "<value>",
      address: "8286 Orchard Drive",
      apartment: "<value>",
      city: "Sandy",
      province: "<value>",
      isActive: false,
      createdAt: new Date("2024-06-08T14:29:46.293Z"),
      updatedAt: new Date("2024-01-13T14:07:38.409Z"),
    },
  },
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `headers`                                                                                             | Record<string, *string*[]>                                                                            | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `result`                                                                                              | [operations.GetCustomerByIdResponseBody](../../models/operations/get-customer-by-id-response-body.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |