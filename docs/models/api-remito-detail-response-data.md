# ApiRemitoDetailResponseData

## Example Usage

```typescript
import { ApiRemitoDetailResponseData } from "lapyme/models";

let value: ApiRemitoDetailResponseData = {
  id: "07c594ab-fdb0-467f-83d3-bdd652bfac78",
  number: "<value>",
  date: new Date("2024-01-10"),
  customer: {
    id: "0dbbaee6-23ac-4765-b8d0-62032f062890",
    name: "<value>",
  },
  origin: {
    type: "custom",
  },
  created: new Date("2025-09-03T12:02:15.839Z"),
  remitoNumber: 897697,
  pointOfSale: {
    id: "3db6ada5-1184-4bd5-a462-3ebede6f3cce",
    number: 894228,
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
      id: "03d43e27-d4e4-4457-90e8-ca8c7dbfb987",
      saleItemId: "488b2663-f8f1-49fd-8d7b-374d6758c109",
      quantity: 2153.29,
      name: "<value>",
      isCustom: true,
      warehouseId: "b38cd73e-7ec2-451e-8054-b326a55164a4",
      product: {
        id: "7bf5c929-b8b8-4038-9374-8488dddeb340",
        sku: "<value>",
        name: "<value>",
        optionNames: [
          "<value 1>",
          "<value 2>",
        ],
        variantOptions: {
          "key": "<value>",
          "key1": "<value>",
        },
        productType: "combo",
        kitUnits: 2602.65,
      },
    },
  ],
  updated: new Date("2024-03-30T15:26:35.377Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `object`                                                                                      | *"remito"*                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `number`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `date`                                                                                        | [Date](../types/rfcdate.md)                                                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `customer`                                                                                    | [models.ApiSharedObject7c9936d5e7](../models/api-shared-object7c9936d5e7.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
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
| `items`                                                                                       | [models.ApiSharedObject180205ecec](../models/api-shared-object180205ecec.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updated`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |