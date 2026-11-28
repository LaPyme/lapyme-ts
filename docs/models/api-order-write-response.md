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
      externalOrderReference: "<value>",
      orderDate: new Date("2024-04-21T06:07:22.953Z"),
      customerId: "3d149c5e-be20-4dcc-a5d0-7d40c7509174",
      customerName: "<value>",
      customerTaxId: "<id>",
      itemsCount: 545610,
      totalUnits: 5106.78,
      discountAmount: 8487,
      discountPercentage: 7194.27,
      subtotal: 779409,
      taxAmount: 368091,
      total: 459308,
      currency: "ARS",
      orderStatus: "open",
      preparationStatus: "partially_fulfilled",
      invoicingStatus: "pending",
      notes: "<value>",
      createdAt: new Date("2025-11-27T23:30:13.246Z"),
      updatedAt: new Date("2025-11-21T14:23:27.029Z"),
      createdByName: "<value>",
      createdBy: "9f037159-d992-4089-b19a-afd6665cf26e",
      voucherType: 90,
      lineItems: [],
      activeWarehouses: [],
      pendingPreparationWarehouseId: null,
      preparationGroups: [
        {
          id: "204c6993-628c-4f63-8c56-a0607fc1d016",
          status: "closed",
          warehouseId: "45875468-e06c-4ee8-8a83-5d0be4c60c14",
          warehouseName: "<value>",
          deliveryMethod: "shipping",
          requestedAt: new Date("2026-07-11T23:56:13.140Z"),
          startedAt: new Date("2026-02-06T03:53:26.168Z"),
          closedAt: new Date("2024-10-05T16:31:56.468Z"),
          cancelledAt: null,
          notes: "<value>",
          lines: [],
        },
      ],
      preparations: [
        {
          object: "order_preparation",
          id: "c3be36ec-45ec-4df8-a40e-6f8271abc0d9",
          preparedAt: new Date("2024-12-31T11:20:10.916Z"),
          warehouseName: "<value>",
          deliveryMethod: "shipping",
          remitoDeliveryId: null,
          formattedRemitoNumber: "<value>",
          lines: [
            {
              id: "86c3a6f8-4ae1-4caf-b124-b49799f766d8",
              orderLineId: "073e9a7d-44da-4265-a83e-985e418ab144",
              productId: "5f0dfa58-e45e-4a09-927e-6d7197754d67",
              productName: "<value>",
              sku: "<value>",
              variantOptions: {
                "key": "<value>",
                "key1": "<value>",
              },
              optionNames: [
                "<value 1>",
                "<value 2>",
                "<value 3>",
              ],
              quantity: 2112.23,
              orderedQuantity: 20.7,
              unitPrice: 202146,
              discountPercentage: 7024.87,
            },
          ],
        },
      ],
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