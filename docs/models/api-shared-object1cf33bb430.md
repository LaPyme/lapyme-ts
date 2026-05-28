# ApiSharedObject1cf33bb430

## Example Usage

```typescript
import { ApiSharedObject1cf33bb430 } from "lapyme/models";

let value: ApiSharedObject1cf33bb430 = {
  object: "order",
  id: "c7921fc4-d776-4c7b-8302-a7ff5aceee07",
  orderNumber: "<value>",
  rawOrderNumber: 494542,
  orderDate: new Date("2024-02-06T01:08:06.873Z"),
  customerId: "8179bab2-2c4a-4715-ba7b-b06abbeb87c6",
  customerName: "<value>",
  customerTaxId: "<id>",
  itemsCount: 799060,
  totalUnits: 89076,
  discountAmount: 35736,
  subtotal: 652733,
  taxAmount: 831207,
  total: 223252,
  currency: "DOL",
  orderStatus: "completed",
  preparationStatus: "in_progress",
  invoicingStatus: "pending",
  notes: "<value>",
  createdAt: new Date("2024-06-18T13:53:56.301Z"),
  createdByName: "<value>",
  createdBy: "1627e7de-e77f-4722-af2e-2ed566ac8de6",
  lineItems: [],
  activeWarehouses: [
    {
      id: "34e909ec-68c3-4541-acb5-119ac04243bc",
      name: "<value>",
      isDefault: true,
    },
  ],
  pendingPreparationWarehouseId: "a2b6ba55-6d8f-424e-a5c8-3a24fbde9d9a",
  preparations: [],
  invoices: [],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `object`                                                                                      | *"order"*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `orderNumber`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `rawOrderNumber`                                                                              | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `orderDate`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `customerId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `customerName`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `customerTaxId`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `itemsCount`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `totalUnits`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `discountAmount`                                                                              | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subtotal`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `taxAmount`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `total`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `currency`                                                                                    | [models.ApiSharedEnum6cfb146157](../models/api-shared-enum6cfb146157.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `orderStatus`                                                                                 | [models.ApiSharedEnum4ac9200c4a](../models/api-shared-enum4ac9200c4a.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `preparationStatus`                                                                           | [models.ApiSharedEnumb49e56b125](../models/api-shared-enumb49e56b125.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `invoicingStatus`                                                                             | [models.ApiSharedEnum2f67ddf0e8](../models/api-shared-enum2f67ddf0e8.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `notes`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdByName`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdBy`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lineItems`                                                                                   | [models.ApiSharedObject57439fd94e](../models/api-shared-object57439fd94e.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `activeWarehouses`                                                                            | [models.ApiSharedObject6e2450633e](../models/api-shared-object6e2450633e.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `pendingPreparationWarehouseId`                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `preparations`                                                                                | [models.ApiSharedObjectc7aa334b79](../models/api-shared-objectc7aa334b79.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `invoices`                                                                                    | [models.ApiSharedObject4fb237ae51](../models/api-shared-object4fb237ae51.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |