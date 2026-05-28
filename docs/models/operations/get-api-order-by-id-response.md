# GetApiOrderByIdResponse

## Example Usage

```typescript
import { GetApiOrderByIdResponse } from "lapyme/models/operations";

let value: GetApiOrderByIdResponse = {
  headers: {},
  result: {
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
          id: "f6908528-73ce-4abd-91b3-5d7ead30af7c",
          preparedAt: new Date("2026-02-02T18:45:16.857Z"),
          warehouseName: "<value>",
          deliveryMethod: "shipping",
          remitoDeliveryId: "72455419-7189-4a74-9508-9ddd55756ff2",
          formattedRemitoNumber: "<value>",
          lines: [],
        },
      ],
      invoices: [
        {
          object: "order_invoice",
          id: "9d9a409e-ff52-4288-a076-441e3aca3969",
          formattedInvoiceNumber: "<value>",
          invoiceDate: "<value>",
          createdAt: new Date("2024-04-12T16:54:27.438Z"),
          invoiceStatus: "pending",
          itemsCount: 707786,
          totalUnits: 996321,
          total: 837254,
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `headers`                                                                  | Record<string, *string*[]>                                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `result`                                                                   | [models.ApiOrderDetailResponse](../../models/api-order-detail-response.md) | :heavy_check_mark:                                                         | N/A                                                                        |