# ApiDeliveryNoteDetailResponse

## Example Usage

```typescript
import { ApiDeliveryNoteDetailResponse } from "lapyme/models";

let value: ApiDeliveryNoteDetailResponse = {
  requestId: "<id>",
  data: {
    object: "delivery_note",
    id: "f6c4d595-8407-4626-bd7f-94b27fc10221",
    number: "<value>",
    date: new Date("2024-08-26"),
    customer: {
      id: "19e08252-4cae-48ce-af51-86ddbd090f69",
      name: "<value>",
    },
    origin: {
      type: "fulfillment",
      fulfillmentId: "8cafb61f-b912-4127-84e9-8ee75ad6fbe4",
    },
    createdAt: new Date("2025-04-25T04:30:52.095Z"),
    deliveryNoteNumber: 923316,
    pointOfSale: {
      id: "b1a6e0dd-2918-40fc-823c-525926cccef0",
      number: 576510,
      name: "<value>",
    },
    carrier: "<value>",
    deliveryAddress: "<value>",
    scheduledDate: new Date("2026-12-14"),
    deliveredAt: new Date("2024-11-05T02:55:01.943Z"),
    recipientName: "<value>",
    recipientDocument: "<value>",
    driverId: "5148894c-ab41-4f46-887c-cc24bf34d19d",
    notes: "<value>",
    items: [
      {
        id: "7f376278-9832-4b55-be08-6331412f7414",
        saleItemId: "322111f1-844d-41d6-95c2-bf08a32c780a",
        quantity: 6062.95,
        name: "<value>",
        isCustom: false,
        warehouseId: "63cb2173-fd81-4aaa-af9b-14a790118e09",
        product: {
          id: "895206ca-d4af-4163-89c6-25a67cad81d3",
          sku: "<value>",
          name: null,
          optionNames: [
            "<value 1>",
          ],
          variantOptions: {
            "key": "<value>",
            "key1": "<value>",
            "key2": "<value>",
          },
          productType: "kit",
          kitUnits: 3521.5,
        },
      },
    ],
    updatedAt: new Date("2024-06-10T14:59:52.351Z"),
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `requestId`                                                                                     | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `data`                                                                                          | [models.ApiDeliveryNoteDetailResponseData](../models/api-delivery-note-detail-response-data.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |