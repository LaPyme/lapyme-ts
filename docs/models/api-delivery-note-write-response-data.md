# ApiDeliveryNoteWriteResponseData

## Example Usage

```typescript
import { ApiDeliveryNoteWriteResponseData } from "lapyme/models";

let value: ApiDeliveryNoteWriteResponseData = {
  numberingMode: "managed",
  revision: 710257,
  legalIssuance: {
    id: "e483a906-fff4-4c6d-984c-49bf72fdd6bc",
    talonarioId: "19e08252-4cae-48ce-af51-86ddbd090f69",
    authorizationId: "cb717042-48a8-4d25-b2ad-42f22efd79af",
    number: 949000,
    formattedNumber: "<value>",
    emissionPoint: 208489,
    cai: "<value>",
    expiresOn: new Date("2026-09-28"),
    issuedOn: new Date("2024-08-29"),
    createdAt: new Date("2025-03-27T19:43:20.861Z"),
    createdBy: "0bdfea5f-cffe-481b-8520-0d8e46fd6f93",
    deliveryRevision: 224952,
    voidedAt: new Date("2025-01-30T21:25:14.238Z"),
    voidedBy: "7071c9ba-2a3f-4b89-a5cc-52dcdc803de4",
    voidReason: "<value>",
  },
  object: "delivery_note",
  id: "682dd6a7-1ce0-4713-bbb6-6cd4d9e05226",
  number: "<value>",
  date: new Date("2025-11-16"),
  customer: {
    id: "ef11a53d-2ff0-454b-9a6d-7e55c6543057",
    name: null,
  },
  origin: {
    type: "custom",
  },
  createdAt: new Date("2024-01-27T19:43:36.915Z"),
  contentHash: "<value>",
  issuer: null,
  eligibleTalonarios: [],
  deliveryNoteNumber: 214901,
  pointOfSale: null,
  carrier: "<value>",
  deliveryAddress: "<value>",
  scheduledDate: new Date("2026-09-23"),
  deliveredAt: new Date("2026-12-18T21:21:57.552Z"),
  recipientName: "<value>",
  recipientDocument: "<value>",
  driverId: "d4a967d3-27a7-4f44-8439-c498ec4d244e",
  notes: "<value>",
  items: [
    {
      id: "3eb9fa06-26d0-4b4f-bc6a-94f9fcc5bcb9",
      saleItemId: "6f0ea941-14cd-4078-9876-9ad1ecbcfb2d",
      quantity: 99.57,
      name: "<value>",
      isCustom: true,
      warehouseId: "d52fcc35-0faa-439c-985f-cd122d77f1f9",
      product: {
        id: "b916bc44-e729-46fd-a01e-0965ef2c552b",
        sku: "<value>",
        name: "<value>",
        optionNames: [],
        variantOptions: {
          "key": "<value>",
          "key1": "<value>",
        },
        productType: "product",
        kitUnits: 8793.1,
      },
    },
  ],
  updatedAt: new Date("2025-12-29T05:02:14.451Z"),
  idempotentReplay: false,
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `numberingMode`                                                                                                | [models.ApiSharedEnum4b1b5db8e0](../models/api-shared-enum4b1b5db8e0.md)                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `revision`                                                                                                     | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `legalIssuance`                                                                                                | [models.ApiSharedObject5a67c4e4e1](../models/api-shared-object5a67c4e4e1.md)                                   | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `object`                                                                                                       | *"delivery_note"*                                                                                              | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `id`                                                                                                           | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `number`                                                                                                       | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `date`                                                                                                         | [Date](../types/rfcdate.md)                                                                                    | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `customer`                                                                                                     | [models.ApiSharedObject5e70e1df84](../models/api-shared-object5e70e1df84.md)                                   | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `origin`                                                                                                       | *models.ApiDeliveryNoteWriteResponseOrigin*                                                                    | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `createdAt`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                  | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `contentHash`                                                                                                  | *string*                                                                                                       | :heavy_check_mark:                                                                                             | Huella de los datos de impresión revisados. Enviá este valor como expected_content_hash al emitir un borrador. |
| `issuer`                                                                                                       | [models.ApiSharedObjectd6ec566aaf](../models/api-shared-objectd6ec566aaf.md)                                   | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `eligibleTalonarios`                                                                                           | [models.ApiSharedObjectf3b611a53b](../models/api-shared-objectf3b611a53b.md)[]                                 | :heavy_check_mark:                                                                                             | Talonarios vigentes para el borrador y su ubicación. La hoja propuesta se confirma al emitir.                  |
| `deliveryNoteNumber`                                                                                           | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `pointOfSale`                                                                                                  | [models.ApiSharedObject94c0cab352](../models/api-shared-object94c0cab352.md)                                   | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `carrier`                                                                                                      | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `deliveryAddress`                                                                                              | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `scheduledDate`                                                                                                | [Date](../types/rfcdate.md)                                                                                    | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `deliveredAt`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                  | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `recipientName`                                                                                                | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `recipientDocument`                                                                                            | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `driverId`                                                                                                     | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `notes`                                                                                                        | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `items`                                                                                                        | [models.ApiSharedObject912052d04a](../models/api-shared-object912052d04a.md)[]                                 | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `updatedAt`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                  | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `idempotentReplay`                                                                                             | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | N/A                                                                                                            |