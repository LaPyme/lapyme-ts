# ApiSharedObjecta6cd4a0a4e

## Example Usage

```typescript
import { ApiSharedObjecta6cd4a0a4e } from "lapyme/models";

let value: ApiSharedObjecta6cd4a0a4e = {
  object: "purchase_order",
  id: "69ee1a3b-552d-4bfb-89b7-055ba594ff92",
  orderNumber: 197755,
  formattedOrderNumber: "<value>",
  status: "draft",
  orderDate: new Date("2024-06-21"),
  expectedDate: new Date("2025-07-01"),
  currency: "Iceland Krona",
  supplier: {
    id: "ebacdb2a-1c5e-4eee-a30f-5983b0f8c084",
    name: "<value>",
    description:
      "fairly which pro upliftingly but super whereas guacamole between",
    email: "Monserrat_Kovacek@yahoo.com",
    phone: "1-498-218-0382 x3346",
    taxIdType: "<value>",
    taxId: "<id>",
    taxCategory: "<value>",
    paymentTermId: "<id>",
    address: "298 Goldner Views",
    apartment: "<value>",
    city: "South Marcelinofurt",
    province: "<value>",
    postalCode: "46341",
  },
  warehouse: {
    id: "1d81895d-9d7f-44ea-9636-e0e6181dee4f",
    name: "<value>",
  },
  createdAt: new Date("2026-09-18T06:23:35.924Z"),
  warehouseId: "b4566fb1-0d87-4fcf-994b-5e4953cd3ac7",
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
| `supplier`                                                                                    | [models.ApiSharedObject657d1b3cb7](../models/api-shared-object657d1b3cb7.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `warehouse`                                                                                   | [models.ApiSharedObject8aeeceaf0f](../models/api-shared-object8aeeceaf0f.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `warehouseId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `notes`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `items`                                                                                       | [models.ApiSharedObject6e43ba6466](../models/api-shared-object6e43ba6466.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |