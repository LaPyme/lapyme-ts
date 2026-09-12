# ApiRemitoDetailResponseData

## Example Usage

```typescript
import { ApiRemitoDetailResponseData } from "lapyme/models";

let value: ApiRemitoDetailResponseData = {
  id: "07c594ab-fdb0-467f-83d3-bdd652bfac78",
  number: "<value>",
  date: new Date("2024-01-10"),
  customer: {
    id: "19e08252-4cae-48ce-af51-86ddbd090f69",
    name: "<value>",
  },
  origin: {
    type: "custom",
  },
  created: new Date("2025-09-03T12:02:15.839Z"),
  remitoNumber: 897697,
  pointOfSale: {
    id: "b1a6e0dd-2918-40fc-823c-525926cccef0",
    number: 576510,
    name: "<value>",
  },
  carrier: "<value>",
  deliveryAddress: "<value>",
  scheduledDate: new Date("2024-07-05"),
  deliveredAt: new Date("2025-09-12T11:06:53.458Z"),
  recipientName: "<value>",
  recipientDni: "<value>",
  driverId: "07a76c99-6586-45f6-9274-3ed64d4e5c15",
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
  updated: new Date("2024-01-20T21:05:30.413Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `object`                                                                                      | *"remito"*                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `number`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `date`                                                                                        | [Date](../types/rfcdate.md)                                                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `customer`                                                                                    | [models.ApiSharedObject738aa6c207](../models/api-shared-object738aa6c207.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `origin`                                                                                      | *models.ApiRemitoDetailResponseOrigin*                                                        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `remitoNumber`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `pointOfSale`                                                                                 | [models.ApiSharedObjectb4d57efe6e](../models/api-shared-objectb4d57efe6e.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `carrier`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `deliveryAddress`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `scheduledDate`                                                                               | [Date](../types/rfcdate.md)                                                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `deliveredAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `recipientName`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `recipientDni`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `driverId`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `notes`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `items`                                                                                       | [models.ApiSharedObject8e3feaa104](../models/api-shared-object8e3feaa104.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updated`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |