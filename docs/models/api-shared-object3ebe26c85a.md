# ApiSharedObject3ebe26c85a

## Example Usage

```typescript
import { ApiSharedObject3ebe26c85a } from "lapyme/models";

let value: ApiSharedObject3ebe26c85a = {
  object: "purchase_order",
  id: "dd827a78-a40b-4de3-8ccf-8d1f18f106d6",
  orderNumber: 411085,
  formattedOrderNumber: "<value>",
  status: "partially_received",
  orderDate: new Date("2026-09-13"),
  expectedDate: new Date("2026-08-02"),
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
    paymentTermId: "<id>",
    paymentTermDays: 198666,
    address: null,
    apartment: "<value>",
    city: "Port Werner",
    province: "<value>",
    postalCode: "65289",
  },
  warehouse: {
    id: "73701df9-cc25-4f39-89d3-0ecc1c8cf71d",
    name: "<value>",
  },
  createdAt: new Date("2025-09-16T23:05:59.990Z"),
  tags: [
    {
      object: "tag",
      id: "c4a0b478-b0e9-40aa-a06f-be28f0ddf586",
      scope: "purchase",
      name: "<value>",
      slug: "<value>",
      color: "teal",
      description: "norm youthful ugh drive victoriously",
      archivedAt: new Date("2026-10-03T04:47:37.645Z"),
      createdAt: new Date("2026-03-15T05:11:35.797Z"),
      updatedAt: new Date("2025-02-21T13:32:00.515Z"),
    },
  ],
  warehouseId: "5e3ebd02-717d-4d7a-bcb8-0a0d0cf7ca64",
  notes: "<value>",
  items: [
    {
      id: "eb4c1681-4e2a-40e9-9dc5-2f10a367aa68",
      orderedQuantity: 8275.54,
      receivedQuantity: 2939.45,
      expectedUnitCost: 517221,
      product: {
        id: "af6c2da5-90f0-459c-a84f-b366f78187f1",
        name: "<value>",
        sku: "<value>",
        productType: null,
        variantOptions: {
          "key": "<value>",
        },
        optionNames: [
          "<value 1>",
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
| `tags`                                                                                        | [models.ApiSharedObject8a94344083](../models/api-shared-object8a94344083.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `warehouseId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `notes`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `items`                                                                                       | [models.ApiSharedObjecte6c529b31e](../models/api-shared-objecte6c529b31e.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |