# GetApiRemitoByIdResponse

## Example Usage

```typescript
import { GetApiRemitoByIdResponse } from "lapyme/models/operations";

let value: GetApiRemitoByIdResponse = {
  headers: {},
  result: {
    requestId: "<id>",
    data: {
      id: "b74fac62-3b20-4e04-8a73-0afc87ac148d",
      number: "<value>",
      date: new Date("2026-10-27"),
      customer: {
        id: "ef11a53d-2ff0-454b-9a6d-7e55c6543057",
        name: null,
      },
      origin: {
        type: "fulfillment",
        fulfillmentId: "216e1b4c-2317-4ac1-80c8-3c1d10a2c0d1",
      },
      created: new Date("2025-09-21T23:49:57.646Z"),
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
      remitoNumber: 554909,
      pointOfSale: {
        id: "48b71e69-ecda-4e77-bd2d-ee741653dcb7",
        number: 586183,
        name: "<value>",
      },
      carrier: "<value>",
      deliveryAddress: "<value>",
      scheduledDate: new Date("2026-01-17"),
      deliveredAt: new Date("2026-01-14T13:50:47.639Z"),
      recipientName: "<value>",
      recipientDni: null,
      driverId: "84bd5462-3ebe-4de6-bf3c-ce9e4c369eeb",
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
      updated: new Date("2024-03-23T07:41:42.939Z"),
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `headers`                                                                    | Record<string, *string*[]>                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `result`                                                                     | [models.ApiRemitoDetailResponse](../../models/api-remito-detail-response.md) | :heavy_check_mark:                                                           | N/A                                                                          |