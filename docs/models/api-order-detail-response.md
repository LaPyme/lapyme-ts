# ApiOrderDetailResponse

## Example Usage

```typescript
import { ApiOrderDetailResponse } from "lapyme/models";

let value: ApiOrderDetailResponse = {
  requestId: "<id>",
  data: {
    object: "order",
    id: "ecd88c10-d2c7-4079-ad43-8055af3ce45a",
    orderNumber: "<value>",
    rawOrderNumber: 333031,
    orderDate: new Date("2025-05-01T14:34:50.791Z"),
    customerId: "875a9a00-14f6-43b6-9ea5-a87a7cbd1b40",
    customerName: "<value>",
    customerTaxId: null,
    itemsCount: 100441,
    totalUnits: 5741.02,
    discountAmount: 287318,
    discountPercentage: 9102.96,
    subtotal: 983409,
    taxAmount: 308884,
    total: 110789,
    currency: "USD",
    orderStatus: "cancelled",
    preparationStatus: "partially_fulfilled",
    invoicingStatus: "pending",
    notes: null,
    createdAt: new Date("2024-06-07T04:41:11.851Z"),
    updatedAt: new Date("2026-09-11T06:20:37.450Z"),
    createdByName: "<value>",
    createdBy: "4277b8cc-bbfb-465f-8978-eda866a6a67e",
    voucherType: 90,
    lineItems: [],
    activeWarehouses: [
      {
        id: "06cee8a8-35d0-4be4-8c60-c143f3dcbe40",
        name: "<value>",
        isDefault: true,
      },
    ],
    pendingPreparationWarehouseId: "09ec68c3-541c-4b51-a19a-c04243bc83e9",
    preparationGroups: [],
    preparations: [
      {
        object: "order_preparation",
        id: "98fea4a0-b449-4433-a6fe-a01a3326b9f6",
        preparedAt: new Date("2024-01-11T22:25:17.504Z"),
        warehouseName: "<value>",
        deliveryMethod: "local_delivery",
        remitoDeliveryId: "2873ceab-d1b3-45d7-9ead-30af7c4b0f72",
        formattedRemitoNumber: "<value>",
        lines: [],
      },
    ],
    invoices: [],
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `requestId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `data`                                                                       | [models.ApiSharedObject5005d037aa](../models/api-shared-object5005d037aa.md) | :heavy_check_mark:                                                           | N/A                                                                          |