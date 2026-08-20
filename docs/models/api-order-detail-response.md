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
    totalUnits: 574102,
    discountAmount: 287318,
    subtotal: 827815,
    taxAmount: 910296,
    total: 983409,
    currency: "PES",
    orderStatus: "open",
    preparationStatus: "cancelled",
    invoicingStatus: "invoiced",
    notes: "<value>",
    createdAt: new Date("2024-12-29T05:45:52.637Z"),
    createdByName: "<value>",
    createdBy: "02e4277b-8ccb-4bfb-965f-978eda866a6a",
    lineItems: [],
    activeWarehouses: [
      {
        id: "34e909ec-68c3-4541-acb5-119ac04243bc",
        name: "<value>",
        isDefault: true,
      },
    ],
    pendingPreparationWarehouseId: "9a3998fe-a4a0-4b44-a943-36fea01a3326",
    preparations: [
      {
        object: "order_preparation",
        id: "0161b458-7546-48e0-96ce-e8a835d0be4c",
        preparedAt: new Date("2024-01-15T02:32:38.591Z"),
        warehouseName: "<value>",
        deliveryMethod: "pickup",
        remitoDeliveryId: null,
        formattedRemitoNumber: "<value>",
        lines: [],
      },
    ],
    invoices: [
      {
        object: "order_invoice",
        id: "3dcbe402-2ec3-4be3-a6ec-45ecdf840e6f",
        formattedInvoiceNumber: "<value>",
        invoiceDate: "<value>",
        createdAt: new Date("2025-05-02T05:51:43.538Z"),
        invoiceStatus: "not_required",
        itemsCount: 643251,
        totalUnits: 743986,
        total: 755678,
      },
    ],
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `requestId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `data`                                                                       | [models.ApiSharedObjecte94730814a](../models/api-shared-objecte94730814a.md) | :heavy_check_mark:                                                           | N/A                                                                          |