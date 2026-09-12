# ApiDeliveryNoteDetailResponseData

## Example Usage

```typescript
import { ApiDeliveryNoteDetailResponseData } from "lapyme/models";

let value: ApiDeliveryNoteDetailResponseData = {
  object: "delivery_note",
  id: "44c54b71-3513-4c8e-8518-6252692d65b4",
  number: "<value>",
  date: new Date("2025-12-21"),
  customer: {
    id: "19e08252-4cae-48ce-af51-86ddbd090f69",
    name: "<value>",
  },
  origin: {
    type: "fulfillment",
    fulfillmentId: "09592d89-781c-416d-a375-072beba3adb4",
  },
  createdAt: new Date("2024-11-22T11:03:15.203Z"),
  deliveryNoteNumber: 788428,
  pointOfSale: {
    id: "b1a6e0dd-2918-40fc-823c-525926cccef0",
    number: 576510,
    name: "<value>",
  },
  carrier: null,
  deliveryAddress: "<value>",
  scheduledDate: new Date("2024-02-22"),
  deliveredAt: new Date("2026-09-24T20:46:23.019Z"),
  recipientName: "<value>",
  recipientDocument: "<value>",
  driverId: "c6e06afe-8547-4636-8789-ae390225f9b1",
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
  updatedAt: new Date("2026-08-06T04:26:31.011Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `object`                                                                                      | *"delivery_note"*                                                                             | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `number`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `date`                                                                                        | [Date](../types/rfcdate.md)                                                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `customer`                                                                                    | [models.ApiSharedObject738aa6c207](../models/api-shared-object738aa6c207.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `origin`                                                                                      | *models.ApiDeliveryNoteDetailResponseOrigin*                                                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `deliveryNoteNumber`                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `pointOfSale`                                                                                 | [models.ApiSharedObjectb4d57efe6e](../models/api-shared-objectb4d57efe6e.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `carrier`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `deliveryAddress`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `scheduledDate`                                                                               | [Date](../types/rfcdate.md)                                                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `deliveredAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `recipientName`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `recipientDocument`                                                                           | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `driverId`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `notes`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `items`                                                                                       | [models.ApiSharedObject8e3feaa104](../models/api-shared-object8e3feaa104.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |