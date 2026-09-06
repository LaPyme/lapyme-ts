# GetApiRemitoByIdResponse

## Example Usage

```typescript
import { GetApiRemitoByIdResponse } from "lapyme/models/operations";

let value: GetApiRemitoByIdResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
    ],
  },
  result: {
    requestId: "<id>",
    data: {
      id: "b74fac62-3b20-4e04-8a73-0afc87ac148d",
      number: "<value>",
      date: new Date("2026-10-27"),
      customer: {
        id: "19e08252-4cae-48ce-af51-86ddbd090f69",
        name: "<value>",
      },
      origin: {
        type: "fulfillment",
        fulfillmentId: "216e1b4c-2317-4ac1-80c8-3c1d10a2c0d1",
      },
      created: new Date("2025-09-21T23:49:57.646Z"),
      remitoNumber: 930253,
      pointOfSale: {
        id: "b1a6e0dd-2918-40fc-823c-525926cccef0",
        number: 576510,
        name: "<value>",
      },
      carrier: "<value>",
      deliveryAddress: "<value>",
      scheduledDate: new Date("2025-02-22"),
      deliveredAt: new Date("2026-08-03T01:59:04.037Z"),
      recipientName: "<value>",
      recipientDni: "<value>",
      driverId: null,
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
      updated: new Date("2024-11-12T19:58:48.147Z"),
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `headers`                                                                    | Record<string, *string*[]>                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `result`                                                                     | [models.ApiRemitoDetailResponse](../../models/api-remito-detail-response.md) | :heavy_check_mark:                                                           | N/A                                                                          |