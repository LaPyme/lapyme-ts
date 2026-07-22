# ApiSharedObject92f376ac7c

## Example Usage

```typescript
import { ApiSharedObject92f376ac7c } from "lapyme/models";

let value: ApiSharedObject92f376ac7c = {
  object: "purchase_order",
  id: "6cbed9ab-dc24-4a67-a251-843b91550e62",
  orderNumber: 771161,
  formattedOrderNumber: null,
  status: "sent",
  orderDate: new Date("2024-08-04"),
  expectedDate: new Date("2026-10-13"),
  currency: "New Leu",
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
    paymentTermDays: 198666,
    address: null,
    apartment: "<value>",
    city: "Port Werner",
    province: "<value>",
    postalCode: "65289",
  },
  warehouse: {
    id: "cb58faea-196f-4cef-8904-b7b7e4f63e46",
    name: "<value>",
  },
  createdAt: new Date("2026-02-22T21:24:05.449Z"),
  warehouseId: "dd7f9c10-69a8-49ab-87c6-b2e997a772e0",
  notes: "<value>",
  items: [
    {
      id: "d8043432-f71d-4fa4-a003-b0b2207e252c",
      orderedQuantity: 2660.34,
      receivedQuantity: 3453.08,
      expectedUnitCost: 429535,
      product: {
        id: "577bd322-476c-4496-99b7-68ba81e5a8b0",
        name: "<value>",
        sku: "<value>",
        productType: "combo",
        variantOptions: {
          "key": "<value>",
          "key1": "<value>",
        },
        optionNames: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
      },
    },
  ],
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
| `supplier`                                                                                    | [models.ApiSharedObjectaa12edb924](../models/api-shared-objectaa12edb924.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `warehouse`                                                                                   | [models.ApiSharedObject8aeeceaf0f](../models/api-shared-object8aeeceaf0f.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `warehouseId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `notes`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `items`                                                                                       | [models.ApiSharedObject6e43ba6466](../models/api-shared-object6e43ba6466.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |