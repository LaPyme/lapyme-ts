# ApiOrderWriteResponse

## Example Usage

```typescript
import { ApiOrderWriteResponse } from "lapyme/models";

let value: ApiOrderWriteResponse = {
  requestId: "<id>",
  data: {
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
      currency: "DOL",
      orderStatus: "completed",
      preparationStatus: "partially_fulfilled",
      invoicingStatus: "pending",
      notes: "<value>",
      createdAt: new Date("2025-05-04T07:38:52.370Z"),
      createdByName: "<value>",
      createdBy: "49aa9f03-7159-4d99-b208-919aafd6665c",
      lineItems: [],
      activeWarehouses: [],
      pendingPreparationWarehouseId: "f701d204-c699-4362-88cf-63c56a0607fc",
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
  },
  warnings: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `requestId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `data`                                                                         | [models.ApiOrderWriteResponseData](../models/api-order-write-response-data.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `warnings`                                                                     | *any*[]                                                                        | :heavy_check_mark:                                                             | N/A                                                                            |