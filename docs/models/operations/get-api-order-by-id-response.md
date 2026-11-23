# GetApiOrderByIdResponse

## Example Usage

```typescript
import { GetApiOrderByIdResponse } from "lapyme/models/operations";

let value: GetApiOrderByIdResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
    ],
  },
  result: {
    requestId: "<id>",
    data: {
      object: "order",
      id: "ecd88c10-d2c7-4079-ad43-8055af3ce45a",
      orderNumber: "<value>",
      rawOrderNumber: 333031,
      externalOrderReference: "<value>",
      orderDate: new Date("2025-08-08T13:56:23.378Z"),
      customerId: "75a9a001-4f63-4b6e-8a5a-87a7cbd1b404",
      customerName: "<value>",
      customerTaxId: "<id>",
      itemsCount: 574102,
      totalUnits: 2873.18,
      discountAmount: 827815,
      discountPercentage: 9834.09,
      subtotal: 308884,
      taxAmount: 110789,
      total: 843677,
      currency: "USD",
      orderStatus: "completed",
      preparationStatus: "in_progress",
      invoicingStatus: "pending",
      notes: "<value>",
      createdAt: new Date("2026-09-11T06:20:37.450Z"),
      updatedAt: new Date("2024-10-05T20:11:14.963Z"),
      createdByName: "<value>",
      createdBy: "277b8ccb-bfb6-45f9-978e-da866a6a67e3",
      voucherType: 90,
      lineItems: [
        {
          id: "909ec68c-3541-4cb5-a119-ac04243bc83e",
          lineNumber: 631429,
          productId: "998fea4a-0b44-4943-936f-ea01a3326b9f",
          productName: "<value>",
          sku: "<value>",
          orderedQuantity: 6180.22,
          allocatedQuantity: 99.76,
          fulfilledQuantity: 5458.12,
          invoicedQuantity: 3313.62,
          cancelledQuantity: 1654.32,
          unitPrice: 509268,
          taxRateId: 498185,
          discountAmount: 809637,
          discountPercentage: 6381.08,
          subtotal: 729571,
        },
      ],
      activeWarehouses: [
        {
          id: "1b35d7ea-d30a-4f7c-a4b0-f72455419718",
          name: "<value>",
          isDefault: false,
        },
      ],
      pendingPreparationWarehouseId: "45089ddd-5575-46ff-9249-4d9d9a409eff",
      preparationGroups: [],
      preparations: [],
      invoices: [
        {
          object: "order_invoice",
          id: "d63abb65-cfc5-4532-a581-936d3c18d0a6",
          formattedInvoiceNumber: "<value>",
          invoiceDate: "<value>",
          createdAt: new Date("2024-02-07T21:30:39.482Z"),
          invoiceStatus: "issued",
          itemsCount: 961098,
          totalUnits: 3266.02,
          total: 93472,
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