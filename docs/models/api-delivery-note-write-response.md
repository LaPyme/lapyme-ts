# ApiDeliveryNoteWriteResponse

## Example Usage

```typescript
import { ApiDeliveryNoteWriteResponse } from "lapyme/models";

let value: ApiDeliveryNoteWriteResponse = {
  requestId: "<id>",
  data: {
    numberingMode: "legacy",
    revision: 727755,
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
    id: "2ddca205-ff6a-4102-9f71-a68823c0c700",
    number: "<value>",
    date: new Date("2024-05-31"),
    customer: {
      id: "ef11a53d-2ff0-454b-9a6d-7e55c6543057",
      name: null,
    },
    origin: {
      type: "sale",
      saleId: "abd829e5-7495-4f53-9050-44588a1d8942",
    },
    createdAt: new Date("2024-12-31T13:31:47.420Z"),
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
    eligibleTalonarios: [
      {
        id: "9606ea33-0817-4058-9d45-0426258273f7",
        name: "<value>",
        emissionPoint: 891673,
        nextNumber: 378931,
        layoutRevisionId: "de48b71e-69ec-4dae-a77d-2dee741653dc",
        cai: "<value>",
        expiresOn: new Date("2025-05-27"),
      },
    ],
    deliveryNoteNumber: 934468,
    pointOfSale: {
      id: "8aa29745-f83a-48c4-9d8b-ca431f7b9275",
      number: 260781,
      name: "<value>",
    },
    carrier: "<value>",
    deliveryAddress: "<value>",
    scheduledDate: new Date("2024-02-22"),
    deliveredAt: new Date("2026-11-08T23:21:44.979Z"),
    recipientName: "<value>",
    recipientDocument: "<value>",
    driverId: "f3eb9fa0-626d-40b4-afc6-a94f9fcc5bcb",
    notes: "<value>",
    items: [
      {
        id: "6f0ea941-14cd-4078-9876-9ad1ecbcfb2d",
        saleItemId: null,
        quantity: 7439.05,
        name: null,
        isCustom: true,
        warehouseId: "52fcc350-faa3-49c8-95fc-d122d77f1f94",
        product: {
          id: "916bc44e-7296-4fd0-91e0-965ef2c552b8",
          sku: "<value>",
          name: "<value>",
          optionNames: [
            "<value 1>",
          ],
          variantOptions: {
            "key": "<value>",
            "key1": "<value>",
          },
          productType: null,
          kitUnits: 8793.1,
        },
      },
    ],
    updatedAt: new Date("2024-04-01T10:21:47.638Z"),
    idempotentReplay: true,
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `requestId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `data`                                                                                        | [models.ApiDeliveryNoteWriteResponseData](../models/api-delivery-note-write-response-data.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |