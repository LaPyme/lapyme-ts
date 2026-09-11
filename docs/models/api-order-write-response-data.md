# ApiOrderWriteResponseData

## Example Usage

```typescript
import { ApiOrderWriteResponseData } from "lapyme/models";

let value: ApiOrderWriteResponseData = {
  order: {
    object: "order",
    id: "59658c39-c825-4e87-8eb5-c84b1313295f",
    orderNumber: "<value>",
    rawOrderNumber: 771118,
    orderDate: new Date("2024-11-27T02:27:40.414Z"),
    customerId: "13d149c5-ebe2-40dc-9c5d-07d40c750917",
    customerName: "<value>",
    customerTaxId: "<id>",
    itemsCount: 321882,
    totalUnits: 545610,
    discountAmount: 510678,
    subtotal: 8487,
    taxAmount: 930248,
    total: 719427,
    currency: "USD",
    orderStatus: "completed",
    preparationStatus: "partially_fulfilled",
    invoicingStatus: "pending",
    notes: "<value>",
    createdAt: new Date("2025-05-04T07:38:52.370Z"),
    updatedAt: new Date("2024-10-11T20:15:13.844Z"),
    createdByName: "<value>",
    createdBy: "9aa9f037-159d-4992-8089-19aafd6665cf",
    lineItems: [],
    activeWarehouses: [
      {
        id: "f701d204-c699-4362-88cf-63c56a0607fc",
        name: "<value>",
        isDefault: false,
      },
    ],
    pendingPreparationWarehouseId: null,
    preparationGroups: [],
    preparations: [],
    invoices: [],
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `order`                                                                      | [models.ApiSharedObject62f4594372](../models/api-shared-object62f4594372.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `idempotentReplay`                                                           | *boolean*                                                                    | :heavy_minus_sign:                                                           | N/A                                                                          |
| `result`                                                                     | *any*                                                                        | :heavy_minus_sign:                                                           | N/A                                                                          |