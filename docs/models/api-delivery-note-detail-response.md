# ApiDeliveryNoteDetailResponse

## Example Usage

```typescript
import { ApiDeliveryNoteDetailResponse } from "lapyme/models";

let value: ApiDeliveryNoteDetailResponse = {
  requestId: "<id>",
  data: {
    numberingMode: "managed",
    revision: 396475,
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
    id: "4d595840-7626-4d7f-a94b-27fc10221f23",
    number: "<value>",
    date: new Date("2025-08-29"),
    customer: {
      id: "ef11a53d-2ff0-454b-9a6d-7e55c6543057",
      name: null,
    },
    origin: {
      type: "fulfillment",
      fulfillmentId: "fb61fb91-2127-44e9-88ee-75ad6fbe437e",
    },
    createdAt: new Date("2026-03-12T14:48:21.824Z"),
    contentHash: "<value>",
    issuer: {
      legalName: "<value>",
      taxId: null,
      taxIdType: "<value>",
      taxCategory: "<value>",
      address: "2140 Church Street",
      apartment: "<value>",
      city: "East Jonatan",
      province: "<value>",
      postalCode: "56347-0827",
      phone: "649.461.5809 x474",
      grossIncomeTaxAmount: "<value>",
      activitiesStartedAt: "<value>",
    },
    eligibleTalonarios: [],
    deliveryNoteNumber: 933193,
    pointOfSale: null,
    carrier: "<value>",
    deliveryAddress: "<value>",
    scheduledDate: new Date("2025-10-05"),
    deliveredAt: null,
    recipientName: "<value>",
    recipientDocument: null,
    driverId: "c23c5259-26cc-4cef-9009-3a5cf749db51",
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
    updatedAt: new Date("2025-09-15T05:27:18.753Z"),
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `requestId`                                                                                     | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `data`                                                                                          | [models.ApiDeliveryNoteDetailResponseData](../models/api-delivery-note-detail-response-data.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |