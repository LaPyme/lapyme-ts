# ApiSharedObjecte1856a1a85

## Example Usage

```typescript
import { ApiSharedObjecte1856a1a85 } from "lapyme/models";

let value: ApiSharedObjecte1856a1a85 = {
  object: "purchase_order",
  id: "8a926d1c-ca95-466e-a1db-95df7ccccd8f",
  orderNumber: 95409,
  formattedOrderNumber: "<value>",
  status: "sent",
  orderDate: new Date("2024-12-27"),
  expectedDate: null,
  currency: "Denar",
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
    id: "0978f48b-ba46-4ec8-b56c-32d7bd1637ff",
    name: "<value>",
  },
  createdAt: new Date("2024-09-21T20:30:48.037Z"),
  tags: [
    {
      object: "tag",
      id: "fd0e6eb6-e290-4396-ab35-a8ca83534491",
      scope: "customer",
      name: "<value>",
      slug: "<value>",
      color: "blue",
      description:
        "striking angrily oily brightly commandeer justly where unto",
      archivedAt: new Date("2024-07-02T07:10:54.132Z"),
      createdAt: new Date("2025-08-08T00:49:49.551Z"),
      updatedAt: new Date("2026-07-18T06:36:50.529Z"),
    },
  ],
  warehouseId: "d1bf68d5-5df5-465d-bc0e-a27d9a029ce6",
  notes: "<value>",
  items: [
    {
      id: "b4c16814-e2a0-4e9d-bc52-f10a367aa686",
      orderedQuantity: 7716.56,
      receivedQuantity: 5172.21,
      expectedUnitCost: 943658,
      product: {
        id: "6c2da590-f059-4c84-8fb3-66f78187f1b7",
        name: "<value>",
        sku: "<value>",
        supplierSku: "<value>",
        productType: "service",
        variantOptions: {
          "key": "<value>",
          "key1": "<value>",
        },
        optionNames: [
          "<value 1>",
          "<value 2>",
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
| `items`                                                                                       | [models.ApiSharedObject8bb5f122e6](../models/api-shared-object8bb5f122e6.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |