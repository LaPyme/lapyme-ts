# ApiDeliveryNoteListResponseData

## Example Usage

```typescript
import { ApiDeliveryNoteListResponseData } from "lapyme/models";

let value: ApiDeliveryNoteListResponseData = {
  numberingMode: "managed",
  revision: 503798,
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
  id: "3d431700-d9f5-4d3c-8171-3198c8c169d2",
  number: "<value>",
  date: new Date("2025-01-05"),
  customer: null,
  origin: {
    type: "sale",
    saleId: "742eec8b-f5f5-419f-89c8-28f8be5a79cf",
  },
  createdAt: new Date("2026-09-06T14:11:58.049Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `numberingMode`                                                                               | [models.ApiSharedEnum4b1b5db8e0](../models/api-shared-enum4b1b5db8e0.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `revision`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `legalIssuance`                                                                               | [models.ApiSharedObject5a67c4e4e1](../models/api-shared-object5a67c4e4e1.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `object`                                                                                      | *"delivery_note"*                                                                             | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `number`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `date`                                                                                        | [Date](../types/rfcdate.md)                                                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `customer`                                                                                    | [models.ApiSharedObject5e70e1df84](../models/api-shared-object5e70e1df84.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `origin`                                                                                      | *models.ApiDeliveryNoteListResponseOrigin*                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |