# ApiSharedObjectb6da6cd9e0

## Example Usage

```typescript
import { ApiSharedObjectb6da6cd9e0 } from "lapyme/models";

let value: ApiSharedObjectb6da6cd9e0 = {
  object: "purchase_order",
  id: "56a4c8f9-4033-449b-849f-45de34155b7d",
  orderNumber: 593901,
  formattedOrderNumber: "<value>",
  status: "draft",
  orderDate: new Date("2026-03-16"),
  expectedDate: new Date("2025-07-17"),
  currency: "Australian Dollar",
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
  createdAt: new Date("2025-12-16T07:41:19.425Z"),
  tags: [
    {
      object: "tag",
      id: "9b4c6439-384c-4a58-9cf3-b39718b07048",
      scope: "customer",
      name: "<value>",
      slug: "<value>",
      color: "indigo",
      description:
        "vacantly unless nautical alongside around optimistic for lasting sometimes",
      archivedAt: new Date("2024-05-13T14:06:09.243Z"),
      createdAt: new Date("2026-03-04T18:15:09.469Z"),
      updatedAt: new Date("2026-05-06T00:20:31.712Z"),
    },
  ],
  warehouseId: "f89ae928-607b-4fcc-8060-92d99670affe",
  notes: null,
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
| `supplier`                                                                                    | [models.ApiSharedObjectfaafd59b8b](../models/api-shared-objectfaafd59b8b.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `warehouse`                                                                                   | [models.ApiSharedObject8aeeceaf0f](../models/api-shared-object8aeeceaf0f.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `tags`                                                                                        | [models.ApiSharedObjected3905a55b](../models/api-shared-objected3905a55b.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `warehouseId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `notes`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `items`                                                                                       | [models.ApiSharedObject488e0ea942](../models/api-shared-object488e0ea942.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |