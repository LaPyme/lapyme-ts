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
    id: "a45a7fd5-160a-41a7-baa2-5367b011b0b2",
    name: "<value>",
    description:
      "cod stable snow our famously switchboard as from likewise stiff",
    email: null,
    phone: "802.394.0907",
    taxIdType: "<value>",
    taxId: "<id>",
    taxCategory: null,
    paymentTermId: "<id>",
    address: "14737 N 7th Street",
    apartment: "<value>",
    city: "Legrosburgh",
    province: "<value>",
    postalCode: "80788",
  },
  warehouse: {
    id: "f63e462e-a330-46ca-bae9-348e3a53a6da",
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