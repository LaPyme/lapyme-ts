# CreateApiDeliveryNoteResponse

## Example Usage

```typescript
import { CreateApiDeliveryNoteResponse } from "lapyme/models/operations";

let value: CreateApiDeliveryNoteResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
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
          cai: "<value>",
          expiresOn: new Date("2025-03-10"),
        },
      ],
      deliveryNoteNumber: 864550,
      pointOfSale: {
        id: "48b71e69-ecda-4e77-bd2d-ee741653dcb7",
        number: 586183,
        name: "<value>",
      },
      carrier: "<value>",
      deliveryAddress: "<value>",
      scheduledDate: new Date("2025-09-30"),
      deliveredAt: new Date("2024-11-13T18:13:34.156Z"),
      recipientName: "<value>",
      recipientDocument: "<value>",
      driverId: "3a8c4d8b-ca43-41f7-8b92-7564d19302fa",
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
      updatedAt: new Date("2024-04-01T10:21:47.638Z"),
      idempotentReplay: true,
    },
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `headers`                                                                               | Record<string, *string*[]>                                                              | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `result`                                                                                | [models.ApiDeliveryNoteWriteResponse](../../models/api-delivery-note-write-response.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |