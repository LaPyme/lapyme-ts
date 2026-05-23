# GetCustomerByIdResponseBody

Cliente obtenido exitosamente

## Example Usage

```typescript
import { GetCustomerByIdResponseBody } from "lapyme/models/operations";

let value: GetCustomerByIdResponseBody = {
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
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 | Example                                     |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `success`                                   | *boolean*                                   | :heavy_check_mark:                          | N/A                                         | true                                        |
| `data`                                      | [models.Customer](../../models/customer.md) | :heavy_check_mark:                          | N/A                                         |                                             |