# ApiSharedObject5f7a7d7ad7

## Example Usage

```typescript
import { ApiSharedObject5f7a7d7ad7 } from "lapyme/models";

let value: ApiSharedObject5f7a7d7ad7 = {
  object: "purchase_order",
  id: "c0dfe2e6-bbef-4995-bd05-b330595cc254",
  orderNumber: 781866,
  formattedOrderNumber: "<value>",
  status: "received",
  orderDate: new Date("2024-02-10"),
  expectedDate: new Date("2026-10-29"),
  currency: "Bahamian Dollar",
  supplier: {
    id: "a45a7fd5-160a-41a7-baa2-5367b011b0b2",
    name: "<value>",
    description:
      "cod stable snow our famously switchboard as from likewise stiff",
    email: null,
    phone: "802.394.0907",
    taxIdType: "<value>",
    taxId: "<id>",
    taxCategory: null,
    paymentTermDays: 187571,
    address: "47379 Keeling Courts",
    apartment: "<value>",
    city: "Port Vincenza",
    province: null,
    postalCode: "78887",
  },
  warehouse: {
    id: "fa73eef2-2e9d-414f-a84d-18f683cead94",
    name: "<value>",
  },
  createdAt: new Date("2025-11-07T04:18:00.464Z"),
  tags: [],
  warehouseId: "ff5f6145-7b78-44cf-8e44-41a529750de9",
  notes: "<value>",
  items: [],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `object`                                                                                      | *"purchase_order"*                                                                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `orderNumber`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `formattedOrderNumber`                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [models.ApiSharedEnumf2073aa092](../models/api-shared-enumf2073aa092.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `orderDate`                                                                                   | [Date](../types/rfcdate.md)                                                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `expectedDate`                                                                                | [Date](../types/rfcdate.md)                                                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `currency`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `supplier`                                                                                    | [models.ApiSharedObjectf914164780](../models/api-shared-objectf914164780.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `warehouse`                                                                                   | [models.ApiSharedObject8aeeceaf0f](../models/api-shared-object8aeeceaf0f.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `tags`                                                                                        | [models.ApiSharedObjected3905a55b](../models/api-shared-objected3905a55b.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `warehouseId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `notes`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `items`                                                                                       | [models.ApiSharedObject8bb5f122e6](../models/api-shared-object8bb5f122e6.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |