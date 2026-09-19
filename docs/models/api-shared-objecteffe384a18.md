# ApiSharedObjecteffe384a18

## Example Usage

```typescript
import { ApiSharedObjecteffe384a18 } from "lapyme/models";

let value: ApiSharedObjecteffe384a18 = {
  object: "purchase_order",
  id: "eda8f551-1864-45a9-bf7f-7aa972882b30",
  orderNumber: 138420,
  formattedOrderNumber: "<value>",
  status: "closed",
  orderDate: new Date("2026-11-18"),
  expectedDate: new Date("2026-05-04"),
  currency: "US Dollar",
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
  createdAt: new Date("2024-04-17T08:41:32.861Z"),
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
  warehouseId: "de1e0c0b-849f-4a7f-a34a-074fdefb25e6",
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
| `supplier`                                                                                    | [models.ApiSharedObjectfaafd59b8b](../models/api-shared-objectfaafd59b8b.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `warehouse`                                                                                   | [models.ApiSharedObject8aeeceaf0f](../models/api-shared-object8aeeceaf0f.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `tags`                                                                                        | [models.ApiSharedObjected3905a55b](../models/api-shared-objected3905a55b.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `warehouseId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `notes`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `items`                                                                                       | [models.ApiSharedObjecta50ed243b8](../models/api-shared-objecta50ed243b8.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |